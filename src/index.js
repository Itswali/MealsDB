import 'lodash';
import './style/style.scss';
import { showMeals, countMeals } from './modules/meals.js';
import navigation from './modules/nav.js';
import {
  catBeef,
  catSeafood,
  catDessert,
  searchCount,
  searchCountHeading,
  catUrl,
} from './modules/globals.js';
import searchMeals from './modules/search.js';

window.onload = () => {
  showMeals(catUrl, 'Beef');

  countMeals(catUrl, 'Beef', catBeef.childNodes[1]);

  catSeafood.childNodes[1].style.visibility = 'hidden';

  catDessert.childNodes[1].style.visibility = 'hidden';
  if (!searchCount.hasChildNodes()) {
    searchCountHeading.style.visibility = 'hidden';
  } else {
    searchCountHeading.style.visibility = 'visible';
  }
  navigation();
  const searchBtn = document.getElementById('search-btn');
  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const cards = document.getElementById('show-case');
    cards.replaceChildren();
    searchMeals();
  });
};
