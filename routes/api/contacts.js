const express = require('express')
const { listContacts, getContactById, removeContact, addContact, updateByContactId } = require('../../models/contacts')
const { HttpError } = require("../../helpers")
const { addSchema } = require("../../schemas/contacts")

const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    const result = await listContacts()
    res.json(result)
  }
  catch (error) {
    next(error)
  } 
})

router.get('/:contactId', async (req, res, next) => {
  try {
    const id = req.params.contactId
    const result = await getContactById(id)
    if (!result) {
      throw HttpError(400, error.message)
    }
    res.json(result)
  }
  catch (error) {
    next(error)
  }  
})

router.post('/', async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body)
    if (error) {
      throw HttpError(400, error.message)
    }
    const result = await addContact(req.body)
    res.status(201).json(result)    
  }
  catch (error) {
    next(error)
  }
})

router.put('/:contactId', async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body)
    if (error) {
      throw HttpError(400, error.message)
    }
    const id = req.params.contactId
    const result = await updateByContactId(id, req.body)
    if (!result) {
      throw HttpError(404, "Not found")
    }
    res.json(result)
  }
  catch (error) {
    next(error)
  }
})

router.delete('/:contactId', async (req, res, next) => {
  try {
    const id = req.params.contactId
    const result = await removeContact(id)
    if (!result) {
      throw HttpError(404, "Not found")
    }
    res.json({
      message: 'contact deleted'
    })
  }
  catch (error) {
    next(error)
  }
})

module.exports = router
