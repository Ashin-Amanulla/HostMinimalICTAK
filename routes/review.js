const express = require('express');
const router = express.Router()


const REVIEWDETAILS = require('../models/reviewData');




/* multer start */
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/images');
    },
    filename: (req, file, cb) => {
        cb(
            null,
            `${file.fieldname}-${+Date.now()}.${file.originalname.split('.')[1]}`
        );
    }
});

const upload = multer({ storage: storage });


const cpUpload = upload.fields([
    { name: 'image', maxCount: 1 }
]);
/* multer end */


//Staff Details Insert
router.post('/addReview', async (req, res, next) => {

    try {

        var item = {
            name: req.body.name,
            course: req.body.course,
            photo: req.body.photo,
            testimonial:req.body.testimonial,
            designation: req.body.designation,
            company: req.body.company,
         
        }


        const Data = new REVIEWDETAILS(item)
        const savedIdData = await Data.save()

        res.send({ savedIdData })


    } catch (error) {

        console.log(error)
    }
})

//Staff List Fetch
router.get('/getReviews', async (req, res, next) => {

    try {
        const List = await REVIEWDETAILS.find()
        res.send(List)

    } catch (error) {
        console.log(error)
    }
})


//Course Details Insert
router.post('/updateReview', async (req, res, next) => {

    try {

        var item = {
            name: req.body.review.name,
            course: req.body.review.course,
            photo: req.body.review.photo,
            testimonial:req.body.review.testimonial,
            designation: req.body.review.designation,
            company: req.body.review.company,
         
        }

        console.log(item)
        let id = req.body.id
        let updateData = { $set: item };


        const savedIdData = await REVIEWDETAILS.findByIdAndUpdate({ "_id": id }, updateData)
        res.send({ savedIdData })

    } catch (error) {

        console.log(error)
    }
})


//Delete Course
router.post('/deleteReview', async (req, res, next) => {

    try {
        let id = req.body.id

        const deleteReview = await REVIEWDETAILS.findByIdAndDelete({ '_id': id })
        res.send(deleteReview)

    } catch (error) {
        console.log(error)
    }
})

//get Course by Id
router.post('/getReviewById', async (req, res, next) => {

    try {

        console.log(req.body.id)
        let _id = req.body.id
        const singleReview = await REVIEWDETAILS.findById({ _id: _id })
        res.send(singleReview)

    } catch (error) {
        console.log(error)
    }
})






module.exports = router;