const { expect } = require('chai');
const sinon = require('sinon');
const SalesModel = require('../../../models/sales');
const ProductsModel = require('../../../models/products');
const SalesService = require('../../../services/sales');

describe('SalesService test', () => {
    describe('getAll test', () => {
        before(() => {
            sinon.stub(SalesModel, 'getAll').resolves([]);
        });
        after(() => {
            SalesModel.getAll.restore();
        });
        it('returns an array', async () => {
            const response = await SalesService.getAll();
            expect(response).to.be.an('array');
        });
    });

    describe('getById test', () => {
        before(() => {
            sinon.stub(SalesModel, 'getById').resolves([{}]);
        });
        after(() => {
            SalesModel.getById.restore();
        });
        it('returns an array', async () => {
            const response = await SalesService.getById(1);
            expect(response).to.be.an('array');
        });
    });
  
    describe('createSale test', () => {
        before(() => {
            sinon.stub(ProductsModel, 'getById').resolves([{}]);
            sinon.stub(SalesModel, 'createSale').resolves(1);
            sinon.stub(SalesModel, 'createSalesProducts').resolves([[]]);
            sinon.stub(ProductsModel, 'updateQuantity').resolves([[]]);
        });
        after(() => {
            ProductsModel.getById.restore();
            SalesModel.createSale.restore();
            SalesModel.createSalesProducts.restore();
            ProductsModel.updateQuantity.restore();
        });
        it('returns an object', async () => {
            const response = await SalesService.createSale([{ quantity: 1 }]);
            expect(response).to.be.an('object');
        });
    });
});
