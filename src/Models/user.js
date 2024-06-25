var mongoose = require('mongoose');
var schema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        default: ''
    },
    dateBirthday:{
        type: String,
        default: ''
    },
    firstName: {
        type: String,
        default: ''
    },
    password: {
        type: String,
        default: ''
    },
    lastName: {
        type: String,
        default: ''
    },s
});
var user = new mongoose.model('User', schema);
module.exports = user;