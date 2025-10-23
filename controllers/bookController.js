const Book = require('../models/bookModel');

exports.getAllBooks = (req, res) => {
  const books = Book.getAll();
  res.json({
    success: true,
    count: books.length,
    data: books
  });
};

exports.getBookById = (req, res) => {
  const id = parseInt(req.params.id);
  const book = Book.getById(id);
  
  if (!book) {
    return res.status(404).json({
      success: false,
      message: `Book with ID ${id} not found`
    });
  }
  
  res.json({
    success: true,
    data: book
  });
};

exports.createBook = (req, res) => {
  const { title, author } = req.body;
  
  if (!title || !author) {
    return res.status(400).json({
      success: false,
      message: 'Please provide both title and author'
    });
  }
  
  const newBook = Book.create({ title, author });
  
  res.status(201).json({
    success: true,
    message: 'Book created successfully',
    data: newBook
  });
};

exports.updateBook = (req, res) => {
  const id = parseInt(req.params.id);
  const { title, author } = req.body;
  
  const updatedBook = Book.update(id, { title, author });
  
  if (!updatedBook) {
    return res.status(404).json({
      success: false,
      message: `Book with ID ${id} not found`
    });
  }
  
  res.json({
    success: true,
    message: 'Book updated successfully',
    data: updatedBook
  });
};

exports.deleteBook = (req, res) => {
  const id = parseInt(req.params.id);
  const deletedBook = Book.delete(id);
  
  if (!deletedBook) {
    return res.status(404).json({
      success: false,
      message: `Book with ID ${id} not found`
    });
  }
  
  res.json({
    success: true,
    message: 'Book deleted successfully',
    data: deletedBook
  });
};