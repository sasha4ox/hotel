import React from 'react';
import ReactDOM from 'react-dom';
import '../src/main.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './Auth';

ReactDOM.render(
  <AuthProvider>
    <Router>
      <App />
    </Router>
  </AuthProvider>,

  document.getElementById('root')
);
