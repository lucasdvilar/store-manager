const ProductsModel = require('../models/products');

const getAll = () => ProductsModel.getAll();

const getById = async (id) => {
    const product = await ProductsModel.getById(id);
    if (product.length === 0) return { error: { code: 404, message: 'Product not found' } };
    return product;
};

module.exports = { getAll, getById };
