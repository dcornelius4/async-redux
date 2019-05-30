import { getCharacter } from '../services/lastAirbenderApi';

export const FETCH_CHARACTER = 'FETCH_CHARACTER';
export const FETCH_CHARACTER_LOADING = 'FETCH_CHARACTER_LOADING';
export const fetchCharacter = id => ({
  type: FETCH_CHARACTER,
  pendingType: FETCH_CHARACTER_LOADING,
  payload: getCharacter(id)
});
