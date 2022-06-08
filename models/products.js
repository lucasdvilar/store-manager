const connection = require('./connection');

const getAll = async () => {
    const query = 'SELECT * FROM StoreManager.products ORDER BY id;';
    const [products] = await connection.execute(query);
    return products;
};

const getById = async (id) => {
    const query = 'SELECT * FROM StoreManager.products WHERE id = ?;';
    const [product] = await connection.execute(query, [id]);
    return product;
};

const getByName = async (name) => {
    const query = 'SELECT * FROM StoreManager.products WHERE name = ?;';
    const [product] = await connection.execute(query, [name]);
    return product;
};

const createProduct = async (name, quantity) => {
    const query = 'INSERT INTO StoreManager.products (name, quantity) VALUES (?, ?)';
    const [product] = await connection.execute(query, [name, quantity]);
    return { id: product.insertId, name, quantity };
};

module.exports = {
    getAll,
    getById,
    getByName,
    createProduct, 
};
