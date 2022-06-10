const { expect } = require('chai');
const sinon = require('sinon');
const SalesController = require('../../../controllers/sales');
const SalesService = require('../../../services/sales');

describe('SalesController test', () => {
    describe('getAll test', () => {
        const req = {};
        const res = {};
        before(() => {
            sinon.stub(SalesService, 'getAll').resolves([]);
            res.status = sinon.stub().returns(res);
            res.json = sinon.stub().returns();
        });
        after(() => {
            SalesService.getAll.restore();
        });
        it('is is called with code 200', async () => {
            await SalesController.getAll(req, res);
            expect(res.status.calledWith(200)).to.be.true;
        });
        it('returns an array', async () => {
            await SalesController.getAll(req, res);
            expect(res.json.calledWith([])).to.be.true;
        });
    });

    describe('getById test', () => {
        const req = {};
        const res = {};
        let next; // mentoria
        before(() => {
            sinon.stub(SalesService, 'getById').resolves({});
            res.status = sinon.stub().returns(res);
            res.json = sinon.stub().returns();
            next = sinon.stub().returns();
            req.params = { id: 1 }; // stub?
        });
        after(() => {
            SalesService.getById.restore();
        });
        it('is is called with code 200', async () => {
            await SalesController.getById(req, res, next);
            expect(res.status.calledWith(200)).to.be.true;
        });
        it('returns an object', async () => {
            await SalesController.getById(req, res, next);
            expect(res.json.calledWith({})).to.be.true;
        });
    });
  
    describe('createSale test', () => {
        const req = {};
        const res = {};
        let next;
        before(() => {
            sinon.stub(SalesService, 'createSale').resolves({});
            res.status = sinon.stub().returns(res);
            res.json = sinon.stub().returns();
            next = sinon.stub().returns();
            req.body = [];
        });
        after(() => {
            SalesService.createSale.restore();
        });
        it('is is called with code 201', async () => {
            await SalesController.createSale(req, res, next);
            expect(res.status.calledWith(201)).to.be.true;
        });
        it('returns an object', async () => {
            await SalesController.createSale(req, res, next);
            expect(res.json.calledWith({})).to.be.true;
        });
    });
});
