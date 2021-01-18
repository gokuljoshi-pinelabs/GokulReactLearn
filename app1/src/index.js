import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import AppRoute from './appRoute';
import AuthExample from './authRoute';

import CustomLinkExample from './customLink';

import NoMatchExample from './noMatchExample';


ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <AppRoute/> */}
    {/* <AuthExample></AuthExample> */}
    {/* <CustomLinkExample></CustomLinkExample> */}
    <NoMatchExample></NoMatchExample>
  </React.StrictMode>,
  document.getElementById('root')
);
