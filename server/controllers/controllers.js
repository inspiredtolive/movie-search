var models = require('../models/models.js');

exports.movies = {
  get: function (req, res) {
    models.movies.get(function(movies) {
      res.end(JSON.stringify({results: movies}));
    });
  },
  post: function (req, res) {}
};
