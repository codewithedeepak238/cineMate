import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Route>
      <ScrollToTop />
      <App />
    </Route>
  </React.StrictMode>
);

