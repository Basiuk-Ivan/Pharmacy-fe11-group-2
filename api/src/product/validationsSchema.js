import Joi from 'joi';

export const productValidateSchema = Joi.object({
  name: Joi.string().required().min(3),
  price: Joi.number().required(),
  discount: Joi.number().required(),
  productOfTheDay: Joi.boolean().required(),
  useful: Joi.boolean().required(),
  categories: Joi.array().required(),
  img: Joi.array().required(),
  instruction: Joi.object().required(),
  article: Joi.number().required(),
  quantity: Joi.number().required(),
  brand: Joi.string().required(),
  manufacturer: Joi.string().required(),
  country: Joi.string().required(),
  productForm: Joi.string().required(),
  activeSubstance: Joi.array().required(),
  bestBeforeDate: Joi.string().required(),
  prescriptionLeave: Joi.boolean().required(),
  whoCanChildren: Joi.boolean().required(),
  whoCanPregnant: Joi.boolean().required(),
  ratingClick: Joi.number().required(),
  ratingTotal: Joi.number().required(),
  promotionOfTheMonth: Joi.boolean().required(),
  descriptionForSlider: Joi.string(),
  analogs: Joi.string(),
});
