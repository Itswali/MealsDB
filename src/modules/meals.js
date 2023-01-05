const showMeals = async (category) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
  );
  await response.json().then((food) => {
    const meals = food.meals;
    console.log(meals);
  });
};
