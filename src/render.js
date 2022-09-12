import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addTestimonial} from './redux/state';

export let rerenderEntireTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App state = { state } addTestimonial = { addTestimonial }/>
    </React.StrictMode>
  );
}
