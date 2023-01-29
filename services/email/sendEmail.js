const sgMail = require("@sendgrid/mail")
require("dotenv").config()
const { SENDGRID_KEY } = process.env
const { HttpError } = require("../../helpers")

sgMail.setApiKey(SENDGRID_KEY)

const sendEmail = async (data) => {
    try {
        const email = { ...data, from: "katerynahrabanova@gmail.com" }
        await sgMail.send(email)
        return true
    }
    catch (error) {
        throw HttpError(404, error.message)
    }
}

module.exports = {
    sendEmail
}