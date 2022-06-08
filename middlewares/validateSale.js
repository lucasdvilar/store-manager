const Joi = require('joi');
const joiErrors = require('../helpers/joiErrors');

const validateSale = (req, _res, next) => {
    const { productId, quantity } = req.body;
    const { error } = Joi.object({
        productId: Joi.number().required(),
        quantity: Joi.number().min(1).required(),
    }).validate({ productId, quantity });
    if (error) {
        return next({
            code: joiErrors[error.details[0].type],
            message: error.details[0].message,
        });
    }
    next();
};

module.exports = validateSale;
