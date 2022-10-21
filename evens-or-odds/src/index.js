import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import App from './components/App';
import './index.css';

const store = configureStore({
  reducer: rootReducer
});
store.subscribe(() => {
  console.log('store.getState()', store.getState());
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
