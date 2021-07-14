import Book from './books.js';

const form = document.querySelector('.form');

class BookHandler {
  static init() {
    form.addEventListener('submit', (event) => this.add(event));
    this.checkBtns();
  }

  static checkBtns() {
    const button = Array.from(Book.bookList.getElementsByClassName('removeBtn'));
    button.forEach((btn, i) => {
      btn.addEventListener('click', () => this.remove(i));
    });
  }

  static add(event) {
    event.preventDefault();
    const inputs = document.getElementsByTagName('input');
    const title = inputs[0].value;
    const author = inputs[1].value;
    const newBook = new Book(title, author);
    inputs[0].value ='';
    inputs[1].value='';
    const storageBooks = JSON.parse(localStorage.getItem('books'));

    storageBooks.push(newBook);
    localStorage.setItem('books', JSON.stringify(storageBooks));
    Book.render();
    this.checkBtns();
  }

  static remove(index) {
    const localStorageItems = JSON.parse(localStorage.getItem('books'));
    const newItems = localStorageItems.filter((item, i) => i !== index);
    localStorage.setItem('books', JSON.stringify(newItems));
    Book.render();
    this.checkBtns();
  }
}

export default BookHandler;
