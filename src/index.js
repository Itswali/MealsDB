import 'lodash';
import './style/style.scss';
import { showMeals, countMeals } from './modules/meals.js';
// import { itemLike, likeCount } from "./modules/like.js";
// import { baseLink } from "./modules/globals.js";
// const items = document.querySelectorAll(".card");
const catBeef = document.getElementById('cat-beef');
const catSeafood = document.getElementById('cat-seafood');
const catDessert = document.getElementById('cat-dessert');
const cards = document.getElementById('show-case');
// const mealCountSpans = document.querySelectorAll(".meal-count");
// const emptySpan = () => {
//   mealCountSpans.forEach((span) => {
//     if (span.childNodes.length === 0) {
//       span.style.display = "none";
//     }
//   });
// };
window.onload = () => {
  showMeals('Beef');

  countMeals('Beef', catBeef);

  catSeafood.childNodes[1].style.visibility = 'hidden';

  catDessert.childNodes[1].style.visibility = 'hidden';
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
};
