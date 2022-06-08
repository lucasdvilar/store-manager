const Joi = require('joi');
const joiErrors = require('../helpers/joiErrors');

const validateProduct = (req, _res, next) => {
    const { name, quantity } = req.body;
    const { error } = Joi.object({
        name: Joi.string().min(5).required(),
        quantity: Joi.number().min(1).required(),
    }).validate({ name, quantity });
    if (error) {
        return next({
            code: joiErrors[error.details[0].type],
            message: error.details[0].message,
        });
    }
    next();
};

module.exports = validateProduct;
