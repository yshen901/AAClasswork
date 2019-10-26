import React from 'react';

class todoListItem extends React.Component{
  handleDelete(e){
    this.props.removeTodo(this.props.todo);
    // this.setState({}) //don't need setState for some reason??
  }

  render (){
    return (
      <div className="todo-item">
        <div className="todo-item-info">
          <div className="todo-header"> Title: {this.props.todo.title} </div>
          <div className="todo-body"> Body: {this.props.todo.body} </div>
          <div className="todo-status"> Status: {this.props.todo.done ? "Done" : "Not Done"} </div>
        </div>
        <button onClick= {e=>{ this.handleDelete(e)}}>Delete Todo</button>
      </div>
    );
    }
}

export default todoListItem