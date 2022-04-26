const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

const COURSEDETAILS = require("../models/courseData");
const BROCHUREDATA = require('../models/brochure')

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ictakKerala20k",
    pass: "ICTKerala@2021",
  },
});

//Course Details Insert
router.post("/addCourse", async (req, res, next) => {
  try {
    var indx;

    COURSEDETAILS.findOne()
      .sort("-index")
      .exec(async function (err, course) {
        if (course == null) {
          indx = 1;
        } else {
          indx = course.index;
          indx = indx + 1;
        }

        var item = {
          title: req.body.title,
          code: req.body.code,
          category: req.body.category,
          sub: req.body.sub,
          image: req.body.image,
          details: req.body.details,
          duration_months: req.body.duration_months,
          duration_internship: req.body.duration_internship,
          mode: req.body.mode,
          fees: req.body.fees,
          brochure: req.body.brochure,
          course_certificate: req.body.course_certificate,
          internship_certificate: req.body.internship_certificate,
          placement_list: req.body.placement_list,
          objectives: req.body.objectives,
          highlights: req.body.highlights,
          test: req.body.test,
          eligibility: req.body.eligibility,
          agenda: req.body.agenda,
          fee_detail: req.body.fee_detail,
          start_date: req.body.start_date,
          end_date: req.body.end_date,
          status: req.body.status,
          thumbnail: req.body.thumbnail,
          showboxArray:req.body.showboxArray,

          index: indx,
        };

        const courseData = new COURSEDETAILS(item);
        const savedIdData = await courseData.save();

        res.send({ savedIdData });
      });
  } catch (error) {
    console.log(error);
  }
});

//Course List Fetch
router.get("/getCourses", async (req, res, next) => {
  try {
    const courseList = await COURSEDETAILS.find().sort({ index: 1 });
    res.send(courseList);
  } catch (error) {
    console.log(error);
  }
});

//Course Details Insert
router.post("/updateCourse", async (req, res, next) => {
  try {
    var item = {
      title: req.body.course.title,
      code: req.body.course.code,
      category: req.body.course.category,
      sub: req.body.course.sub,
      image: req.body.course.image,
      details: req.body.course.details,
      duration_months: req.body.course.duration_months,
      duration_internship: req.body.course.duration_internship,
      mode: req.body.course.mode,
      fees: req.body.course.fees,
      brochure: req.body.course.brochure,
      course_certificate: req.body.course.course_certificate,
      internship_certificate: req.body.course.internship_certificate,
      placement_list: req.body.course.placement_list,
      objectives: req.body.course.objectives,
      highlights: req.body.course.highlights,
      test: req.body.course.test,
      eligibility: req.body.course.eligibility,
      agenda: req.body.course.agenda,
      fee_detail: req.body.course.fee_detail,
      start_date: req.body.course.start_date,
      end_date: req.body.course.end_date,
      status: req.body.course.status,
      thumbnail: req.body.course.thumbnail,
      showboxArray:req.body.course.showboxArray
    };
    let id = req.body.id;
    let updateData = { $set: item };

    // const courseData = new COURSEDETAILS(item)   //!Doesnt Work with update function
    const savedIdData = await COURSEDETAILS.findByIdAndUpdate(
      { _id: id },
      updateData
    );
    res.send({ savedIdData });
  } catch (error) {
    console.log(error);
  }
});

//Delete Course
router.post("/deleteCourse", async (req, res, next) => {
  try {
    let id = req.body.id;

    const deleteCourse = await COURSEDETAILS.findByIdAndDelete({ _id: id });
    res.send(deleteCourse);
  } catch (error) {
    console.log(error);
  }
});

//get Course by Id
router.post("/getCourseById", async (req, res, next) => {
  try {
    console.log(req.body.id);
    let _id = req.body.id;
    const singleCourse = await COURSEDETAILS.findById({ _id: _id });
    res.send(singleCourse);
  } catch (error) {
    console.log(error);
  }
});

//get Course by Code
router.post("/getCourseByCode", async (req, res, next) => {
  try {
    let code = req.body.code;
    const singleCourse = await COURSEDETAILS.find({ code: code });
    res.send(singleCourse);
  } catch (error) {
    console.log(error);
  }
});

//update Index

router.put("/updateIndex", async (req, res, next) => {
  id = req.body._id;
  title = req.body.title;
  index = req.body.index;
  console.log(`update of ${title} with value ${index}`);

  const savedIdData = await COURSEDETAILS.findByIdAndUpdate(
    { _id: id },
    { $set: { index: index } }
  );

  res.send({ savedIdData });
});

// brochure
router.post("/brochure", async (req, res, next) => {
  try {
    
    
    var item = {
        name: req.body.brochure.name,
        email: req.body.brochure.email,
        phoneno: req.body.brochure.phoneno,
        qualification: req.body.brochure.qualification,
        creation_date:Date.now()

    }

    const brochureData = new BROCHUREDATA(item);
    const savedIdData = await brochureData.save();

    res.send({ savedIdData });


  } catch (error) {
    console.log(error);
  }
});


router.get("/getBrochures", async (req, res, next) => {
  try {
    const brochureList = await BROCHUREDATA.find()
    res.send(brochureList);
  } catch (error) {
    console.log(error);
  }
});


module.exports = router;
