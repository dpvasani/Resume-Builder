import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { Store } from "./Store";

//React-redux (Provider) & redux-store have been added to centralize  all the states and passing data using connect function.

// React Redux connect() API is used for creating container elements that are connected to the Redux store.


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={Store}>
    <App />
  </Provider>
  </React.StrictMode>
);

