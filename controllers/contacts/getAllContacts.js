const { Contact } = require("../../models")

const getAll = async (req, res, next) => {
  const { _id } = req.user
  const { page = 1, limit = 10, favorite} = req.query
  const skip = (page - 1) * limit
  const result = await Contact.find({owner:_id, favorite}, "-createdAt -updatedAt -owner", {skip, limit:Number(limit)})
  res.json(result)
}

module.exports = getAll