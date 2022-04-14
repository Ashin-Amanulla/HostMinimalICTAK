const express = require('express');
const router = express.Router()


const NEWSDETAILS = require('../models/newsData');
const SUBSDETAILS = require('../models/subscriptionData')




//news Details Insert
router.post('/addNews', async (req, res, next) => {

    try {

        var indx;
        NEWSDETAILS.findOne().sort('-index').exec(async function (err, news) {

            if (news == null) {
                indx = 1;
            } else {
                indx = news.index;
                indx = indx + 1;
            }



            var item = {
                title: req.body.title,
                date: req.body.date,
                content: req.body.content,
                creation_date: new Date(),
                index: indx
            }
            console.log('item', item)

            const newsData = new NEWSDETAILS(item)
            const savedIdData = await newsData.save()

            res.send({ savedIdData })
        })

    } catch (error) {

        console.log(error)
    }
})

//Blog List Fetch
router.get('/getNews', async (req, res, next) => {

    try {
        const newsList = await NEWSDETAILS.find().sort({ index: 1 })
        res.send(newsList)

    } catch (error) {
        console.log(error)
    }
})


//Blog Details Upate
router.post('/updateNews', async (req, res, next) => {

    try {

        var item = {
            title: req.body.news.title,
            date: req.body.news.date,
            content: req.body.news.content,
            creation_date: new Date()
        }

        let id = req.body.id
        let updateData = { $set: item };

        console.log(item, "id", id)

        // const courseData = new COURSEDETAILS(item)   //!Doesnt Work with update function 
        const savedIdData = await NEWSDETAILS.findByIdAndUpdate({ "_id": id }, updateData)
        res.send({ savedIdData })

    } catch (error) {

        console.log(error)
    }
})


//Delete Blog
router.post('/deleteNews', async (req, res, next) => {

    try {
        let id = req.body.id
        console.log('delete id', id)

        const deleteNews = await NEWSDETAILS.findByIdAndDelete({ '_id': id })
        res.send(deleteNews)

    } catch (error) {
        console.log(error)
    }
})

//get Course by Id
router.post('/getNewsById', async (req, res, next) => {

    try {

        console.log(req.body.id)
        let _id = req.body.id
        const singleNews = await NEWSDETAILS.findById({ _id: _id })
        res.send(singleNews)

    } catch (error) {
        console.log(error)
    }
})



router.put('/updateIndex', async (req, res, next) => {

    id = req.body._id;
    title = req.body.title;
    index = req.body.index;
    console.log(`update of ${title} with value ${index}`);


    res.send({ savedIdData })

});


//subscriptions

router.post('/saveSubs', async (req, res, next) => {
    


    try {

        console.log(req.body.subscription)
        let item = {
            email: req.body.subscription.email,
            creation_date: Date.now()

        }

        const subsData = new SUBSDETAILS(item)
        const savedIdData = await subsData.save()

        res.send({ savedIdData })
    } catch (error) {

        console.log(error)

    }




});

//get 
router.get('/getSubscriptions', async (req, res, next) => {

    try {

        const subs = await SUBSDETAILS.find()
        res.send(subs)

    } catch (error) {
        console.log(error)
    }
})




module.exports = router;