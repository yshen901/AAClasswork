import { RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO } from "../actions/todo_actions.js";
import { allTodos, todoArr } from "./selectors"

const initialState = { 
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};


const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  
  let nextState = {};
  switch (action.type) {
    case RECEIVE_TODOS: 
      for (let i = 0; i < action.todos.length; i++)
        nextState[action.todos[i].id] = action.todos[i];
      return nextState;
    case RECEIVE_TODO:
      nextState = Object.assign({}, state); //same thing as merge({}, state)
      nextState[action.todo.id] = action.todo;
      return nextState;
    case REMOVE_TODO:
      console.log(state);
      let todos = todoArr(state);
      for (let i = 0; i < todos.length; i++)
        if (todos[i].id !== action.todo.id) nextState[todos[i].id] = todos[i];
      return nextState;
    default:
      return state;
  }
};

export default todosReducer;