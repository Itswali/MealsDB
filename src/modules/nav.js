import { showMeals, countMeals } from './meals.js';
import {
  catBeef,
  catDessert,
  catSeafood,
  catUrl,
  menuIco,
  navMenu,
  searchCountHeading,
} from './globals.js';

const navigation = () => {
  const cards = document.getElementById('show-case');
  catBeef.addEventListener('click', () => {
    searchCountHeading.style.visibility = 'hidden';
    cards.replaceChildren();
    showMeals(catUrl, 'Beef');
    countMeals(catUrl, 'Beef', catBeef.childNodes[1]);
    catBeef.childNodes[1].style.visibility = 'visible';
    catSeafood.childNodes[1].innerText = '';
    catSeafood.childNodes[1].style.visibility = 'hidden';
    catDessert.childNodes[1].innerText = '';
    catDessert.childNodes[1].style.visibility = 'hidden';
  });
  catSeafood.addEventListener('click', () => {
    searchCountHeading.style.visibility = 'hidden';
    cards.replaceChildren();
    showMeals(catUrl, 'Seafood');
    countMeals(catUrl, 'Seafood', catSeafood.childNodes[1]);
    catSeafood.childNodes[1].style.visibility = 'visible';
    catBeef.childNodes[1].innerText = '';
    catBeef.childNodes[1].style.visibility = 'hidden';
    catDessert.childNodes[1].innerText = '';
    catDessert.childNodes[1].style.visibility = 'hidden';
  });
  catDessert.addEventListener('click', () => {
    searchCountHeading.style.visibility = 'hidden';
    cards.replaceChildren();
    showMeals(catUrl, 'Dessert');
    countMeals(catUrl, 'Dessert', catDessert.childNodes[1]);
    catDessert.childNodes[1].style.visibility = 'visible';
    catBeef.childNodes[1].innerText = '';
    catBeef.childNodes[1].style.visibility = 'hidden';
    catSeafood.childNodes[1].innerText = '';
    catSeafood.childNodes[1].style.visibility = 'hidden';
  });

  menuIco.addEventListener('click', () => {
    menuIco.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
    menuIco.classList.remove('active');
    navMenu.classList.remove('active');
  }));
};

export default navigation;
