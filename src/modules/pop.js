const cardGrid = document.createElement('div');
cardGrid.classList.add('card-grid');

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
  const card = document.createElement('div');
  card.classList.add('card');

  const imagePlaceholder = document.createElement('img');
  imagePlaceholder.setAttribute('class', 'image-placeholder');
  imagePlaceholder.setAttribute('alt', '');

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

  commentBtn.addEventListener('click', () => {
    document.body.classList.add('pop-up-open');

    const comments = cardData.comments.map((comment) => `<li>${comment}</li>`).join('');

    const popUp = document.createElement('div');
    popUp.classList.add('pop-up');
    popUp.innerHTML = `
      <div class="image-placeholder"></div>
      <h2>${cardData.name}</h2
      <ul>${comments}</ul>
      <button class="exit-btn">Exit</button>
    `;
    document.body.appendChild(popUp);

    const exitBtn = popUp.querySelector('.exit-btn');
    exitBtn.addEventListener('click', () => {
      document.body.removeChild(popUp);
      document.body.classList.remove('pop-up-open');
    });

    fetch('api-url')
      .then((response) => response.json())
      .then((data) => {
        const { imageUrl } = data.imageUrl;

        // const imageUrl = data.imageUrl;

        const image = document.createElement('img');
        image.setAttribute('src', imageUrl);
        image.setAttribute('alt', '');

        popUp.querySelector('.image-placeholder').replaceWith(image);
      });
  });

  forBtn.appendChild(commentBtn);

  card.appendChild(imagePlaceholder);
  card.appendChild(textFlex);
  card.appendChild(forBtn);

  fetch('api-url')
    .then((response) => response.json())
    .then((data) => {
      const { imageUrl } = data.imageUrl;

      imagePlaceholder.setAttribute('src', imageUrl);
    });

  cardGrid.appendChild(card);
});

document.body.appendChild(cardGrid);
