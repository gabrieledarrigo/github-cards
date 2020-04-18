import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <Router>
    <Route
      path="/:username?"
      component={(props) => <App {...props} />}
    />
  </Router>,
  window.document.getElementById('root'),
);
