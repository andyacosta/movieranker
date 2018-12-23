var express = require('express');
var router = express.Router();

var movie_controller = require('../controllers/movieController.js');

router.get('/', movie_controller.index);

router.get('/movies', movie_controller.get_movies);

module.exports = router;