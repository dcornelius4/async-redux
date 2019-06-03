import { fetchCharacters, FETCH_CHARACTERS_LOADING, FETCH_CHARACTERS, FETCH_CHARACTERS_ERROR } from './characterActions';

jest.mock('../services/lastAirbenderApi.js', () => ({
  getCharacters: () => Promise.resolve([])
}));

describe('characters actions', () => {
  it('dispatches a loading and fetch characters action', () => {
    expect(fetchCharacters()).toEqual({
      type: FETCH_CHARACTERS,
      pendingType: FETCH_CHARACTERS_LOADING,
      rejectedType: FETCH_CHARACTERS_ERROR,
      payload: expect.any(Promise)
    });
  });
});
