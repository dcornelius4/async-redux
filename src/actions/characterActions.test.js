import { fetchCharacters, FETCH_CHARACTERS_LOADING, FETCH_CHARACTERS } from './characterActions';

jest.mock('../services/lastAirbenderApi.js', () => ({
  getCharacters: () => Promise.resolve([])
}));

describe('characters actions', () => {
  it('dispatches a loading and fetch characters action', () => {
    const thunk = fetchCharacters();
    const dispatch = jest.fn();

    return thunk(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: FETCH_CHARACTERS_LOADING
        });

        expect(dispatch).toHaveBeenCalledWith({
          type: FETCH_CHARACTERS,
          payload: []
        });
      });
  });
});
