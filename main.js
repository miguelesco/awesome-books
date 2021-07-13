import BookHandler from './modules/book_handler.js';
import Book from './modules/books.js';

const Init = () => {
  Book.init();
  BookHandler.init();
};

Init();