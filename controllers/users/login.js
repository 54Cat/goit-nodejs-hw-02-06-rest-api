const { Unauthorized } = require("http-errors")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { User } = require("../../models")

const { SECRET_KEY } = process.env

const login = async (req, res, next) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  const passwordCompare = bcrypt.compare(password, user.password)
  console.log("email",email)
  console.log("user.email",user.email)
  console.log("user",user)

  if (!user || !passwordCompare) {
    throw new Unauthorized (`Email or password is wrong`)
  }

  const payload = {
    id: user._id
  }
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" })
  res.status(201).json({token})
}
  
module.exports = login