const express = require('express')
const ctrl = require("../../controllers/users")
const {ctrlWrapper} = require("../../helpers")
const {validateBody, auth, upload} = require("../../middlewares")
const { userJoiSchemas } = require("../../models")

const router = express.Router()

// signup
router.post('/signup', validateBody(userJoiSchemas.singupSchema), ctrlWrapper(ctrl.signup))

router.patch('/verify/:verificationToken', auth, ctrlWrapper(ctrl.verifyEmail))

router.post('/verify',validateBody(userJoiSchemas.emailSchema), ctrlWrapper(ctrl.resendVerifyEmail))

// login
router.post('/login', validateBody(userJoiSchemas.loginSchema), ctrlWrapper(ctrl.login))

router.get('/current', auth, ctrlWrapper(ctrl.getCurrent))

router.patch('/', auth, validateBody(userJoiSchemas.subscriptionSchema), ctrlWrapper(ctrl.updateSubscription))

router.patch('/avatars', auth, upload.single("avatar"), ctrlWrapper(ctrl.updateAvatar))

// logout
router.post('/logout', auth, ctrlWrapper(ctrl.logout))

module.exports = router