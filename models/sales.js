const connection = require('./connection');

const getAll = async () => {
    const query = `SELECT s.id AS saleId, s.date, sp.product_id AS productId, sp.quantity
    FROM StoreManager.sales AS s
    INNER JOIN StoreManager.sales_products AS sp
    ON s.id = sp.sale_id;`;
    const [sales] = await connection.execute(query);
    return sales;
};

const getById = async (id) => {
    const query = `SELECT s.date, sp.product_id AS productId, sp.quantity
    FROM StoreManager.sales AS s
    INNER JOIN StoreManager.sales_products AS sp
    ON s.id = sp.sale_id
    WHERE s.id = ?;`;
    const [sale] = await connection.execute(query, [id]);
    return sale;
};

const createSale = async () => {
    const query = 'INSERT INTO StoreManager.sales () VALUES ();';
    const [sale] = await connection.execute(query);
    return sale.insertId;
};

const createSalesProducts = async (id, productId, quantity) => {
    const query = `INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity)
    VALUES (?, ?, ?);`;
    await connection.execute(query, [id, productId, quantity]);
};

module.exports = {
    getAll,
    getById,
    createSale,
    createSalesProducts,
};
