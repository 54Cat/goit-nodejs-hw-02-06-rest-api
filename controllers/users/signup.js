const bcrypt = require("bcryptjs")
const { User } = require("../../models")
const gravatar = require("gravatar")
const { sendEmail } = require("../../helpers")
const { nanoid } = require("nanoid")

const signup = async (req, res, next) => {
  const { email, password } = req.body
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
  const avatarURL = gravatar.url(email)
  const verificationToken = nanoid()
  const newUser = await User.create({
    email,
    password: hashPassword,
    avatarURL,
    verificationToken
  })

  const mail = {
    to: email,
    subject: "confirm your mail",
    html: `<a target="_blank"_ href="http://localhost:3000/api/users/verify/${verificationToken}">Confirm your mail</a>`
  }
  await sendEmail(mail)

  res.status(201).json({
    email: newUser.email,
    subscription: newUser.subscription,
    avatar: newUser.avatarURL,
    verificationToken: newUser.verificationToken
  })  
}
  
module.exports = signup