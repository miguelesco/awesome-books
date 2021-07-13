
import Book_Handler from './book_handler.js';


const bookList = document.querySelector('.books-wrapper');

const LocalStorage = window.localStorage;

const Books = {
    list: [],

    init: () => {
        if (LocalStorage.getItem('books')) {
            Books.render();
        }else {
            localStorage.setItem('books', '[]');
        }
    },
    render: () => {
        bookList.innerHTML = '';
        const books = JSON.parse(localStorage.getItem('books'));
        Books.list = [...books];
        Books.list.forEach((book, i )=> {
            const bookElement = `
            <li class="book">
                <p class="book-title">${book.title}</p>
                <p class="book-author">${book.author}</p>
                <button class="removeBtn" >remove</button>
            </li>`;
            bookList.innerHTML +=  bookElement;
        });
        const button = Array.from(bookList.getElementsByClassName('removeBtn'));
        button.forEach((btn, i) => {
            btn.addEventListener('click', () => Book_Handler.remove(i));
        });
    },
    
};



export default Books;