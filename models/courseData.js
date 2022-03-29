const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
 
  title: {
      type:String,
      required:true
  },
  code: {
      type:String,
      required:true
  },
  category: {
      type:String,
      required:true
  },
  image: {
      type:String,
      required:true
  },
  details: {
      type:String,
      required:true
  },
  duration_months: {
      type:String,
      required:true
  },
  duration_hours: {
      type:String,
      required:true
  },
  modules: {
      type:String,
      required:true
  },
  fees: {
      type:String,
      required:true
  },
  brochure: {
      type:String,
      required:true
  },
  course_certificate: {
      type:String,
      required:true
  },
  internship_certificate: {
      type:String,
      required:true
  },
  placement_list: {
      type:String,
      required:true
  },
  objectives: {
      type:String,
      required:true
  },
  highlights: {
      type:String,
      required:true
  },
  test: {
      type:String,
      required:true
  },
  eligibility: {
      type:String,
      required:true
  },
  agenda: {
      type:String,
      required:true
  },
  fee_detail: {
      type:String,
      required:true
  },
  start_date: {
      type:String,
      required:true
  },
  end_date: {
      type:String,
      required:true
  },
  status: {
      type:String,
      required:true
  },
  thumbnail: {
      type:String,
      required:true
  }
});

var courseData = mongoose.model('CourseList', CourseSchema);

module.exports = courseData;