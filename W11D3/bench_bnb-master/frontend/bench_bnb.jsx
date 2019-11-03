import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root'

//only for testing purposes
import { signup, login, logout } from "./actions/session_actions";
import { fetchBenches, addBench } from "./actions/bench_actions";

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser){
    const preloadedState = {
      entities: {
        users: {
          [window.currentUser.id]: window.currentUser
        }
      },
      session: {
        id: window.currentUser.id
      },
      errors: {
        session: []
      }
    };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  windowFuncs(store);

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
});

const windowFuncs = (store) => {
  window.login = login;
  window.logout = logout;
  window.signup = signup;

  window.fetchBenches = fetchBenches;
  window.addBench = addBench;

  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
}