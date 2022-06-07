const ProductsService = require('../services/products');

const getAll = async (_req, res) => {
    const products = await ProductsService.getAll();
    res.status(200).json(products);
};

const getById = async (req, res, next) => {
    const { id } = req.params;
    const product = await ProductsService.getById(id);
    if (product.error) next(product.error);
    res.status(200).json(product);
};

module.exports = { getAll, getById };