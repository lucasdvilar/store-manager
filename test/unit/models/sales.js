const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');
const SalesModel = require('../../../models/sales');

describe('SalesModel test', () => {
    describe('getAll test', () => {
        before(() => {
            sinon.stub(connection, 'execute').resolves([[]]);
        });
        after(() => {
            connection.execute.restore();
        });
        it('returns an array', async () => {
            const response = await SalesModel.getAll();
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
            const response = await SalesModel.getById(1);
            expect(response).to.be.an('array');
        });
    });
  
    describe('createSale test', () => {
        before(() => {
            sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);
        });
        after(() => {
            connection.execute.restore();
        });
        it('returns a number', async () => {
            const response = await SalesModel.createSale();
            expect(response).to.be.an('number');
        });
    });
});
