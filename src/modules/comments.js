const addComment = async (baseLink, itemId, userName, comment) => {
  await fetch(`${baseLink}/comments/`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      item_id: itemId,
      username: userName,
      comment,
    }),
  });
};
const renderComment = (arr) => {
  let comments = '';
  arr.forEach((obj) => {
    comments += `<p class="single-comment"><span class="comment-date">${obj.creation_date}</span><br><span class="user-name">${obj.username}:</span> <span class="comment-text">${obj.comment}</span></p>`;
  });
  return comments;
};
const showComment = async (baseLink, itemId) => {
  const response = await fetch(`${baseLink}/comments?item_id=${itemId}`);
  const commentShow = document.querySelector(`#${itemId} .show-comments`);
  await response.json().then((comments) => {
    commentShow.innerHTML = renderComment(comments);
  });
};
const commentCount = (arr) => {
  let result = 0;
  if (arr.length === undefined) {
    result = 0;
  } else {
    result = arr.length;
  }
  return result;
};
const showCount = async (baseLink, itemId) => {
  const response = await fetch(`${baseLink}/comments?item_id=${itemId}`);
  const countSpan = document.querySelector(`#${itemId} .comment-count`);
  await response.json().then((comments) => {
    countSpan.innerHTML = commentCount(comments);
  });
};
export {
  addComment, commentCount, showCount, showComment, renderComment,
};
