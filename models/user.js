const { Schema, model } = require('mongoose');
const Joi = require('joi')
const subscriptions = ["starter", "pro", "business"]

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  subscription: {
    type: String,
    enum: subscriptions,
    default: "starter"
  },
  token: {
    type: String,
    default: null,
  },
  avatarURL: {
    type: String,
    required: true,
  },
  verify: {
    type: Boolean,
    default: false,
  },
  verificationToken: {
    type: String,
    required: [true, 'Verify token is required'],
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

const subscriptionSchema = Joi.object({ 
  subscription: Joi.string().valid(...subscriptions).required()
})

const emailSchema = Joi.object({ 
  email: Joi.string().email().required(),
})

const userJoiSchemas = {
  singupSchema,
  loginSchema,
  subscriptionSchema,
  emailSchema
}

const User = model("user", userSchema)

module.exports = {
  User,
  userJoiSchemas
}