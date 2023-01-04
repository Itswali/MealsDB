const itemLike = async (baseLink, itemId) => {
  await fetch(`${baseLink}/likes/`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      item_id: itemId,
    }),
  });
};

const likeCount = async (baseLink) => {
  const likeEntries = await fetch(`${baseLink}/likes`);
  const items = document.querySelectorAll('.item');
  await likeEntries.json().then((likes) => {
    items.forEach((item) => {
      const likeCounter = document.querySelector(`#${item.id} .like-count`);
      likes.forEach((like) => {
        if (item.id === like.item_id) {
          likeCounter.innerHTML = `${like.likes}`;
        }
      });
    });
  });
};

export { itemLike, likeCount };
