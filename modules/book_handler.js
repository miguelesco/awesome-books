

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
        const storageBooks = localStorage.getItem('books');
        if(!storageBooks){
            localStorage.setItem('books',JSON.stringify({title, author}));  
            
        }else{
           let arrBooks =  [storageBooks];
           arrBooks.push(JSON.stringify({title, author}));
            console.log('works');  
           localStorage.setItem('books',arrBooks);
           

        }
        // storageBooks.push({title, author});
        //console.log(JSON.parse(storageBooks));
    },
    remove:()=>{
        
    },
    show:()=>{
        
    }
};

export default Book_Handler;
