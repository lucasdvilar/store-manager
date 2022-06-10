const { expect } = require('chai');
const sinon = require('sinon');
const ProductsController = require('../../../controllers/products');
const ProductsService = require('../../../services/products');

describe('ProductsController test', () => {
    describe('getAll test', () => {
        const req = {};
        const res = {};
        before(() => {
            sinon.stub(ProductsService, 'getAll').resolves([]);
            res.status = sinon.stub().returns(res);
            res.json = sinon.stub().returns();
        });
        after(() => {
            ProductsService.getAll.restore();
        });
        it('is is called with code 200', async () => {
            await ProductsController.getAll(req, res);
            expect(res.status.calledWith(200)).to.be.true;
        });
        it('returns an array', async () => {
            await ProductsController.getAll(req, res);
            expect(res.json.calledWith([])).to.be.true;
        });
    });

    describe('getById test', () => {
        const req = {};
        const res = {};
        let next; // mentoria
        before(() => {
            sinon.stub(ProductsService, 'getById').resolves({});
            res.status = sinon.stub().returns(res);
            res.json = sinon.stub().returns();
            next = sinon.stub().returns();
            req.params = { id: 1 }; // stub?
        });
        after(() => {
            ProductsService.getById.restore();
        });
        it('is is called with code 200', async () => {
            await ProductsController.getById(req, res, next);
            expect(res.status.calledWith(200)).to.be.true;
        });
        it('returns an object', async () => {
            await ProductsController.getById(req, res, next);
            expect(res.json.calledWith({})).to.be.true;
        });
    });
  
    describe('createProduct test', () => {
        const req = {};
        const res = {};
        let next;
        before(() => {
            sinon.stub(ProductsService, 'createProduct').resolves({});
            res.status = sinon.stub().returns(res);
            res.json = sinon.stub().returns();
            next = sinon.stub().returns();
            req.body = { name: 'test', quantity: 1 };
        });
        after(() => {
            ProductsService.createProduct.restore();
        });
        it('is is called with code 201', async () => {
            await ProductsController.createProduct(req, res, next);
            expect(res.status.calledWith(201)).to.be.true;
        });
        it('returns an object', async () => {
            await ProductsController.createProduct(req, res, next);
            expect(res.json.calledWith({})).to.be.true;
        });
    });
});
