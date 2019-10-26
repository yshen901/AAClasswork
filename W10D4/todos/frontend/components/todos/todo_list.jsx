import React from 'react';
import TodoListItem from './todo_list_item';
import TodoListForm from './todo_list_form';
import { receiveTodo } from '../../actions/todo_actions';

class TodoList extends React.Component {
  constructor(props){
    super(props)
    // console.log(this.props);
  }
  
  render(){
    return(
      <div className="todo-list">
        <ul>
          {this.props.todos.map((todo, idx)=>{
            return (
              <li key={idx}>
                <TodoListItem todo = {todo}/>
              </li>
            ) 
          })}
        </ul>
  
        <TodoListForm receiveTodo={ this.props.receiveTodo }/>
      </div>
    )
  }
} 

export default TodoList;