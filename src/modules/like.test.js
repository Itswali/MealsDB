import { itemLike, likeCount } from './like.js';

describe('itemLike', () => {
  it('should make a POST request to the correct endpoint with the correct body', async () => {
    // mock the fetch function
    global.fetch = jest.fn().mockResolvedValue({});

    // call the itemLike function
    await itemLike('http://example.com/api', 'abc123');

    // assert that the correct arguments were passed to fetch
    expect(fetch).toHaveBeenCalledWith('http://example.com/api/likes/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        item_id: 'abc123',
      }),
    });
  });
});

describe('likeCount', () => {
  it('should make a GET request to the correct endpoint and update the like counts of the correct items', async () => {
    // mock the fetch function
    global.fetch = jest.fn().mockResolvedValue({
      json: () => [{ item_id: 'abc123', likes: 5 }, { item_id: 'def456', likes: 10 }],
    });

    // mock the DOM elements
    global.document = {
      querySelectorAll: jest.fn().mockReturnValue([
        { id: 'abc123' },
        { id: 'def456' },
      ]),
    };

    // call the likeCount function
    await likeCount('http://example.com/api');

    // assert that the correct arguments were passed to querySelectorAll
    expect(document.querySelectorAll).toHaveBeenCalledWith('.item');

    // assert that the correct like counts were set on the DOM elements
    expect(document.querySelector).toHaveBeenCalledWith('#abc123 .like-count');
    expect(document.querySelector).toHaveBeenCalledWith('#def456 .like-count');
    expect(document.querySelector.mock.calls[0][0].innerHTML).toBe('5');
    expect(document.querySelector.mock.calls[1][0].innerHTML).toBe('10');
  });
});
