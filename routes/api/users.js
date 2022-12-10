const express = require('express')
const ctrl = require("../../controllers/users")
const {ctrlWrapper} = require("../../helpers")
const {validateBody} = require("../../middlewares")
const { User: schemas } = require("../../models")

const router = express.Router()

router.post('/signup', validateBody(schemas.singupSchema), ctrlWrapper(ctrl.signup))

module.exports = router