# Deep Bhatt - The Return Journey Assignments

- All the JavsScript tasks are in the directory `javascript-assignment`

- The `api` directory contains REST-ful APIs for Creating, Reading, Updating and Deleting the products as per the specifications. The node server runs on port 3000.

## Getting Started

Follow these instructions to get started

### Prerequisites
- Node.js v18 (preferably the latest stable version)
- npm

### Clone & install dependencies
```sh
git clone https://github.com/deep-bhatt/the-return-journey-assigns.git
cd TheReturnJourneyBackendAssign/api
npm install
```

### Start the dev server
```sh
npm run dev
```

### Build and run server
```sh
npm run build
npm run start
```

### Running the API tests
```sh
npm run test
```

### API Endpoints
The following endpoints are available:

- `GET /api/products` Retrieve a list of products.
- `GET /api/products/:id` Retrieve details of a specific product by ID.
- `POST /api/products` Create a new product.
- `PUT /api/products/:id` Update details of a specific product by ID.
- `DELETE /api/products/:id` Delete a product by ID.

### Invoke the APIs via cURL
```
# Get a list of products
curl http://localhost:3000/api/products

# Get a specific product
curl http://localhost:3000/api/products/1

# Create a new product
curl -X POST http://localhost:3000/api/products \
     -H "Content-Type: application/json" \
     -d '{"name":"New Product", "description":"A new product", "price":100}'

# Update a product
curl -X PUT http://localhost:3000/api/products/1 \
     -H "Content-Type: application/json" \
     -d '{"name":"Updated Product", "description":"Updated description", "price":150}'

# Delete a product
curl -X DELETE http://localhost:3000/api/products/1
```

### License
This project is licensed under the MIT License
