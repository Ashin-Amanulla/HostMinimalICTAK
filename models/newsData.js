const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NewsSchema = new Schema({

    title: {
        type: String,
        // required: true
    },
    date: {
        type: String,
        // required: true
    },
    content: {
        type: String,
        // required: true
    },
    index: {
        type: Number,
        // required:true
    },
    creation_date:Date


});

var NewsDATA = mongoose.model('NewsData', NewsSchema);

module.exports = NewsDATA;