var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var MovieSchema = new Schema({
    title: {type: String, required: true},
    director: {type: String, ref: 'Director'},
    year: {type: Number}
});

MovieSchema.virtual('url')
.get( () => {
    return '/catalog/movie/'+this._id;
});

module.exports = mongoose.model('Movie', MovieSchema);