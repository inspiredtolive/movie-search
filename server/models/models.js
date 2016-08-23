var Promise = require('bluebird');
var dbConnection = require('../db_connection.js');
var query = Promise.promisify(dbConnection.query.bind(dbConnection));

var filter = {
  title: function (title) {
    return ` && movies.title LIKE "${title}%"`;
  },
  director: function (director) {
    return ` && directors.director_name LIKE '${director}%'`;
  },
  year: function (year) {
    return ` && movies.year LIKE '${year}%'`;
  },
  genre: function (genre) {
    return ` && genres.genre_name LIKE '${genre}%'`;
  },
};


var possibleOptions = ['title', 'director', 'year'];

exports.movies = {
  get: function (cb, options) {
    console.log('Getting movies with these options: ', options);
    var moviesResults = [];
    var queryFilter = '';
    var genFilter = '';
    for (var key in options) {
      if (key === 'genre') {
        genFilter = filter[key](options['genre']);
      } else if (filter[key]) {
        queryFilter += filter[key](options[key]);
      } 
    }
    console.log(queryFilter, genFilter)
    // query movies 
    query(`SELECT movies.movies_id, movies.title, directors.director_name, year FROM movies, directors WHERE movies.director_id=directors.directors_id${queryFilter}`)
    .then((movies)=> {
      Promise.all(movies.map(({movies_id, title, director_name, year})=>{
        return query(`SELECT genres.genre_name FROM genres, mov_gen, movies WHERE mov_gen.movie_id="${movies_id}" && movies.movies_id='${movies_id}' && genres.genres_id=mov_gen.genre_id && movies.title="${title}"`)
              .then((genres)=>{
                var genreNames = genres.map(({genre_name})=>genre_name);
                if ( (options && options['genre'] && genreNames.indexOf(options['genre']) > -1) || options === undefined || options['genre'] === undefined) {
                  moviesResults.push({
                    title: title,
                    year: year,
                    director: director_name,
                    genres: genreNames
                  });
                }
              });
      }))
      .then((value)=>{
        cb(moviesResults);
      });
    });
  },
  post: function (options, cb) {
    this.get((results)=>{
      cb(results);
    }, options);
  }
};