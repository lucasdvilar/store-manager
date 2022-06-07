const express = require('express');
const rescue = require('express-rescue');
const ProductsController = require('./controllers/products');
const SalesController = require('./controllers/sales');

const app = express();
app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', rescue(ProductsController.getAll));

app.get('/products/:id', rescue(ProductsController.getById));

app.get('/sales', rescue(SalesController.getAll));

app.get('/sales/:id', rescue(SalesController.getById));

app.use((err, _req, res, _next) => {
  if (err.code && err.message) {
    return res.status(err.code).json({ message: err.message });
  }
  return res.status(500).json({ message: err.message });
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;
