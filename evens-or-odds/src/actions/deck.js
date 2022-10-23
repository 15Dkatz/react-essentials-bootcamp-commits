import { FETCH_DECK_RESULT } from './types';

export const fetchDeckResult = deckJson => {
  const { remaining, deck_id } = deckJson;

  return { type: FETCH_DECK_RESULT, remaining, deck_id };
}