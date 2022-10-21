import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import App from './components/App';
import './index.css';

const rootReducer = () => {
  return { foo: 'bar' };
};

const store = configureStore();
console.log('store', store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
