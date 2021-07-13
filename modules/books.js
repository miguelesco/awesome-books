const LocalStorage = window.localStorage;

const Books = {
  list: [],
  bookList: document.querySelector('.books-wrapper'),
  init: () => {
    if (LocalStorage.getItem('books')) {
      Books.render();
    } else {
      localStorage.setItem('books', '[]');
    }
  },
  render: () => {
    Books.bookList.innerHTML = '';
    const books = JSON.parse(localStorage.getItem('books'));
    Books.list = [...books];
    Books.list.forEach((book) => {
      const bookElement = `
            <li class="book">
                <p class="book-title">${book.title}</p>
                <p class="book-author">${book.author}</p>
                <button class="removeBtn" >remove</button>
            </li>`;
      Books.bookList.innerHTML += bookElement;
    });
  },

};

export default Books;