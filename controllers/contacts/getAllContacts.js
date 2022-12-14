const { Contact } = require("../../models")

const getAll = async (req, res, next) => {
  const { _id } = req.user
  console.log(_id)
  const { page = 1, limit = 10 } = req.query
  const skip = (page - 1) * limit
  const result = await Contact.find({owner:_id}, "-createdAt -updatedAt", {skip, limit:Number(limit)})
  res.json(result)
}

module.exports = getAll