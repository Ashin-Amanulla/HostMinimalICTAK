const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    testimonial: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },


});

var REVIEWDATA = mongoose.model('ReviewList', ReviewSchema);

module.exports = REVIEWDATA;