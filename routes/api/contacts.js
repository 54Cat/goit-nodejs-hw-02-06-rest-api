const express = require('express')
const ctrl = require("../../controllers/contacts")
const { ctrlWrapper } = require("../../helpers")
const { validateBody, isValidId, auth } = require("../../middlewares")
const { contactJoiSchemas } = require("../../models")

const router = express.Router()

router.get('/', auth, ctrlWrapper(ctrl.getAll))

router.get('/:id', auth, isValidId, ctrlWrapper(ctrl.getById))

router.post('/', auth, validateBody(contactJoiSchemas.addSchema), ctrlWrapper(ctrl.add))

router.put('/:id', auth, isValidId, validateBody(contactJoiSchemas.addSchema), ctrlWrapper(ctrl.updateById))

router.patch('/:id/favorite', auth, isValidId, validateBody(contactJoiSchemas.updateFavoriteSchema), ctrlWrapper(ctrl.updateFavorite))

router.delete('/:id', auth, isValidId, ctrlWrapper(ctrl.remove))

module.exports = router