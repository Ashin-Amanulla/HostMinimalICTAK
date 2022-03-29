const express = require('express');
const router = express.Router()


const courseDetails = require('../models/courseData');




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


//Id Details Insert
router.post('/addCourse', async (req, res, next) => {

    try {

        var item = {
            title: req.body.title,
            code: req.body.code,
            category: req.body.category,
            image: req.body.image,
            details: req.body.details,
            duration_months: req.body.duration_months,
            duration_hours: req.body.duration_hours,
            modules: req.body.modules,
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
            thumbnail: req.body.thumbnail
        }


        const courseData = new courseDetails(item)
        const savedIdData = await courseData.save()

        res.send({ savedIdData })


    } catch (error) {

        console.log(error)
    }
}
)






module.exports = router;