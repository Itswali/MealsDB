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

const commentCount = async (baseLink, itemId) => {
  const response = await fetch(`${baseLink}/comments?item_id=${itemId}`);
  const countSpan = document.querySelector(`#${itemId} .comment-count`);
  await response.json().then((comments) => {
    countSpan.innerHTML = comments.length;
  });
};
export { addComment, commentCount };
