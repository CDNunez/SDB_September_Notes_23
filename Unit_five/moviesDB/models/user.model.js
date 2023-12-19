const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    // columns for our document
    firstName: {
        type: String, //what datatype this is expecting.
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true, // default is false
        unique: true, // will default to false. duplicate emails will throw an error response
    },
    password: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('User', UserSchema);