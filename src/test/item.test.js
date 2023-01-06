/**
 * @jest-environment jsdom
 */

import mealsCountTest from "./test-itemcount.js";

const mockData = [
  {
    strMeal: "Baked salmon with fennel & tomatoes",
    strMealThumb: "https://xyz.xyz",
    idMeal: "52959",
  },
  {
    strMeal: "Baked salmon with fennel & tomatoes",
    strMealThumb: "https://xyz.xyz",
    idMeal: "52960",
  },
  {
    strMeal: "Baked salmon with fennel & tomatoes",
    strMealThumb: "https://xyz.xyz",
    idMeal: "52961",
  },
  {
    strMeal: "Baked salmon with fennel & tomatoes",
    strMealThumb: "https://xyz.xyz",
    idMeal: "52962",
  },
  {
    strMeal: "Baked salmon with fennel & tomatoes",
    strMealThumb: "https://xyz.xyz",
    idMeal: "52963",
  },
];

describe("We are", () => {
  test("testing commentCount function", () => {
    expect(mealsCountTest(mockData)).toBe(5);
  });
});
