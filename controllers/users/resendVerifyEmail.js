const { User } = require("../../models")
const { HttpError, sendEmail } = require("../../helpers")

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body
  const user = await User.findOne({ email })
  if (!user) {
    throw HttpError(404)
  }
    
  if (user.verify) {
    throw HttpError(400, 'Verification has already been passed')
  }
    
    const verifyMail = {
      to: email,
      subject: "confirm your mail",
      html: `<a target="_blank"_ href="http://localhost:3000/api/users/verify/${user.verificationToken}">Confirm your mail</a>`
    }
  await sendEmail(verifyMail)

  res.json({
    message: 'Verification email sent',
  })
}

module.exports = resendVerifyEmail