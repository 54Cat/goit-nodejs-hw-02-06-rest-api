const { Contact } = require("../../models/contacts")
const { HttpError } = require("../../helpers")

const remove = async (req, res, next) => {
  const { id } = req.params
  const result = await Contact.findByIdAndRemove(id)
  if (!result) {
    throw HttpError(404, "Not found")
  }
  res.json({
    message: 'contact deleted'
  })
}
  
module.exports = remove