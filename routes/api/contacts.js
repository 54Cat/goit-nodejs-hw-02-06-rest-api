const express = require('express')

const router = express.Router()

router.get('/', async (req, res, next) => {
  res.json({ message: 'get contacts' })
})

router.get('/:contactId', async (req, res, next) => {
  res.json({ message: 'get contact by id' })
})

router.post('/', async (req, res, next) => {
  res.json({ message: 'post new contact' })
})

router.delete('/:contactId', async (req, res, next) => {
  res.json({ message: 'delete contact' })
})

router.put('/:contactId', async (req, res, next) => {
  res.json({ message: 'update contact' })
})

module.exports = router
