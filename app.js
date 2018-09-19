const express = require('express');
const app = express();

const path = require('path');

const db = require('./db')
const { Product } = db.models

app.use('/dist', express.static(path.join(__dirname, 'dist')))
app.get('/', (req, res, next) => {
  res.sendfile(path.join(__dirname, 'index.html'))
})

app.get('/api/products', (req, res, next) => {
  Product.findAll()
    .then(products => res.send(products))
    .catch(next)
})

app.get('/api/products/:id', (req, res, next) => {
  Product.findById(req.params.id)
    .then(product => res.send(product))
    .catch(next)
})

app.use(require('body-parser').json())
app.post('/api/products', (req, res, next) => {
  Product.create(req.body)
    .then(product => res.send(product))
    .catch(next)
})

app.delete('/api/products/:id', (req, res, next) => {
  Product.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = app;
