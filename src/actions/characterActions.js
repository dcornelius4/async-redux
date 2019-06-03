import { getCharacters } from '../services/lastAirbenderApi';

export const FETCH_CHARACTERS_LOADING = 'FETCH_CHARACTERS_LOADING';
export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const FETCH_CHARACTERS_ERROR = 'FETCH_CHARACTERS_ERROR';
export const fetchCharacters = () => ({
  type: FETCH_CHARACTERS,
  pendingType: FETCH_CHARACTERS_LOADING,
  rejectedType: FETCH_CHARACTERS_ERROR,
  payload: getCharacters()
});
