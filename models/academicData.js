const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AMSchema = new Schema({

    slno: {
        type: Number,
        // required: true
    },
    mem_id: {
        type: String,
        // required: true
    },
    name: {
        type: String,
        // required: true
    },
    website: {
        type: String,
        // required: true
    }


});

var AcademicDATA = mongoose.model('AcademicData', AMSchema);

module.exports = AcademicDATA;