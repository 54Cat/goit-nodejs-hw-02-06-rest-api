const { Contact } = require("../../models")
const { HttpError } = require("../../helpers")

const getById = async (req, res, next) => {
  const { id } = req.params
  const result = await Contact.findById(id, "-createdAt -updatedAt -owner")
  if (!result) {
    throw HttpError(400, "Contact not found")
  }
  res.json(result)  
}

module.exports = getById