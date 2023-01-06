import commentCount from './commentcount.js';

const addComment = async (baseLink, itemId) => {
  const user = document.getElementById(`username-${itemId}`);
  const text = document.getElementById(`user-comment-${itemId}`);
  await fetch(`${baseLink}/comments/`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      item_id: itemId,
      username: user.value,
      comment: text.value,
    }),
  });
  user.value = '';
  text.value = '';
};
const renderComment = (arr) => {
  let comments = '';
  if (arr.length !== undefined) {
    arr.forEach((obj) => {
      comments += `<p class="single-comment"><span class="comment-date">${obj.creation_date}</span><br><span class="user-name">${obj.username}:</span> <span class="comment-text">${obj.comment}</span></p>`;
    });
  }

  return comments;
};
const showComment = async (baseLink, itemId) => {
  const response = await fetch(`${baseLink}/comments?item_id=${itemId}`);
  const commentShow = document.querySelector(`#pop-${itemId} .show-comments`);
  await response.json().then((comments) => {
    commentShow.replaceChildren();
    commentShow.innerHTML = renderComment(comments);
  });
};

const showCount = async (baseLink, itemId) => {
  const response = await fetch(`${baseLink}/comments?item_id=${itemId}`);
  const countSpan = document.getElementById(`#comment-count-${itemId}`);
  await response.json().then((comments) => {
    countSpan.replaceChildren();
    countSpan.innerHTML = commentCount(comments);
  });
};
export {
  addComment, showCount, showComment, renderComment,
};
