const express = require('express')
const ctrl = require("../../controllers/users")
const {ctrlWrapper} = require("../../helpers")
const {validateBody} = require("../../middlewares")
const { userJoiSchemas } = require("../../models")
// const { schemas } = require("../../models/user")
const router = express.Router()

router.post('/signup', validateBody(userJoiSchemas.singupSchema), ctrlWrapper(ctrl.signup))

router.post('/login', validateBody(userJoiSchemas.loginSchema), ctrlWrapper(ctrl.login))

module.exports = router