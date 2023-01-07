import { addComment, showComment, showCount } from './comments.js';
import { baseLink } from './globals.js';
import { itemLike, likeCount } from './like.js';
import mealsRecipe from './recipe.js';

const cardGrid = document.createElement('div');
cardGrid.classList.add('card-grid');
cardGrid.id = 'show-case';

const renderCards = (arr) => {
  arr.forEach((cardData) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.id = cardData.idMeal;
    const imagePlaceholder = document.createElement('img');
    imagePlaceholder.setAttribute('class', 'image-placeholder');
    imagePlaceholder.setAttribute('alt', '');
    imagePlaceholder.setAttribute('src', `${cardData.strMealThumb}`);
    const textFlex = document.createElement('span');
    textFlex.setAttribute('class', 'text-flex');

    const p = document.createElement('p');
    p.textContent = cardData.strMeal;

    const forHeart = document.createElement('span');
    forHeart.setAttribute('class', 'for-heart');
    const likeIco = document.createElement('i');
    likeIco.classList.add('fa-solid', 'fa-heart');
    likeIco.id = `like-${cardData.idMeal}`;
    likeIco.style.cursor = 'pointer';
    forHeart.appendChild(likeIco);
    likeIco.addEventListener('click', () => {
      itemLike(baseLink, cardData.idMeal);
      setTimeout(() => {
        likeCount(baseLink);
      }, 1000);
    });
    const likeNum = document.createElement('span');
    likeNum.classList.add('like-count');
    likeNum.id = `like-count${cardData.idMeal}`;
    forHeart.appendChild(likeNum);

    textFlex.appendChild(p);
    textFlex.appendChild(forHeart);

    const forBtn = document.createElement('span');
    forBtn.setAttribute('class', 'for-btn');

    const commentBtn = document.createElement('button');
    commentBtn.setAttribute('class', 'comment-btn');
    commentBtn.textContent = 'Comments';

    forBtn.appendChild(commentBtn);

    card.appendChild(imagePlaceholder);
    card.appendChild(textFlex);
    card.appendChild(forBtn);

    cardGrid.appendChild(card);

    commentBtn.addEventListener('click', () => {
      document.body.classList.add('pop-up-open');
      const popUpBg = document.createElement('div');
      popUpBg.classList.add('pop-up-bg');
      const popUp = document.createElement('div');
      popUp.classList.add('pop-up');
      popUp.id = `pop-${cardData.idMeal}`;
      popUp.innerHTML = `
        <img class="image-placeholder" src='${cardData.strMealThumb}' alt='${cardData.strMeal}'/>
        <h2>${cardData.strMeal}</h2>
        <h3 class="recipe-heading">Recipe</h4>
        `;
      const recipe = document.createElement('p');
      recipe.id = `recipe-${cardData.idMeal}`;
      popUp.appendChild(recipe);
      setTimeout(() => {
        mealsRecipe(cardData.idMeal, recipe);
      }, 1000);
      const commentHeading = document.createElement('h3');
      commentHeading.classList.add('comments-heading');
      commentHeading.innerHTML = `Comments <span class="comments-count" id="#comment-count-${cardData.idMeal}"></span>`;
      popUp.appendChild(commentHeading);
      const commentDiv = document.createElement('div');
      commentDiv.classList.add('show-comments');
      commentDiv.id = `show-comments-${cardData.idMeal}`;
      popUp.appendChild(commentDiv);
      const exitBtn = document.createElement('button');
      exitBtn.classList.add('exit-btn');
      exitBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
      popUpBg.appendChild(exitBtn);
      const commentForm = document.createElement('div');
      commentForm.classList.add('form-cintainer');
      commentForm.innerHTML = `<form name="add-comment" class="comment-form" id="comment-${cardData.idMeal}">
      <input
        id="username-${cardData.idMeal}"
        type="text"
        placeholder="Name (required)"
        name="name"
        class="name"
        required
      />
      <br />
      <textarea
        id="user-comment-${cardData.idMeal}"
        placeholder="Your comment (required)"
        name="comment"
        class="comment"
        required
      ></textarea
      ><br />
      <button id="submit-btn-${cardData.idMeal}" class="submit-btn" type="button">Submit</button>
    </form>`;
      popUp.appendChild(commentForm);
      popUpBg.appendChild(popUp);
      document.body.appendChild(popUpBg);

      exitBtn.addEventListener('click', () => {
        document.body.removeChild(popUpBg);
        document.body.classList.remove('pop-up-open');
      });

      setTimeout(() => {
        showComment(baseLink, cardData.idMeal);
      }, 1000);
      const submitBtn = document.getElementById(
        `submit-btn-${cardData.idMeal}`,
      );
      submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        addComment(baseLink, cardData.idMeal);
        setTimeout(() => {
          showComment(baseLink, cardData.idMeal);
          showCount(baseLink, cardData.idMeal);
        }, 1000);
      });
      showCount(baseLink, cardData.idMeal);
    });
  });
};

const cardContainer = document.getElementById('card-container');
cardContainer.appendChild(cardGrid);
export default renderCards;
