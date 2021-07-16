const LocalStorage = window.localStorage;

class Book {
  static list = [];

  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  static bookList = document.querySelector('.books-wrapper');

  static init() {
    if (LocalStorage.getItem('books')) {
      this.render();
    } else {
      localStorage.setItem('books', '[]');
    }
  }

  static render() {
    this.bookList.innerHTML = '';
    const books = JSON.parse(localStorage.getItem('books'));
    this.list = [...books];
    this.list.forEach((book, i) => {
      const count = i + 1;
      const bg = count % 2 ? 'gray-bg' : 'white-bg';
      const bookElement = `
            <li class="book ${bg}" >
              <p class="book-title">"${book.title}" by ${book.author}</p>
              <button class="removeBtn border btn-danger" >Remove</button>
            </li>`;
      this.bookList.innerHTML += bookElement;
    });
  }
}

export default Book;