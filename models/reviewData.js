const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    reviewer_code:{
        type:String
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
    place:{
        type:String
    },
    designation: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    rating:{
        type:Number
    }


});

var REVIEWDATA = mongoose.model('ReviewList', ReviewSchema);

module.exports = REVIEWDATA;