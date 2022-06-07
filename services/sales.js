const SalesModel = require('../models/sales');

const getAll = () => SalesModel.getAll();

const getById = async (id) => {
    const sale = await SalesModel.getById(id);
    if (sale.length === 0) return { error: { code: 404, message: 'Sale not found' } };
    return sale;
};

module.exports = { getAll, getById };
