import Books from './books.js';

const form = document.querySelector('.form');

const BookHandler = {
  init: () => {
    form.addEventListener('submit', (event) => BookHandler.add(event));
    BookHandler.checkBtns();
  },
  checkBtns: () => {
    const button = Array.from(Books.bookList.getElementsByClassName('removeBtn'));
    button.forEach((btn, i) => {
      btn.addEventListener('click', () => BookHandler.remove(i));
    });
  },
  add: (event) => {
    event.preventDefault();
    const inputs = document.getElementsByTagName('input');
    const title = inputs[0].value;
    const author = inputs[1].value;
    const storageBooks = JSON.parse(localStorage.getItem('books'));

    storageBooks.push({ title, author });
    localStorage.setItem('books', JSON.stringify(storageBooks));
    Books.render();
    BookHandler.checkBtns();
  },
  remove: (index) => {
    const localStorageItems = JSON.parse(localStorage.getItem('books'));
    const newItems = localStorageItems.filter((item, i) => i !== index);
    localStorage.setItem('books', JSON.stringify(newItems));
    Books.render();
    BookHandler.checkBtns();
  },
};

export default BookHandler;
