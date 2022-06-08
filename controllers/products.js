const ProductsService = require('../services/products');

const getAll = async (_req, res) => {
    const products = await ProductsService.getAll();
    res.status(200).json(products);
};

const getById = async (req, res, next) => {
    const { id } = req.params;
    const product = await ProductsService.getById(id);
    if (product.error) return next(product.error);
    res.status(200).json(product);
};

const createProduct = async (req, res, next) => {
    const { name, quantity } = req.body;
    const product = await ProductsService.createProduct(name, quantity);
    if (product.error) return next(product.error);
    res.status(201).json(product);
};

const updateProduct = async (req, res, next) => {
    const { id } = req.params;
    const { name, quantity } = req.body;
    const product = await ProductsService.updateProduct(id, name, quantity);
    if (product.error) return next(product.error);
    res.status(200).json(product);
};

module.exports = {
    getAll,
    getById,
    createProduct,
    updateProduct,
};
