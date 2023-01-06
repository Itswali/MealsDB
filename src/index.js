import 'lodash';
import './style/style.scss';
import { showMeals, countMeals } from './modules/meals.js';
import navigation from './modules/nav.js';
import { catBeef, catSeafood, catDessert } from './modules/globals.js';

window.onload = () => {
  showMeals('Beef');

  countMeals('Beef', catBeef);

  catSeafood.childNodes[1].style.visibility = 'hidden';

  catDessert.childNodes[1].style.visibility = 'hidden';

  navigation();
};
