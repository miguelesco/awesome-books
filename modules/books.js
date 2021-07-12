
const bookList = document.querySelector('.books-wrapper');

const Books = [
    {
        title:'Don Quijote',
        author:'Miguel de Servantes'
    },
    {
        title:'Don Quijote',
        author:'Miguel de Servantes'
    },
];

Books.forEach(book => {
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