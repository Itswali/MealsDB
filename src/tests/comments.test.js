/**
 * @jest-environment jsdom
 */

import { commentCount } from '../modules/comments.js';

const mockData = [
  {
    username: 'Utsargo',
    creation_date: '2023-01-04',
    comment: 'Hello World',
  },
  {
    comment: 'Hello',
    username: 'Roy',
    creation_date: '2023-01-04',
  },
];

describe('We are', () => {
  test('testing commentCount function', () => {
    expect(commentCount(mockData)).toBe(2);
  });
});
