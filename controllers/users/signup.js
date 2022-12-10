// const { Conflict } = require("http-errors")
const bcrypt = require("bcryptjs")

const { User } = require("../../models")

const signup = async (req, res, next) => {
  const { email, password } = req.body
  // const user = await User.findOne({ email })
  // if (user) {
  //   throw new Conflict (`User with ${email} already exist`)
  // }
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10))

  const result = await User.create({ email, password: hashPassword })
  res.status(201).json(result)
}
  
module.exports = signup