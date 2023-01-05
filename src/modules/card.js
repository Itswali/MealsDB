import { showComment } from "./comments.js";
import { baseLink } from "./globals.js";
// const cardGrid = document.querySelector('.middle');
const cardGrid = document.createElement("div");
cardGrid.classList.add("card-grid");
// cardsSection.appendChild(cardGrid);

cards.forEach((cardData) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.id = cardData.idMeal;
  const imagePlaceholder = document.createElement("img");
  imagePlaceholder.setAttribute("class", "image-placeholder");
  imagePlaceholder.setAttribute("alt", "");
  imagePlaceholder.setAttribute("src", `${cardData.strMealThumb}`);
  const textFlex = document.createElement("span");
  textFlex.setAttribute("class", "text-flex");

  const p = document.createElement("p");
  p.textContent = cardData.strMeal;

  const forHeart = document.createElement("span");
  forHeart.setAttribute("class", "for-heart");
  forHeart.innerHTML = `&#x2764; <i><span class="like-count"></span> likes</i>`;

  textFlex.appendChild(p);
  textFlex.appendChild(forHeart);

  const forBtn = document.createElement("span");
  forBtn.setAttribute("class", "for-btn");

  const commentBtn = document.createElement("button");
  commentBtn.setAttribute("class", "comment-btn");
  commentBtn.textContent = "Comments";

  // commentBtn.addEventListener('click', () => {
  //   const comments = cardData.comments.map((comment) => `<li>${comment}</li>`).join('');
  //   alert(`<h2>${cardData.name}</h2><ul>${comments}</ul>`);
  // });

  forBtn.appendChild(commentBtn);

  card.appendChild(imagePlaceholder);
  card.appendChild(textFlex);
  card.appendChild(forBtn);

  cardGrid.appendChild(card);

  commentBtn.addEventListener("click", () => {
    document.body.classList.add("pop-up-open");

    const popUp = document.createElement("div");
    popUp.classList.add("pop-up");
    popUp.innerHTML = `
      <img class="image-placeholder" src='${cardData.strMealThumb}' alt='${cardData.strMeal}'/>
      <h2>${cardData.strMeal}</h2>
      <div class="show-comments"></ul>
      <button class="exit-btn">Exit</button>
    `;
    document.body.appendChild(popUp);
    showComment(baseLink, cardData.idMeal);
    const exitBtn = popUp.querySelector(".exit-btn");
    exitBtn.addEventListener("click", () => {
      document.body.removeChild(popUp);
      document.body.classList.remove("pop-up-open");
    });
  });
});

const cardContainer = document.getElementById("card-container");
cardContainer.appendChild(cardGrid);

// document.body.appendChild(cardGrid);
