const { expect } = require('chai');
const sinon = require('sinon');
const ProductsModel = require('../../../models/products');
const ProductsService = require('../../../services/products');

describe('ProductsService test', () => {
    describe('getAll test', () => {
        before(() => {
            sinon.stub(ProductsModel, 'getAll').resolves([]);
        });
        after(() => {
            ProductsModel.getAll.restore();
        });
        it('returns an array', async () => {
            const response = await ProductsService.getAll();
            expect(response).to.be.an('array');
        });
    });

    describe('getById test', () => {
        before(() => {
            sinon.stub(ProductsModel, 'getById').resolves([{}]);
        });
        after(() => {
            ProductsModel.getById.restore();
        });
        it('returns an object', async () => {
            const response = await ProductsService.getById(1);
            expect(response).to.be.an('object');
        });
    });
  
    describe('createProduct test', () => {
        before(() => {
            sinon.stub(ProductsModel, 'getByName').resolves([{}]);
        });
        after(() => {
            ProductsModel.getByName.restore();
        });
        it('returns an object', async () => {
            const response = await ProductsService.createProduct('test', 1);
            expect(response).to.be.an('object');
        });
    });
  
    describe('updateProduct test', () => {
        before(() => {
            sinon.stub(ProductsModel, 'getById').resolves([{}]);
        });
        after(() => {
            ProductsModel.getById.restore();
        });
        it('returns an object', async () => {
            const response = await ProductsService.updateProduct(1, 'test', 1);
            expect(response).to.be.an('object');
        });
    });
});
