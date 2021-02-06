import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppRoute from './appRoute';
import AuthExample from './authRoute';

import CustomLinkExample from './customLink';

import NoMatchExample from './noMatchExample';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import reducers from './redux-store/reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const initialState = {}
const AllReducers = combineReducers({data:reducers});
const mystore = createStore(AllReducers,initialState,compose(applyMiddleware(thunk),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={mystore}>
    <App/> 
    {/* <AppRoute/> */}
    {/* <AuthExample></AuthExample> */}
    {/* <CustomLinkExample></CustomLinkExample> */}
    {/* <NoMatchExample></NoMatchExample> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
