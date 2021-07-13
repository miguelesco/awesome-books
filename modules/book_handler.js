
import Books from './books.js'

const LocalStorage = window.localStorage;
const form = document.querySelector('.form');

const Book_Handler  = {
    init:()=>{
        form.addEventListener('submit', (event) => Book_Handler.add(event));
    },
    add:(event)=>{
        event.preventDefault();
        let inputs = document.getElementsByTagName('input');
        let title = inputs[0].value;
        let author = inputs[1].value;
        const storageBooks = JSON.parse(localStorage.getItem('books'));

        storageBooks.push({title, author});
        localStorage.setItem('books', JSON.stringify(storageBooks));
        Books.render();
    },
    remove:(index)=>{      
        const localStorageItems = JSON.parse(localStorage.getItem('books'));
        const newItems = localStorageItems.filter((item,i) => i !== index);
        localStorage.setItem('books', JSON.stringify(newItems));
        Books.render();
    },
    show:()=>{
        
    }
};

export default Book_Handler;
