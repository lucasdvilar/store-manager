const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');
const ProductsModel = require('../../../models/products');

describe('ProductsModel test', () => {
    describe('getAll test', () => {
        before(() => {
            sinon.stub(connection, 'execute').resolves([[]]);
        });
        after(() => {
            connection.execute.restore();
        });
        it('returns an array', async () => {
            const response = await ProductsModel.getAll();
            expect(response).to.be.an('array');
        });
    });

    describe('getById test', () => {
        before(() => {
            sinon.stub(connection, 'execute').resolves([[]]);
        });
        after(() => {
            connection.execute.restore();
        });
        it('returns an array', async () => {
            const response = await ProductsModel.getById(1);
            expect(response).to.be.an('array');
        });
    });
  
    describe('getByName test', () => {
        before(() => {
            sinon.stub(connection, 'execute').resolves([[]]);
        });
        after(() => {
            connection.execute.restore();
        });
        it('returns an array', async () => {
            const response = await ProductsModel.getByName('test');
            expect(response).to.be.an('array');
        });
    });
  
    describe('createProduct test', () => {
        before(() => {
            sinon.stub(connection, 'execute').resolves([[]]);
        });
        after(() => {
            connection.execute.restore();
        });
        it('returns an object', async () => {
            const response = await ProductsModel.createProduct('test', 1);
            expect(response).to.be.an('object');
        });
    });
  
    describe('updateProduct test', () => {
        before(() => {
            sinon.stub(connection, 'execute').resolves([[]]);
        });
        after(() => {
            connection.execute.restore();
        });
        it('returns an object', async () => {
            const response = await ProductsModel.updateProduct(1, 'test', 1);
            expect(response).to.be.an('object');
        });
    });
    
    describe('deleteProduct test', () => {
        before(() => {
            sinon.stub(connection, 'execute').resolves([[]]);
        });
        after(() => {
            connection.execute.restore();
        });
        it('returns an object', async () => {
            const response = await ProductsModel.updateProduct(1, 'test', 1);
            expect(response).to.be.an('object');
        });
    });
});
