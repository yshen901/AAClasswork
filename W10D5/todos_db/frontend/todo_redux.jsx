import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/store.js";
import Root from "./components/root.jsx";
import {allTodos} from './reducers/selectors.js'
import {fetchTodos} from './util/todo_api_util.js'

import { receiveTodo, receiveTodos, removeTodo } from "./actions/todo_actions.js";


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();

  setWindow(store);

  ReactDOM.render(<Root store={store} />, root);
})

const setWindow = (store) => {
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.removeTodo = removeTodo;
  window.receiveTodos = receiveTodos;
  window.allTodos = allTodos;
  window.fetchTodos = fetchTodos;
};