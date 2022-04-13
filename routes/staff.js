const express = require('express');
const router = express.Router()


const STAFFDETAILS = require('../models/staffData');





//Staff Details Insert
router.post('/addStaff', async (req, res, next) => {

    try {


        var indx;

        STAFFDETAILS.findOne().sort('-index').exec(async function (err, staff) {
            if (staff == null) {
                indx = 1;
            } else {
                indx = staff.index;
                indx = indx + 1;
            }

            var item = {
                name: req.body.name,
                designation: req.body.designation,
                employee_code: req.body.employee_code,
                grade: req.body.grade,
                division: req.body.division,
                zone: req.body.staff.zone,
                photo: req.body.photo,
                details: req.body.details,
                mail: req.body.mail,
                linkedIn: req.body.linkedIn,
                facebook: req.body.facebook,
                instagram: req.body.instagram,
                others: req.body.others,
                status: req.body.status,
                index: indx

            }


            const staffData = new STAFFDETAILS(item)
            const savedIdData = await staffData.save()

            res.send({ savedIdData })
        })

    } catch (error) {

        console.log(error)
    }
})

//Staff List Fetch
router.get('/getStaffs', async (req, res, next) => {

    try {
        const staffList = await STAFFDETAILS.find().sort({ name: 1 })
        res.send(staffList)

    } catch (error) {
        console.log(error)
    }
})


//Course Details Insert
router.post('/updateStaff', async (req, res, next) => {

    try {

        console.log(req.body.staff)

        var item = {
            name: req.body.staff.name,
            designation: req.body.staff.designation,
            employee_code: req.body.staff.employee_code,
            grade: req.body.staff.grade,
            division: req.body.staff.division,
            zone: req.body.staff.zone,
            photo: req.body.staff.photo,
            details: req.body.staff.details,
            mail: req.body.staff.mail,
            linkedIn: req.body.staff.linkedIn,
            facebook: req.body.staff.facebook,
            instagram: req.body.staff.instagram,
            others: req.body.staff.others,
            status: req.body.staff.status,

        }
        let id = req.body.id
        let updateData = { $set: item };


        // const courseData = new STAFFDETAILS(item)   //!Doesnt Work with update function 
        const savedIdData = await STAFFDETAILS.findByIdAndUpdate({ "_id": id }, updateData)
        res.send({ savedIdData })

    } catch (error) {

        console.log(error)
    }
})


//Delete Course
router.post('/deleteStaff', async (req, res, next) => {

    try {
        let id = req.body.id

        const deleteStaff = await STAFFDETAILS.findByIdAndDelete({ '_id': id })
        res.send(deleteStaff)

    } catch (error) {
        console.log(error)
    }
})

//get Course by Id
router.post('/getStaffById', async (req, res, next) => {

    try {

        console.log(req.body.id)
        let _id = req.body.id
        const singleStaff = await STAFFDETAILS.findById({ _id: _id })
        res.send(singleStaff)

    } catch (error) {
        console.log(error)
    }
})


//update Index


router.put('/updateIndex', async (req, res, next) => {

    console.log('entered')

    id = req.body._id;
    title = req.body.name;
    index = req.body.index;
    console.log(`update of ${title} with value ${index}`);
 
    const savedIdData = await STAFFDETAILS.findByIdAndUpdate({ "_id": id }, { $set: { "index": index } })
    


    res.send({ savedIdData })
    
});






module.exports = router;