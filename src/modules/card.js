import { addComment, showComment, showCount } from './comments.js';
import { baseLink } from './globals.js';
import { itemLike, likeCount } from './like.js';
import { errorMsg, successMsg } from './messages.js';
import { mealsRecipe, mealsIngredients, mealsYoutube } from './recipe.js';

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
    imagePlaceholder.style.cursor = 'pointer';
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
        <h4>Ingredients</h4>
        `;
      const ingredients = document.createElement('ul');
      ingredients.id = `ingred-${cardData.idMeal}`;
      ingredients.classList.add('ingred');
      popUp.appendChild(ingredients);
      setTimeout(() => {
        mealsIngredients(cardData.idMeal, ingredients);
      }, 1000);
      const recipe = document.createElement('p');
      recipe.id = `recipe-${cardData.idMeal}`;
      popUp.appendChild(recipe);
      setTimeout(() => {
        mealsRecipe(cardData.idMeal, recipe);
      }, 1000);
      const youtube = document.createElement('div');
      popUp.appendChild(youtube);
      setTimeout(() => {
        mealsYoutube(cardData.idMeal, youtube);
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
      const theForm = document.createElement('form');
      theForm.classList.add('comment-form');
      theForm.id = `comment-${cardData.idMeal}`;
      theForm.setAttribute('name', 'add-comment');
      commentForm.appendChild(theForm);
      const user = document.createElement('input');
      user.id = `username-${cardData.idMeal}`;
      user.classList.add('name');
      user.setAttribute('type', 'text');
      user.setAttribute('name', 'name');
      user.setAttribute('placeholder', 'Name (required)');
      theForm.appendChild(user);
      const text = document.createElement('textarea');
      text.id = `user-comment-${cardData.idMeal}`;
      text.classList.add('comment');
      text.setAttribute('name', 'comment');
      text.setAttribute('placeholder', 'Your comment (required)');
      theForm.appendChild(text);
      const message = document.createElement('div');
      message.classList.add('msg');
      theForm.appendChild(message);
      const submitBtn = document.createElement('button');
      submitBtn.id = `submit-btn-${cardData.idMeal}`;
      submitBtn.classList.add('submit-btn');
      submitBtn.setAttribute('type', 'button');
      submitBtn.innerText = 'Submit';
      theForm.appendChild(submitBtn);
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
      submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (user.value !== '' && text.value !== '') {
          addComment(baseLink, cardData.idMeal, user, text);
          successMsg(message);
          setTimeout(() => {
            showComment(baseLink, cardData.idMeal);
            showCount(baseLink, cardData.idMeal);
          }, 1000);
        } else {
          errorMsg(message);
        }
      });

      showCount(baseLink, cardData.idMeal);
    });
    imagePlaceholder.addEventListener('click', () => {
      commentBtn.click();
    });
  });
};

const cardContainer = document.getElementById('card-container');
cardContainer.appendChild(cardGrid);
export default renderCards;
