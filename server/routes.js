var router = require('express').Router();
var control = require('./controllers/controllers.js');

router.get('/movies', control.movies.get);

module.exports = router;