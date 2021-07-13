import BookHandler from './modules/book_handler.js';
import Books from './modules/books.js';

const Init = () => {
  Books.init();
  BookHandler.init();
};

Init();