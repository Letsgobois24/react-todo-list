import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

document.title = "To Do List";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);