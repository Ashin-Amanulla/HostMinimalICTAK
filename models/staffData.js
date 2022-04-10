const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StaffSchema = new Schema({
 
  name: {
      type:String,
      required:true
  },
  designation: {
      type:String,
      required:true
  },
  employee_code:{
      type:String,
      required:true
  },
  grade:{
      type:String,
      required:true
  },
  division: {
      type:String,
      required:true
  },
  zone: {
    type:String,
    required:true
},
  photo: {
      type:String,
      required:true
  },
  details: {
      type:String,
      required:true
  },
  mail: {
      type:String,
      required:true
  },
  linkedIn: {
      type:String,
      required:true
  },
  facebook: {
      type:String,
  },
  instagram: {
      type:String,
  },
  others: {
      type:String,
  },
  status: {
      type:String,
      required:true
  },
  index: {
    type: Number
}
 
});

var STAFFDATA = mongoose.model('AssociateList', StaffSchema);

module.exports = STAFFDATA;