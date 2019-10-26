export const allTodos = (state) => {
  const arr = Object.keys(state.todos); //[1,2]
  return arr.map( id => state.todos[id] );
};

//to deal with a state where the ids are unpacked
export const todoArr = (state) => {
  const arr = Object.keys(state); //[1,2]
  return arr.map(id => state[id]);
}