var Movie = require('../models/movie');

var async = require('async');

exports.index = function(req, res) {
    async.parallel({
        movie_count: (callback) => {
            movie.count(callback);
        }
    }, (err, results) => {
        res.send('index', {title: 'Movie Home', error: err, data: results});
    });
};

exports.get_movies = function(req, res, next) {
    console.log('get movies');
    Movie.find({}).then(movie => {
        res.json(movie);
    })
};

