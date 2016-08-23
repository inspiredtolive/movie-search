var models = require('../models/models.js');

exports.movies = {
  get: function (req, res) {
    models.movies.get(function(movies) {
      res.statusCode = 200;
      res.end(JSON.stringify({results: movies}));
    });
  },
  post: function (req, res) {
    console.log('handling post')
    var json = '';
    req.on('data', (chunk)=>{
      json += chunk;
    });
    req.on('end', ()=>{
      models.movies.post(JSON.parse(json), (results)=>{
        console.log('Sending filtered movies', console.log(results));
        res.statusCode = 200;
        res.end(JSON.stringify({results: results}));
      })
    });
  }
};
