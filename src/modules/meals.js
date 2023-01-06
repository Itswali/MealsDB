import renderCards from './card.js';
import { baseLink } from './globals.js';
import { likeCount } from './like.js';
import mealsCount from './itemcount.js';

const showMeals = async (category) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
  );
  await response.json().then((food) => {
    const foods = food.meals;
    renderCards(foods);
  });
  likeCount(baseLink);
};

const countMeals = async (category, menuItem) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
  );
  await response.json().then((food) => {
    const foods = food.meals;
    menuItem.childNodes[1].innerText = mealsCount(foods);
  });
};
export { showMeals, countMeals };
