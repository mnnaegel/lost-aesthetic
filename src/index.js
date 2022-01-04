import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

// temporary reducer to test store middleware
const countReducer = function (state = 5, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

// create store
let store = createStore(countReducer);

// 
const mapStateToProps = state => {
  return {
    count: state
  };
};

// link store to main app by storing in a smart container
const Container = connect(mapStateToProps)(App)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Container />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
