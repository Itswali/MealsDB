/**
 * @jest-environment jsdom
 */

import { mealsCount } from '../meals.js';

const mockData = [
  { strMeal: 'Baked salmon with fennel & tomatoes', strMealThumb: 'https://xyz.xyz', idMeal: '52959' },
  { strMeal: 'Baked salmon with fennel & tomatoes', strMealThumb: 'https://xyz.xyz', idMeal: '52960' },
  { strMeal: 'Baked salmon with fennel & tomatoes', strMealThumb: 'https://xyz.xyz', idMeal: '52961' },
  { strMeal: 'Baked salmon with fennel & tomatoes', strMealThumb: 'https://xyz.xyz', idMeal: '52962' },
  { strMeal: 'Baked salmon with fennel & tomatoes', strMealThumb: 'https://xyz.xyz', idMeal: '52963' },
];

describe('We are', () => {
  test('testing commentCount function', () => {
    expect(mealsCount(mockData)).toBe(5);
  });
});
