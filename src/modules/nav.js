import { showMeals, countMeals } from './meals.js';
import {
  catBeef,
  catDessert,
  catSeafood,
  menuIco,
  navMenu,
} from './globals.js';

const navigation = () => {
  const cards = document.getElementById('show-case');
  catBeef.addEventListener('click', () => {
    cards.replaceChildren();
    showMeals('Beef');
    countMeals('Beef', catBeef);
    catBeef.childNodes[1].style.visibility = 'visible';
    catSeafood.childNodes[1].innerText = '';
    catSeafood.childNodes[1].style.visibility = 'hidden';
    catDessert.childNodes[1].innerText = '';
    catDessert.childNodes[1].style.visibility = 'hidden';
  });
  catSeafood.addEventListener('click', () => {
    cards.replaceChildren();
    showMeals('Seafood');
    countMeals('Seafood', catSeafood);
    catSeafood.childNodes[1].style.visibility = 'visible';
    catBeef.childNodes[1].innerText = '';
    catBeef.childNodes[1].style.visibility = 'hidden';
    catDessert.childNodes[1].innerText = '';
    catDessert.childNodes[1].style.visibility = 'hidden';
  });
  catDessert.addEventListener('click', () => {
    cards.replaceChildren();
    showMeals('Dessert');
    countMeals('Dessert', catDessert);
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
