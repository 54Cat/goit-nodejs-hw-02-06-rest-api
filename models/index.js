const { Contact } = require("./contact")
const { contactJoiSchemas } = require("./contact")
const { User } = require("./user")
const { userJoiSchemas } = require("./user")

module.exports = {
  Contact,
  User,
  contactJoiSchemas,
  userJoiSchemas
}