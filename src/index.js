import 'lodash';
import './style/style.scss';
import { addComment, showComment, showCount } from './modules/comments.js';
import { baseLink } from './modules/globals.js';
// import './img/logo.png';

const items = document.querySelectorAll('.item');
window.onload = () => {
  items.forEach((item) => {
    showCount(baseLink, item.id);
    showComment(baseLink, item.id);
    // const commentForm = document.getElementById(`comment-${item.Id}`);
    const submitBtn = document.getElementById(`submit-btn-${item.id}`);
    submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      addComment(baseLink, item.id);
      //   commentForm.reset();
      setTimeout(() => {
        showComment(baseLink, item.id);
      }, 1000);
    });
  });
};
