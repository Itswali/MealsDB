import { searchUrl, searchCount, searchCountHeading } from './globals.js';
import { countMeals, showMeals } from './meals.js';

const searchMeals = () => {
  const term = document.getElementById('search-input');
  const itemName = document.getElementById('item-name');
  searchCountHeading.style.visibility = 'visible';
  showMeals(searchUrl, term.value);
  countMeals(searchUrl, term.value, searchCount);
  itemName.innerHTML = `"${term.value}"`;
  term.value = '';
};
export default searchMeals;
