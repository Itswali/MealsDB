import renderCards from './card.js';
import { baseLink } from './globals.js';
import { likeCount } from './like.js';
import mealsCount from './itemcount.js';

const showMeals = async (url, term) => {
  const searchResult = await fetch(`${url}${term}`);
  await searchResult.json().then((food) => {
    const foods = food.meals;
    renderCards(foods);
  });
  likeCount(baseLink);
};
const countMeals = async (url, term, element) => {
  const response = await fetch(`${url}${term}`);
  await response.json().then((food) => {
    const foods = food.meals;
    element.innerText = mealsCount(foods);
  });
};
export { showMeals, countMeals };
