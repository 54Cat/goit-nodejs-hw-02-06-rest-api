const { Schema, model } = require('mongoose');
const Joi = require('joi')

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  subscription: {
    type: String,
    enum: ["starter", "pro", "business"],
    default: "starter"
  },
  token: {
    type: String,
    default: null,
  },
  avatarURL: {
    type: String,
    required: true,
  }
},
  {
    versionKey: false,
    timestamps: true
  }
)

const singupSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  subscription: Joi.string(),
  token: Joi.boolean()
})

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  token: Joi.boolean()
})

const userJoiSchemas = {
  singupSchema,
  loginSchema
}

const User = model("user", userSchema)

module.exports = {
  User,
  userJoiSchemas
}