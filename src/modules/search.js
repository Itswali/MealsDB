import { searchUrl, searchCount, searchCountHeading } from './globals.js';
import { countMeals, showMeals } from './meals.js';

const searchMeals = () => {
  const term = document.getElementById('search-input').value;
  searchCountHeading.style.visibility = 'visible';
  showMeals(searchUrl, term);
  countMeals(searchUrl, term, searchCount);
};
export default searchMeals;
