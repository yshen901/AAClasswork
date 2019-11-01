import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root'

//only for testing purposes
import { signup, login, logout } from "./actions/session_actions";

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  windowFuncs(store);

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
});

const windowFuncs = (store) => {
  window.login = login;
  window.logout = logout;
  window.signup = signup;

  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
}