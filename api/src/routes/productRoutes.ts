import { Router } from 'express';
import { Product } from '../types/product';

const router = Router();

let products: Product[] = [];
let nextId = 1;

router.get('/', (req, res) => {
  res.json(products);
});

router.get('/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Product not found');
  }
});

router.post('/', (req, res) => {
  const product: Product = {
    id: nextId++,
    ...req.body
  };
  products.push(product);
  res.status(201).json(product);
});

router.put('/:id', (req, res) => {
  const index = products.findIndex(p => p.id === parseInt(req.params.id));
  if (index >= 0) {
    products[index] = { ...products[index], ...req.body };
    res.json(products[index]);
  } else {
    res.status(404).send('Product not found');
  }
});

router.delete('/:id', (req, res) => {
  const index = products.findIndex(p => p.id === parseInt(req.params.id));
  if (index >= 0) {
    products = products.filter(p => p.id !== parseInt(req.params.id));
    res.status(204).send();
  } else {
    res.status(404).send('Product not found');
  }
});

export default router;
