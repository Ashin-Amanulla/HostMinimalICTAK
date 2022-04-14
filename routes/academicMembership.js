const express = require('express');
const router = express.Router()


const AMDETAILS = require('../models/academicData');


router.get('/getAM', async (req, res, next) => {

    try {
        const AMList = await AMDETAILS.find().sort({ mem_id: 1 })
        res.send(AMList)

    } catch (error) {
        console.log(error)
    }
})


router.post('/addAM', async (req, res, next) => {

    try {

        console.log("entered", req.body)

        var item = {
            slno: req.body.slno,
            mem_id: req.body.mem_id,
            name: req.body.name,
            website: req.body.website,
        }


        const AMList = new AMDETAILS(item)
        const savedIdData = await AMList.save()

        res.send({ savedIdData })
    }

    catch (error) {

        console.log(error)
    }


})


module.exports = router;