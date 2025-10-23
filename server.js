const express = require('express');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Books API',
    endpoints: {
      'GET /api/books': 'Get all books',
      'GET /api/books/:id': 'Get book by ID',
      'POST /api/books': 'Create new book',
      'PUT /api/books/:id': 'Update book',
      'DELETE /api/books/:id': 'Delete book'
    }
  });
});

app.use('/api/books', bookRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: err.message
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});