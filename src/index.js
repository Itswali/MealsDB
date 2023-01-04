import 'lodash';
import './style/style.scss';
// import './img/logo.png';
// import './modules/pop.js';
import showCard from './modules/pop.js';

const cardsd = document.getElementsByClassName('card');

const detail = cardsd.innerHTML;

showCard(detail);