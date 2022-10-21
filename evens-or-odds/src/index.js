import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import App from './components/App';
import './index.css';

const DEFAULT_SETTINGS = {
  gameStarted: false,
  instructionsExpanded: false
};

const SET_GAME_STARTED = 'SET_GAME_STARTED';
const SET_INSTRUCTIONS_EXPANDED = 'SET_INSTRUCTIONS_EXPANDED';

const rootReducer = (state = DEFAULT_SETTINGS, action) => {
  console.log('state', state, 'action', action);

  if (action.type === SET_GAME_STARTED) {
    return {
      gameStarted: action.gameStarted,
      instructionsExpanded: false
    }
  }

  return state;
};

const store = configureStore({
  reducer: rootReducer
});
console.log('store', store);
store.subscribe(() => {
  console.log('store.getState()', store.getState());
});

const startGame = () => {
  return {
    type: SET_GAME_STARTED,
    gameStarted: true
  };
}

const cancelGame = () => {
  return {
    type: SET_GAME_STARTED,
    gameStarted: false
  };
}

const expandInstructions = () => {
  return {
    type: SET_INSTRUCTIONS_EXPANDED,
    instructionsExpanded: true
  };
}

const collapseInstructions = () => {
  return {
    type: SET_INSTRUCTIONS_EXPANDED,
    instructionsExpanded: false
  };
}

store.dispatch(startGame());
store.dispatch(cancelGame());
store.dispatch(expandInstructions());
store.dispatch(collapseInstructions());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
