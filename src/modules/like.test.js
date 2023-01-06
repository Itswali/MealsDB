/**
 * @jest-environment jsdom
 */

import { likeCount } from './like.js';

const mockData = [
  { item_id: '1', likes: 5 },
  { item_id: '2', likes: 7 },
];

describe('We are', () => {
  test('testing commentCount function', () => {
    expect(likeCount(mockData)).toBe(2);
  });
});