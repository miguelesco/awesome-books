import Book_Handler from './modules/book_handler.js';
import Books from './modules/books.js';


const Init = () => {
  Book_Handler.init();
  Books.init();
};

Init();