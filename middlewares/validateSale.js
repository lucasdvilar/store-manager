const Joi = require('joi');
const joiErrors = require('../helpers/joiErrors');

const validateSale = (req, _res, next) => {
    const newSale = req.body;
    const { error } = Joi.array().items({
        productId: Joi.number().required(),
        quantity: Joi.number().min(1).required(),
    }).validate(newSale);
    if (error) {
        const remove = error.details[0].message.slice(1, 5);
        const message = error.details[0].message.replace(remove, '');
        return next({
            code: joiErrors[error.details[0].type],
            message,
        });
    }
    next();
};

module.exports = validateSale;
