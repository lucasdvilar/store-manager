const SalesModel = require('../models/sales');

const getAll = () => SalesModel.getAll();

const getById = async (id) => {
    const sale = await SalesModel.getById(id);
    if (sale.length === 0) return { error: { code: 404, message: 'Sale not found' } };
    return sale;
};

const createSale = async (newSale) => {
    const id = await SalesModel.createSale();
    await Promise.all(newSale
        .map(({ productId, quantity }) => SalesModel.createSalesProducts(id, productId, quantity)));
    return { id, itemsSold: newSale };
};

module.exports = {
    getAll,
    getById,
    createSale,
};
