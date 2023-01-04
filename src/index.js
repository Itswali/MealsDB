import 'lodash';
import './style/style.scss';
import { showCount } from './modules/comments.js';
import { baseLink } from './modules/globals.js';
// import './img/logo.png';

const items = document.querySelectorAll('.item');
window.onload = () => {
  items.forEach((item) => {
    showCount(baseLink, item.id);
  });
};
