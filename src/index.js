import 'lodash';
import './style/style.scss';
import { commentCount } from './modules/comments.js';
import { baseLink } from './modules/globals.js';
// import './img/logo.png';

window.onload = () => {
  commentCount(baseLink, 'item123');
};
