const express = require('express')
const ctrl = require("../../controllers/users")
const {ctrlWrapper} = require("../../helpers")
const {validateBody, auth} = require("../../middlewares")
const { userJoiSchemas } = require("../../models")

const router = express.Router()

router.post('/signup', validateBody(userJoiSchemas.singupSchema), ctrlWrapper(ctrl.signup))

router.post('/login', validateBody(userJoiSchemas.loginSchema), ctrlWrapper(ctrl.login))

router.post('/logout', auth, ctrlWrapper(ctrl.logout))

router.get('/current', auth, ctrlWrapper(ctrl.getCurrent))

router.patch('/', auth, validateBody(userJoiSchemas.subscriptionSchema), ctrlWrapper(ctrl.updateSubscription))

module.exports = router