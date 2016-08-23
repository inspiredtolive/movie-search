var dbConnection = require('./server/db_connection.js');
var Promise = require('bluebird');
var _ = require('underscore');

var query = Promise.promisify(dbConnection.query.bind(dbConnection));

var movies = [
  {
    title: 'Toy Story 3',
    year: '2010',
    director: 'Lee Unkrich',
    genres: [ 'Animation', 'Adventure', 'Comedy' ]
  },
  {
    title: 'Hellboy II: The Golden Army',
    year: '2008',
    director: 'Guillermo del Toro',
    genres: [ 'Action', 'Adventure', 'Fantasy' ]
  },
  {
    title: 'Deapool',
    year: '2016',
    director: 'Tim Miller',
    genres: [ 'Action', 'Adventure', 'Comedy' ]
  },
  {
    title: 'Suicide Squad',
    year: '2016',
    director: 'David Ayer',
    genres: [ 'Action', 'Adventure', 'Comedy' ]
  },
  {
    title: 'Zootopia',
    year: '2010',
    director: 'Byron Howard',
    genres: [ 'Animation', 'Action', 'Adventure' ]
  },
  {
    title: 'Seed of Chucky',
    year: '2004',
    director: 'Don Mancini',
    genres: [ 'Comedy', 'Fantasy', 'Horror' ]
  },
  {
    title: 'Tangled',
    year: '2010',
    director: 'Byron Howard',
    genres: [ 'Animation', 'Adventure', 'Comedy' ]
  },
  {
    title: 'Home Alone',
    year: '1990',
    director: 'Chris Columbus',
    genres: [ 'Family', 'Comedy' ]
  },
  {
    title: 'Harry Potter and the Sorcerer\'s Stone',
    year: '2001',
    director: 'Chris Columbus',
    genres: [ 'Adventure', 'Family', 'Fantasy' ]
  },
  {
    title: 'Harry Potter and the Chamber of Secrets',
    year: '2002',
    director: 'Chris Columbus',
    genres: [ 'Adventure', 'Family', 'Fantasy' ]
  },
  {
    title: 'Harry Potter and the Prisoner of Azkaban',
    year: '2004',
    director: 'Alfonso Cuarón',
    genres: [ 'Adventure', 'Family', 'Fantasy' ]
  },
  {
    title: 'Harry Potter and the Order of the Phoenix',
    year: '2007',
    director: 'David Yates',
    genres: [ 'Adventure', 'Family', 'Fantasy' ]
  },
  {
    title: 'Harry Potter and the Half-Blood Prince',
    year: '2009',
    director: 'David Yates',
    genres: [ 'Adventure', 'Family', 'Fantasy' ]
  },
  {
    title: 'Harry Potter and the Deathly Hallows: Part 1',
    year: '2010',
    director: 'David Yates',
    genres: [ 'Adventure', 'Family', 'Fantasy' ]
  },
  {
    title: 'Harry Potter and the Deathly Hallows: Part 2',
    year: '2011',
    director: 'David Yates',
    genres: [ 'Adventure', 'Family', 'Fantasy' ]
  },
];

var queries = [];
var genresIds = [];
var uniqueDir = {};
var uniqueGen = {};

// Insert all directors and genres
movies.forEach(({title, year, director, genres})=>{
  if (uniqueDir[director] === undefined) {
    queries.push(query(`INSERT IGNORE INTO directors (director_name) VALUES ('${director}')`));
    uniqueDir[director] = true;
  }
  genres.forEach((genre)=>{
    if (uniqueGen[genre] === undefined) {
      queries.push(query(`INSERT IGNORE INTO genres (genre_name) VALUES ('${genre}')`));
      uniqueGen[genre] = true;
    }
  });
});

// After inserting directors and genres
Promise.all(queries).then(()=>{
  // Insert all movies
  movies.forEach(({title, year, director, genres})=>{
    queries = [];

    // Get ids of director and genres for this movie
    queries.push(query(`SELECT directors_id FROM directors WHERE director_name ='${director}'`));
    queries = queries.concat(genres.map((genre)=>query(`SELECT genres_id FROM genres WHERE genre_name ='${genre}'`)));

    // After getting the ids,
    // Insert the movie and connect them to the genres
    Promise.all(queries)
    .then(([[{directors_id}], ...genres])=>{
      query(`INSERT INTO movies (title, director_id, year) VALUES ("${title}",'${directors_id}','${year}')`)
      .then(({insertId})=>{
        genres.forEach(([{genres_id}])=>{
          query(`INSERT INTO mov_gen (movie_id, genre_id) VALUE ('${insertId}','${genres_id}')`);
        });
      });
    });
  });
})
.catch((err)=>{
  console.log('Error:', err.code);
});
