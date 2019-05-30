export const getCharacterState = state => state.characters;
export const getCharacters = state => getCharacterState(state).list;
export const getCharactersLoading = state => getCharacterState(state).loading;
export const getCharactersError = state => getCharacterState(state).error;
