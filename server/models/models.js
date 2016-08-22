var Promise = require('bluebird');
var dbConnection = require('../db_connection.js');
var query = Promise.promisify(dbConnection.query.bind(dbConnection));

exports.movies = {
  get: function (cb) {
    // SELECT movies.title, directors.director_name, year, genres.genre_name FROM movies, directors, genres, mov_gen WHERE movies.director_id=directors.directors_id && movies.movies_id=mov_gen.movie_id &&  mov_gen.genre_id=genres.genres_id;
    var movies = [];
    query(`SELECT movies.movies_id, movies.title, directors.director_name, year FROM movies, directors WHERE movies.director_id=directors.directors_id`)
    .then((movies)=> {
      Promise.all(movies.map(({movies_id, title, director_name, year})=>{
        query(`SELECT genres.genre_name FROM genres, mov_gen, movies WHERE mov_gen.movie_id="${movies_id}" && genres.genres_id=mov_gen.genre_id && movies.title="${title}"`)
        .then((genres)=>{
          movies.push({
            title: title,
            year: year,
            director: director_name,
            genres: genres.map(({genre_name})=>genre_name)
          });
        });
      }))
      .then(()=>{
        cb(movies);
      });
    });
  },
  post: function () {}
};