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
    this.list.forEach((book) => {
      const bookElement = `
            <li class="book">
                <p class="book-title">${book.title}</p>
                <p class="book-author">${book.author}</p>
                <button class="removeBtn" >remove</button>
            </li>`;
      this.bookList.innerHTML += bookElement;
    });
  }
}

export default Book;