let books = [
  { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { id: 2, title: '1984', author: 'George Orwell' },
  { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' }
];

let nextId = 4;

class Book {
  static getAll() {
    return books;
  }
  
  static getById(id) {
    return books.find(b => b.id === id);
  }
  
  static create(bookData) {
    const newBook = {
      id: nextId++,
      title: bookData.title,
      author: bookData.author
    };
    books.push(newBook);
    return newBook;
  }
  
  static update(id, bookData) {
    const index = books.findIndex(b => b.id === id);
    
    if (index === -1) return null;
    
    if (bookData.title) books[index].title = bookData.title;
    if (bookData.author) books[index].author = bookData.author;
    
    return books[index];
  }
  
  static delete(id) {
    const index = books.findIndex(b => b.id === id);
    
    if (index === -1) return null;
    
    const deletedBook = books.splice(index, 1)[0];
    return deletedBook;
  }
}

module.exports = Book;