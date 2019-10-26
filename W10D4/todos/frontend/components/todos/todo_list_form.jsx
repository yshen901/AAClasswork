import React from "react";
import { uniqueId } from "../../util/todos_utils"

class TodoListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uniqueId(),
      title: "",
      body: "",
      done: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    //adds the Todo to store, then resets the form
    this.props.receiveTodo(this.state);
    this.setState( {
      id: uniqueId(),
      title: "",
      body: ""
    });
  }

  updateTitle(e) {
    this.setState({ title: e.target.value });
  }

  //implicitly passes the event into this callback...since it is onChange
  updateBody(e) {
    this.setState({ body: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Title: 
          <input type="text" value={this.state.title} onChange={this.updateTitle}/>
        </label>

        <br/>
        <label>Body:
          <input type="text" value={this.state.body} onChange={this.updateBody}/>
        </label>

        <input type="submit" value="Create Todo!"/>
      </form>
    )
  }
}

export default TodoListForm;