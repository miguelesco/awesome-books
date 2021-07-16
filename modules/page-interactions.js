const dateContainer = document.querySelector('.date-container');
const navElements = Array.from(document.getElementsByClassName('nav-element'));
const sections = [

  document.querySelector('#book-list'),

  document.querySelector('#addBook'),

  document.querySelector('#contact'),

];

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
    for (let i = 0; i < sections.length; i++) {
      sections[i].classList[i === index ? 'remove' : 'add']('hide');
    }
  },
  listenNavbarItems() {
    navElements.forEach((btn, i) => {
      btn.addEventListener('click', () => this.changeDisplay(i));
    });
  },
};

export default GeneralFunctions;