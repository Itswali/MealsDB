const mealsRecipe = async (mealsId, element) => {
  const detail = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealsId}`,
  );
  await detail.json().then((food) => {
    const recipe = food.meals[0].strInstructions;
    element.innerHTML = recipe;
  });
};

export default mealsRecipe;
