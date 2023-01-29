const bcrypt = require("bcryptjs")
const { User } = require("../../models")
const verifyMail = require("../../services/email/email")
const gravatar = require("gravatar")
const { sendEmail } = require("../../services/email/sendEmail")
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

  console.log("verifyMail",verifyMail(email, verificationToken))
  await sendEmail(verifyMail(email, verificationToken))

  res.status(201).json({
    email: newUser.email,
    subscription: newUser.subscription,
    avatar: newUser.avatarURL,
    verificationToken: newUser.verificationToken
  })  
}
  
module.exports = signup