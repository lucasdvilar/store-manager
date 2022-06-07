const express = require('express');
const ProductsController = require('./controllers/products');

const app = express();

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', ProductsController.getAll);

app.get('/products/:id', ProductsController.getById);

app.use((err, _req, res, _next) => {
  if (err.code && err.message) {
    return res.status(err.code).json({ message: err.message });
  }
  return res.status().json({ message: 'Something went wrong' });
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;
