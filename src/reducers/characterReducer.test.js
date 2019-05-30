import reducer from './characterReducer';
import { FETCH_CHARACTERS, FETCH_CHARACTERS_LOADING, FETCH_CHARACTERS_ERROR } from '../actions/characterActions';

describe('character reducer', () => {
  it('handles the fetch characters loading action', () => {
    const initialState = {
      loading: false,
      list: [],
      error: null
    };
    const newState = reducer(initialState, {
      type: FETCH_CHARACTERS_LOADING
    });
    expect(newState).toEqual({
      loading: true,
      list: [],
      error: null
    });
  });

  it('handles the fetch characters action', () => {
    const initialState = {
      loading: false,
      list: [],
      error: null
    };
    const newState = reducer(initialState, {
      type: FETCH_CHARACTERS,
      payload: ['Aang']
    });
    expect(newState).toEqual({
      loading: false,
      list: ['Aang'],
      error: null
    });
  });

  it('handles the fetch characters error', () => {
    const initialState = {
      loading: false,
      list: [],
      error: null
    };
    const newState = reducer(initialState, {
      type: FETCH_CHARACTERS_ERROR,
      payload: 'this is an error'
    });
    expect(newState).toEqual({
      loading: false,
      list: [],
      error: 'this is an error'
    });
  });
});
