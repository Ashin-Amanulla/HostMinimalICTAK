const express = require('express');
const router = express.Router()
const BLOGDETAILS = require('../models/BlogData');




//blog Details Insert
router.post('/addBlog', async (req, res, next) => {

    try {

        var indx;
        BLOGDETAILS.findOne().sort('-index').exec(async function (err, blog) {
            if (blog == null) {
                indx = 1;
            } else {
                indx = blog.index;
                indx = indx + 1;
            }

            var item = {
                title: req.body.title,
                author: "admin",
                date: req.body.date,
                image: req.body.image,
                content: req.body.content,
                tags: req.body.tags,
                creation_date: new Date(),
                index: indx
            }


            const blogData = new BLOGDETAILS(item)
            const savedIdData = await blogData.save()

            res.send({ savedIdData })
        })

    } catch (error) {

        console.log(error)
    }
})

//Blog List Fetch
router.get('/getBlogs', async (req, res, next) => {

    try {
        const blogList = await BLOGDETAILS.find().sort({ index: 1 })
        res.send(blogList)

    } catch (error) {
        console.log(error)
    }
})


//Blog Details Upate
router.post('/updateBlog', async (req, res, next) => {

    try {

        var item = {
            title: req.body.blog.title,
            author: req.body.blog.author,
            date: req.body.blog.date,
            image: req.body.blog.image,
            content: req.body.blog.content,
            tags: req.body.blog.tags,
            creation_date: new Date()
        }

        let id = req.body.id
        let updateData = { $set: item };

        console.log(item , "id",id)

        // const courseData = new COURSEDETAILS(item)   //!Doesnt Work with update function 
        const savedIdData = await BLOGDETAILS.findByIdAndUpdate({ "_id": id }, updateData)
        res.send({ savedIdData })

    } catch (error) {

        console.log(error)
    }
})


//Delete Blog
router.post('/deleteBlog', async (req, res, next) => {

    try {
        let id = req.body.id
        console.log('delete id' , id)

        const deleteBlog = await BLOGDETAILS.findByIdAndDelete({ '_id': id })
        res.send(deleteBlog)

    } catch (error) {
        console.log(error)
    }
})

//get Course by Id
router.post('/getBlogById', async (req, res, next) => {

    try {

        console.log(req.body.id)
        let _id = req.body.id
        const singleBlog = await BLOGDETAILS.findById({ _id: _id })
        res.send(singleBlog)

    } catch (error) {
        console.log(error)
    }
})



router.put('/updateIndex', async (req, res, next) => {

    id = req.body._id;
    title = req.body.title;
    index = req.body.index;
    console.log(`update of ${title} with value ${index}`);

    const savedIdData = await BLOGDETAILS.findByIdAndUpdate({ "_id": id }, { $set: { "index": index } })

    res.send({ savedIdData })

});



//blogComment Insert
// router.post('/addComment', async (req, res, next) => {
//     console.log(req.body)

//     try {

//         var item = {
//             comment: req.body.comment,
//             creation_date: new Date()

//         }


//         const blogComment = new BLOGDETAILS(item)
//         const savedIdData = await blogComment.save()

//         res.send({ savedIdData })


//     } catch (error) {

//         console.log(error)
//     }
// })


module.exports = router;