import Joi from "joi";

export const registerSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),

  email: Joi.email().max(100).required(),

  password: Joi.string().min(6).max(100).required(),
});
