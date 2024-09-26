const { Schema, model } = require('mongoose');
const Joi = require('joi')
const subscriptions = ["starter", "pro", "business"]

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
    enum: subscriptions,
    default: "starter"
  },
  token: {
    type: String,
    default: null,
  },
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

const userJoiSchemas = {
  singupSchema,
  loginSchema,
  subscriptionSchema
}

const User = model("user", userSchema)

module.exports = {
  User,
  userJoiSchemas
}