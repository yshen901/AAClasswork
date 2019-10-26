import React from 'react';

const todoListItem = ({todo}) => {
  return (
    <div className="todo-item">
      <div className="todo-header"> Title: {todo.title} </div>
      <div className="todo-body"> Body: {todo.body} </div>
      <div className="todo-status"> Status: {todo.done ? "Done" : "Not Done"} </div>
    </div>
  );
}

export default todoListItem