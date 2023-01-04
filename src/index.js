import 'lodash';
import './style/style.scss';
import { commentCount } from './modules/comments.js';
import { baseLink } from './modules/globals.js';
import { likeCount } from './modules/like.js';

// import './img/logo.png';
const items = document.querySelectorAll('.item');
window.onload = () => {
  likeCount(baseLink);
  items.forEach((item) => {
    commentCount(baseLink, item.id);
  });
};
