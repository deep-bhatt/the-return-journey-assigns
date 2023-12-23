import supertest from 'supertest';
import { app } from '../index';
import { Product } from '../types/product';
import * as http from 'http'

describe('Product API Endpoints', () => {
  let server: http.Server;
  let createdProduct: Product;

  beforeAll((done) => {
    server = app.listen(4000, done);
  });

  afterAll((done) => {
    server.close(done);
  });

  it('POST /api/products should create a new product', async () => {
    const newProduct = { name: 'Test Product', description: 'This is a test', price: 10 };

    const postResponse = await supertest(app)
      .post('/api/products')
      .send(newProduct)
      .set('Accept', 'application/json');

    expect(postResponse.status).toBe(201);
    expect(postResponse.body).toHaveProperty('id');
    expect(postResponse.body.name).toBe(newProduct.name);

    createdProduct = postResponse.body;
  });

  it('GET /api/products should return a list of products', async () => {
    const getResponse = await supertest(app).get('/api/products');
    expect(getResponse.status).toBe(200);
    expect(getResponse.body).toBeInstanceOf(Array);

    const productBody: [Product] = getResponse.body;
    const product = productBody.find(p => p.id === createdProduct.id);
    expect(product).toBeTruthy();
    expect(product).toHaveProperty('name');
    expect(product?.name).toBe(createdProduct.name);
  });

  it('PUT /api/products/1 should update the products', async () => {
    const newProduct = { name: 'Test Update', description: 'This is an update', price: 50 };

    const postResponse = await supertest(app)
      .put('/api/products/1')
      .send(newProduct)
      .set('Accept', 'application/json');

    expect(postResponse.status).toBe(200);
    expect(postResponse.body).toHaveProperty('id');
    expect(postResponse.body.name).toBe(newProduct.name);

    createdProduct = postResponse.body;
  });


  it('DELETE /api/products/1 should delete the product', async () => {
    const postResponse = await supertest(app).delete('/api/products/1')
    expect(postResponse.status).toBe(204);
  });

  it('GET /api/products should return an empty array', async () => {
    const getResponse = await supertest(app).get('/api/products');
    expect(getResponse.status).toBe(200);
    expect(getResponse.body).toBeInstanceOf(Array);
    expect(getResponse.body).toStrictEqual([]);
  });

  it('GET /api/products/1 should return an error message', async () => {
    const getResponse = await supertest(app).get('/api/products/2');
    expect(getResponse.status).toBe(404);
    expect(getResponse.text).toEqual('Product not found');
  });
});
