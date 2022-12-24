const bcrypt = require("bcryptjs")
const { User } = require("../../models")
const gravatar = require("gravatar")

const signup = async (req, res, next) => {
  const { email, password } = req.body
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
  const avatarURL = gravatar.url(email)
  const newUser = await User.create({
    email,
    password: hashPassword,
    avatarURL
  })

  res.status(201).json({
    email: newUser.email,
    subscription: newUser.subscription,
    avatar: newUser.avatarURL
  })  
}
  
module.exports = signup