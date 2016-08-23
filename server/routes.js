var router = require('express').Router();
var control = require('./controllers/controllers.js');

router.get('/movies', control.movies.get);
router.post('/movies', control.movies.post);

module.exports = router;