const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BrochureSchema = new Schema({

    name: {
        type: String,
        // required: true
    },
    email: {
        type: String,
        // required: true
    },
    phoneno: {
        type: String,
        // required: true
    },
    qualification: {
        type: String,
        // required:true
    },
    creation_date: {
        type: Date
    }
});

var BrochureDATA = mongoose.model('brochureData', BrochureSchema);

module.exports = BrochureDATA;