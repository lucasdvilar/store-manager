const SalesModel = require('../models/sales');
const ProductsModel = require('../models/products');

const getAll = () => SalesModel.getAll();

const getById = async (id) => {
    const sale = await SalesModel.getById(id);
    if (sale.length === 0) return { error: { code: 404, message: 'Sale not found' } };
    return sale;
};

const createSale = async (newSale) => {
    const product = await ProductsModel.getById(newSale[0].productId);
    if (product[0].quantity < newSale[0].quantity) {
        return { error: { code: 422, message: 'Such amount is not permitted to sell' } };
    }
    const id = await SalesModel.createSale();
    await Promise.all(newSale
        .map(({ productId, quantity }) => SalesModel.createSalesProducts(id, productId, quantity)));
    await Promise.all(newSale
        .map(({ productId, quantity }) => ProductsModel.updateQuantity(productId, quantity, '-')));
    return { id, itemsSold: newSale };
};

const updateSale = async (id, itemUpdated) => {
    await SalesModel.updateSale(id, itemUpdated[0]);
    return { saleId: parseInt(id, 10), itemUpdated };
};

const deleteSale = async (id) => {
    const sales = await SalesModel.getById(id);
    if (sales.length === 0) return { error: { code: 404, message: 'Sale not found' } };
    await SalesModel.deleteSale(id);
    await Promise.all(sales
        .map(({ productId, quantity }) => ProductsModel.updateQuantity(productId, quantity, '+')));
};

module.exports = {
    getAll,
    getById,
    createSale,
    updateSale,
    deleteSale,
};
