const Joi = require('joi');

const addPetSchema = Joi.object({
  name: Joi.string().min(2).max(16).required(),
  birthday: Joi.string().required(),
  breed: Joi.string().min(2).max(16).required(),
  comments: Joi.string().min(8).max(120).allow(null, ''),
});

module.exports = {
  addPetSchema,
};