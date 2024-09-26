const bcrypt = require("bcryptjs")
const { User } = require("../../models")

const signup = async (req, res, next) => {
  const { email, password } = req.body
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
  const newUser = await User.create({ email, password: hashPassword })

  res.status(201).json({
    email: newUser.email,
    subscription: newUser.subscription
  })  
}
  
module.exports = signup