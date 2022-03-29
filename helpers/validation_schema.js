const Joi = require('joi')


//Joi autherization schema
const authJoi = Joi.object({

    email: Joi.string()
        .email()
        .lowercase()
        .required(),

    username: Joi.string()
        .min(4)
        .required(),

    password: Joi.string()
        .min(2)
        .required(),

    role: Joi.string()
        .required()

})



const authLoginJoi = Joi.object({

    email: Joi.string()
        .email()
        .lowercase()
        .required(),

    password: Joi.string()
        .min(2)
        .required()


})




//Joi validation for id details Schema

const idDetailJoi = Joi.object({

    name: Joi.string()
        .required()
        .messages({
            "string.base": `"Name" should be a type of string`,
            "string.empty": `"Name" must contain value`,
            "any.required": `"Name" is a required field`
        }),


    email: Joi.string()
        // .email()
        .required()
        .messages({
            "string.base": `"Email" should be a type of string`,
            "string.empty": `"Email" must contain value`,
            "any.required": `"Email" is a required field`
        }),


    number: Joi.string()
        .required()
        .messages({
            "string.base": `"Number" should be a type of string`,
            "string.empty": `"Number" must contain value`,
            "any.required": `"Number" is a required field`
        }),


    photo: Joi.string()
        .required()
        .messages({
            "string.base": `"Photo" should be a type of string`,
            "string.empty": `"Photo" must contain value`,
            "any.required": `"Photo" is a required field`
        }),


    course_enrolled: Joi.string()
        .required()
        .messages({
            "string.base": `"Course" should be a type of string`,
            "string.empty": `"Course" must contain value`,
            "any.required": `"Course" is a required field`
        }),

})


module.exports = { authJoi, idDetailJoi ,authLoginJoi}