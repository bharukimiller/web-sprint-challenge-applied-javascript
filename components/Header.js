// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {

    const mainHead = document.createElement('div');
    const dateHead = document.createElement('span');
    const titleHead = document.createElement('h1');
    const tempHead = document.createElement('span');

    mainHead.appendChild(dateHead);
    mainHead.appendChild(titleHead);
    mainHead.appendChild(tempHead);

    mainHead.classList.add('header');
    dateHead.classList.add('date');
    tempHead.classList.add('temp');

    dateHead.textContent = 'March 28, 2020';
    titleHead.textContent = 'Lambda Times';
    tempHead.textContent = '98° F'

    return mainHead;
    }
    //test
    const headerParent = document.querySelector('.header-container');

    headerParent.appendChild(Header());