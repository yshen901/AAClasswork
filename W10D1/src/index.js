import warmUp from "./warmup";
import clock from "./clock"; //must do this to import a js source file into html
import { dropDown } from "./drop_down";
import { todoList } from "./todo_list";

// must have curlies if you don't use export default and want to write code in index.js
// dropDown.attachDogLinks(dropDown.dogs);

let navTag = document.getElementsByClassName("drop-down-dog-nav")[0];
navTag.addEventListener("mouseenter", dropDown.handleEnter);
navTag.addEventListener("mouseleave", dropDown.handleLeave);

// let list = document.getElementsByClassName("todos")[0];
// list.addEventListener("click", todoList.handleCheckboxClick);

let addTodoButton = document.getElementsByClassName("add-todo-form")[0];
addTodoButton.addEventListener("click", todoList.handleAddTodo);
