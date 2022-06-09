const SalesService = require('../services/sales');

const getAll = async (_req, res) => {
    const sales = await SalesService.getAll();
    res.status(200).json(sales);
};

const getById = async (req, res, next) => {
    const { id } = req.params;
    const sale = await SalesService.getById(id);
    if (sale.error) return next(sale.error);
    res.status(200).json(sale);
};

const createSale = async (req, res) => {
    const newSale = req.body;
    const sale = await SalesService.createSale(newSale);
    res.status(201).json(sale);
};

module.exports = {
    getAll,
    getById,
    createSale,
};
