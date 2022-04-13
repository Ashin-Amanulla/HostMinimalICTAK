const express = require('express');
const router = express.Router()


const REVIEWDETAILS = require('../models/reviewData');







//Review Details Insert
router.post('/addReview', async (req, res, next) => {

    try {

        var item = {
            name: req.body.name,
            course: req.body.course,
            photo: req.body.photo,
            testimonial:req.body.testimonial,
            designation: req.body.designation,
            company: req.body.company,
            reviewer_code:req.body.reviewer_code,
            place:req.body.place,
            rating:req.body.rating
         
        }


        const Data = new REVIEWDETAILS(item)
        const savedIdData = await Data.save()

        res.send({ savedIdData })


    } catch (error) {

        console.log(error)
    }
})

//Review List Fetch
router.get('/getReviews', async (req, res, next) => {

    try {
        const List = await REVIEWDETAILS.find()
        res.send(List)

    } catch (error) {
        console.log(error)
    }
})


//Revie Details Insert
router.post('/updateReview', async (req, res, next) => {

    try {

        var item = {
            name: req.body.review.name,
            course: req.body.review.course,
            photo: req.body.review.photo,
            testimonial:req.body.review.testimonial,
            designation: req.body.review.designation,
            company: req.body.review.company,
            reviewer_code:req.body.review.reviewer_code,
            place:req.body.review.place,
            rating:req.body.review.rating
         
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


//Delete Review
router.post('/deleteReview', async (req, res, next) => {

    try {
        let id = req.body.id

        const deleteReview = await REVIEWDETAILS.findByIdAndDelete({ '_id': id })
        res.send(deleteReview)

    } catch (error) {
        console.log(error)
    }
})

//get Review by Id
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

//get Review by Title
router.post('/getReviewByCourse', async (req, res, next) => {

    try {

        console.log(req.body.course,'back')
        let course = req.body.course
        const singleReview = await REVIEWDETAILS.find({ course: course })
        res.send(singleReview)

    } catch (error) {
        console.log(error)
    }
})




module.exports = router;