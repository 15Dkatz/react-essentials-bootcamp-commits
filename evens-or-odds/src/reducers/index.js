import {
  SET_GAME_STARTED,
  SET_INSTRUCTIONS_EXPANDED,
  DECK
} from '../actions/types';
import fetchStates from './fetchStates';

const DEFAULT_SETTINGS = {
  gameStarted: false,
  instructionsExpanded: false
};

const rootReducer = (state = DEFAULT_SETTINGS, action) => {
  console.log('state', state, 'action', action);

  switch(action.type) {
    case SET_GAME_STARTED:
      return {
        ...state,
        gameStarted: action.gameStarted
      };
    case SET_INSTRUCTIONS_EXPANDED:
      return {
        ...state,
        instructionsExpanded: action.instructionsExpanded
      };
    case DECK.FETCH_SUCCESS:
      const { remaining, deck_id } = action;

      return { ...state, remaining, deck_id, fetchState: fetchStates.success };
    case DECK.FETCH_ERROR:
      return { ...state, message: action.message, fetchState: fetchStates.error };
    default:
      return state;
  }
};

export default rootReducer;
