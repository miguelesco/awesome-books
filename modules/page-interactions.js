const dateContainer = document.querySelector('.date-container');
const booksList = document.querySelector('#book-list');
const addBook = document.querySelector('#addBook');
const contact = document.querySelector('#contact');
const navElements = Array.from(document.getElementsByClassName('nav-element'));

const GeneralFunctions = {
  init() {
    dateContainer.innerHTML = this.date();
    this.changeDisplay(0);
    this.listenNavbarItems();
  },
  date: () => {
    /* eslint-disable */
    const { DateTime } = luxon;
    /* eslint-disable */
    const now = DateTime.now();
    const timeSimbol = now.hour > 12 ? 'pm' : 'am';
    const fixedDate = `${now.monthLong} ${now.day} ${now.year},${now.hour}:${now.minute}:${now.second} ${timeSimbol}`;
    return fixedDate;
  },
  changeDisplay: (index) => {
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
      default:
        break;
    }
  },
  listenNavbarItems() {
    navElements.forEach((btn, i) => {
      btn.addEventListener('click', () => this.changeDisplay(i));
    });
  },
};

export default GeneralFunctions;