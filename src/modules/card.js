// const cardGrid = document.querySelector('.middle');
const cardGrid = document.createElement('div');
cardGrid.classList.add('card-grid');
// cardsSection.appendChild(cardGrid);

const cards = [
  {
    name: 'VegeTable Salad',
    likes: 5,
    comments: ['This looks delicious!', 'I love salads'],
  },
  {
    name: 'Grilled Salmon',
    likes: 3,
    comments: ['Yum, I love grilled salmon'],
  },
  {
    name: 'Sushi Platter',
    likes: 8,
    comments: ['I love sushi!', 'This looks amazing'],
  },
  {
    name: 'Pizza Margherita',
    likes: 2,
    comments: ['I could go for a slice of pizza right now'],
    imageUrl: ['https://media.gettyimages.com/id/157741539/photo/pizza-margherita.jpg?s=170667a&w=gi&k=20&c=0fIdw56EiHt78wN_JGaMiSlrYxC6ZipRvLIzRf1ReX8='],
  },
  {
    name: 'Tomato Soup',
    likes: 7,
    comments: ['This looks like the perfect comfort food'],
  },
  {
    name: 'Chocolate Cake',
    likes: 10,
    comments: ['I have a sweet tooth and this looks like it will hit the spot'],
  },
];

cards.forEach((cardData) => {
  // fetch('')
  // .then((response) => response.json())
  // .then((data) => {
  // cardData.imageUrl = data.imageUrl;

  const card = document.createElement('div');
  card.classList.add('card');

  const imagePlaceholder = document.createElement('img');
  imagePlaceholder.setAttribute('class', 'image-placeholder');
  imagePlaceholder.setAttribute('alt', 'Pizza-Image');
  imagePlaceholder.src = cardData.source;
  const textFlex = document.createElement('span');
  textFlex.setAttribute('class', 'text-flex');

  const p = document.createElement('p');
  p.textContent = cardData.name;

  const forHeart = document.createElement('span');
  forHeart.setAttribute('class', 'for-heart');
  forHeart.innerHTML = `&#x2764; <i>${cardData.likes} likes</i>`;

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

    const comments = cardData.comments.map((comment) => `<li>${comment}</li>`).join('');

    const popUp = document.createElement('div');
    popUp.classList.add('pop-up');
    popUp.innerHTML = `
      <div class="image-placeholder" > <img src="${cardData.source1}" class="pop-up-image" alt="card-image"></div>
      <h2>${cardData.name}</h2>
      <ul>${comments}</ul>
      <button class="exit-btn">Exit</button>
    `;
    document.body.appendChild(popUp);

    const exitBtn = popUp.querySelector('.exit-btn');
    exitBtn.addEventListener('click', () => {
      document.body.removeChild(popUp);
      document.body.classList.remove('pop-up-open');
    });
  });
  // });
});

const cardContainer = document.getElementById('card-container');
cardContainer.appendChild(cardGrid);
