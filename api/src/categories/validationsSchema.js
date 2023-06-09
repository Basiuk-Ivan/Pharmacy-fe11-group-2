import Joi from 'joi';

export const categoriesValidateSchema = Joi.object({
    idName: Joi.string().required().min(3),
    name: Joi.string().required().min(3),
    parentId: Joi.string().min(3),
    description: Joi.string().min(3),
    level: Joi.string().min(1),
});
