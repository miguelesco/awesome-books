
const dateContainer = document.querySelector('.date-container');
const booksList = document.querySelector('#book-list');
const addBook = document.querySelector('#addBook');
const contact = document.querySelector('#contact');
const navElements = Array.from(document.getElementsByClassName('nav-element'));

const GeneralFunctions = {
  init: function ()  {
    dateContainer.innerHTML = this.date();
    this.changeDisplay(0);
    this.listenNavbarItems();
  },
  date: () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const date = new Date();
    const timeSimbol = date.getHours() > 12 ? 'pm' : 'am'; 
    const fixedDate = `${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()} ${date.toLocaleTimeString()} ${timeSimbol}`;
    return fixedDate;
  },
  changeDisplay: (index) => {
    console.log(index);
    switch (index) {
      case 0:
        booksList.classList.toggle('hide');
        addBook.classList.add('hide');
        contact.classList.add('hide');
        break;
      case 1:
        addBook.classList.toggle('hide');
        booksList.classList.add('hide');
        contact.classList.add('hide');
        break;
      case 2:
        contact.classList.toggle('hide');
        booksList.classList.add('hide');
        addBook.classList.add('hide');
        break;
    }
  },
  listenNavbarItems: function () {
    navElements.forEach((btn, i) => {
      btn.addEventListener('click', ()=> this.changeDisplay(i));
    });
  }
}






export default GeneralFunctions;