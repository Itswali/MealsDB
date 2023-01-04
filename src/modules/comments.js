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
export default addComment;
