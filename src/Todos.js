import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
class Todos extends Component {
  render() {
    return (
      <div>
        <p>{this.props.error}</p>
        <form onSubmit={this.props.addTodo}>
          <TextField
            id="with-placeholder"
            label="Write your todos here"
            margin="normal"
            value={this.props.text}
            onChange={event => this.props.writeTodos(event.target.value)}
          />
        </form>
      </div>
    );
  }
}
export default Todos;
