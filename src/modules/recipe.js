const mealsRecipe = async (mealsId, element) => {
  const detail = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealsId}`,
  );
  await detail.json().then((food) => {
    const recipe = `<h4>Procedure</h4> ${food.meals[0].strInstructions}`;
    element.innerHTML = recipe;
  });
};
const mealsIngredients = async (mealsId, element) => {
  const detail = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealsId}`,
  );
  await detail.json().then((food) => {
    let list = '';
    const arr = [
      'strIngredient1',
      'strIngredient2',
      'strIngredient3',
      'strIngredient4',
      'strIngredient5',
      'strIngredient6',
      'strIngredient7',
      'strIngredient8',
      'strIngredient9',
      'strIngredient10',
      'strIngredient11',
      'strIngredient12',
      'strIngredient13',
      'strIngredient14',
      'strIngredient15',
      'strIngredient16',
      'strIngredient17',
      'strIngredient18',
      'strIngredient19',
      'strIngredient20',
    ];
    arr.forEach((item) => {
      if (food.meals[0][item] !== '' && food.meals[0][item] !== null) {
        list += `<li class="ingred">${food.meals[0][item]}</li>`;
      }
    });
    element.innerHTML = list;
  });
};
const mealsYoutube = async (mealsId, element) => {
  const detail = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealsId}`,
  );
  await detail.json().then((food) => {
    const youtube = `<a href="${food.meals[0].strYoutube}" target="_blank" rel="noopener noreferrer" class="yt-link"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>`;
    element.innerHTML = youtube;
  });
};
export { mealsRecipe, mealsIngredients, mealsYoutube };
