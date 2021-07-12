
const bookList = document.querySelector('.books-wrapper');

const LocalStorage = window.localStorage;

const Books = {
    list: [],
    init: () => {
        if (LocalStorage.getItem('books')) {
            Books.list = LocalStorage.getItem('books');
        }else {
            localStorage.setItem('books', []);
        }
    }
}

Books.list.forEach(book => {
    const bookElement = `
    <li class="book">
        <p class="book-title">${book.title}</p>
        <p class="book-author">${book.author}</p>
        <button class="removeBtn">remove</button>
    </li>`;
    bookList.innerHTML +=  bookElement;
});

console.log('list', bookList);


export default Books;