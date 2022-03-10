import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// COMPONENTS
import Navbar from './components/Navbar'
import Main from './components/Main'
// END COMPONENTS



ReactDOM.render(
  <>
    <Navbar />
    <Main />
  </>,
  document.getElementById('root')
);

