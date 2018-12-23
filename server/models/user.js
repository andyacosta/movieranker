var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    userId: {type: Schema.ObjectId, ref: 'User', required: true},
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String}
});

UserSchema.virtual('url')
    .get(() => {
        return '/user/'+this._id;
    });

module.exports = mongoose.model('User', UserSchema);