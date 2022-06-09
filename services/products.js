const ProductsModel = require('../models/products');

const getAll = () => ProductsModel.getAll();

const getById = async (id) => {
    const product = await ProductsModel.getById(id);
    if (product.length === 0) return { error: { code: 404, message: 'Product not found' } };
    return product[0];
};

const createProduct = async (name, quantity) => {
    const product = await ProductsModel.getByName(name);
    if (product.length > 0) return { error: { code: 409, message: 'Product already exists' } };
    return ProductsModel.createProduct(name, quantity);
};

const updateProduct = async (id, name, quantity) => {
    const product = await ProductsModel.getById(id);
    if (product.length === 0) return { error: { code: 404, message: 'Product not found' } };
    return ProductsModel.updateProduct(id, name, quantity);
};

const deleteProduct = async (id) => {
    const product = await ProductsModel.getById(id);
    if (product.length === 0) return { error: { code: 404, message: 'Product not found' } };
    await ProductsModel.deleteProduct(id);
};

module.exports = {
    getAll,
    getById,
    createProduct,
    updateProduct,
    deleteProduct,
};
