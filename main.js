import BookHandler from './modules/book_handler.js';
import Book from './modules/books.js';
import GeneralFunctions from './modules/page-interactions.js';

const Init = () => {
  Book.init();
  BookHandler.init();
  GeneralFunctions.init();
};

Init();