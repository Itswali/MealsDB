const showPopup = (cardData, button) => {
  // Create the pop-up elements and content
  const popupCard = document.createElement('div');
  popupCard.classList.add('popup-card');

  const popupCardInner = document.createElement('div');
  popupCardInner.classList.add('popup-card-inner');

  const popupImage = document.createElement('img');
  popupImage.setAttribute('class', 'popup-image');
  popupImage.setAttribute('alt', '');

  const popupText = document.createElement('span');
  popupText.setAttribute('class', 'popup-text');

  const p = document.createElement('p');
  p.textContent = cardData.name;

  const popupHeart = document.createElement('span');
  popupHeart.setAttribute('class', 'popup-heart');
  popupHeart.innerHTML = `&#x2764; <i>${cardData.likes} likes</i>`;

  popupText.appendChild(p);
  popupText.appendChild(popupHeart);

  const popupBtn = document.createElement('span');
  popupBtn.setAttribute('class', 'popup-btn');

  const commentBtn = document.createElement('button');
  commentBtn.textContent = 'Comments';

  // Add the event listener to the button
  commentBtn.addEventListener('click', () => {
    const comments = cardData.comments.map((comment) => `<li>${comment}</li
