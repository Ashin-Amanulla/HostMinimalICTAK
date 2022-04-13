const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema({

    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    tags: {
        type: String,
        required: true
    },
    index: {
        type: Number,
        required:true
    },
    creation_date:Date


});

var BlogDATA = mongoose.model('BlogData', BlogSchema);

module.exports = BlogDATA;