const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubsSchema = new Schema({

    email: {
        type: String,
        required: true
    },

    creation_date: {
        type: Date
    }


});

var SubsDATA = mongoose.model('SubsData', SubsSchema);

module.exports = SubsDATA;