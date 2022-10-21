import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import App from './components/App';
import './index.css';

const DEFAULT_SETTINGS = {
  gameStarted: false,
  instructionsExpanded: false
};

const rootReducer = (state = DEFAULT_SETTINGS, action) => {
  console.log('state', state, 'action', action);

  if (action.type === 'SET_GAME_STARTED') {
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

const action1 = { type: 'SET_GAME_STARTED', gameStarted: true };
store.dispatch(action1);

store.dispatch({ type: 'foo' });
store.dispatch({ type: 'bar' });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
