# Books REST API

A simple REST API built with Node.js and Express for managing books with CRUD operations.

## Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/books-rest-api.git
cd books-rest-api

# Install dependencies
npm install

# Start the server
npm start
```

Server runs on `http://localhost:3000`

## Project Structure

```
├── server.js              # Main entry point
├── models/
│   └── bookModel.js      # Data model
├── controllers/
│   └── bookController.js # Request handlers
└── routes/
    └── bookRoutes.js     # API routes
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/books` | Get all books |
| GET | `/api/books/:id` | Get book by ID |
| POST | `/api/books` | Create a book |
| PUT | `/api/books/:id` | Update a book |
| DELETE | `/api/books/:id` | Delete a book |

## Usage Examples

**Get all books:**
```bash
curl http://localhost:3000/api/books
```

**Create a book:**
```bash
curl -X POST http://localhost:3000/api/books \
  -H "Content-Type: application/json" \
  -d '{"title":"The Hobbit","author":"J.R.R. Tolkien"}'
```

**Update a book:**
```bash
curl -X PUT http://localhost:3000/api/books/1 \
  -H "Content-Type: application/json" \
  -d '{"title":"New Title"}'
```

**Delete a book:**
```bash
curl -X DELETE http://localhost:3000/api/books/1
```

## Testing with Postman

1. Set method (GET, POST, PUT, DELETE)
2. Enter URL: `http://localhost:3000/api/books`
3. For POST/PUT: Body → raw → JSON
4. Add JSON data and click Send

## Technologies

- Node.js
- Express.js
- JavaScript

## License

ISC