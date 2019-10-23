export const todoList = {
  handleAddTodo: (e) => {
    e.preventDefault();
    let list = document.getElementsByClassName("todos")[0];
    let input = document.getElementsByName("add-todo")[0];
    if (e.target.type === "submit") {
      let newTodo = document.createElement("li");
      newTodo.textContent = input.value;
      
      list.appendChild(newTodo);
      input.value = "";
    }
  },


};

