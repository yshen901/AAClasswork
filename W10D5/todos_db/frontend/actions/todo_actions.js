

//separate strings into constants to avoid silent fails from misspelling
export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const receiveTodo = todo => ({
  type: RECEIVE_TODO,
  todo: todo
});


export const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos: todos
});

export const removeTodo = (todo) => ({
  type: REMOVE_TODO,
  todo: todo
})
