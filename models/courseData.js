const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({

    title: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    sub: {
        type: String,
    },
    image: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    duration_months: {
        type: String,
        required: true
    },
    duration_internship: {
        type: String,
        required: true
    },
    mode: {
        type: String,
        required: true
    },
    fees: {
        type: String,
        required: true
    },
    brochure: {
        type: String,
        required: true
    },
    course_certificate: {
        type: String,
        required: true
    },
    internship_certificate: {
        type: String,
        required: true
    },
    placement_list: {
        type: String,
        required: true
    },
    objectives: {
        type: String,
        required: true
    },
    highlights: {
        type: String,
        required: true
    },
    test: {
        type: String,
        required: true
    },
    eligibility: {
        type: String,
        required: true
    },
    agenda: {
        type: String,
        required: true
    },
    fee_detail: {
        type: String,
        required: true
    },
    start_date: {
        type: String,
    },
    end_date: {
        type: String,
    },
    status: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
    },
    showboxArray: [{ sbImages: String }],
    index: {
        type: Number
    }

});

var COURSEDATA = mongoose.model('CourseList', CourseSchema);

module.exports = COURSEDATA;