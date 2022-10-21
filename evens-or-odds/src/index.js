import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import App from './components/App';
import './index.css';

const DEFAULT_SETTINGS = {
  gameStarted: false,
  instructionsExpanded: false
};

const rootReducer = () => {
  return DEFAULT_SETTINGS;
};

const store = configureStore({
  reducer: rootReducer
});
console.log('store', store);
console.log('store.getState()', store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
