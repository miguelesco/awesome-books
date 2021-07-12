
const LocalStorage = window.localStorage;
const form = document.querySelector('.form');

const Book_Handler  = {
    init:()=>{
        form.addEventListener('submit', (event) => Book_Handler.add(event));
    },
    add:(event)=>{
        console.log(event.target.value);
        event.preventDefault();
        // const storageBooks = JSON.stringify(localStorage.getItem('books'));
        // storageBooks.push({title, author});
        // localStorage.setItem('books', storageBooks);
    },
    remove:()=>{
        
    },
    show:()=>{
        
    }
};

export default Book_Handler;