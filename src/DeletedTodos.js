import React, { Component } from "react";

class DeletedTodos extends Component {
  render() {
    return (
      <ul>
        {this.props.deleteTodo.map((todo,index) => {
          return(
          <li key={index}>{todo.text}</li>)
        })}
      </ul>
    );
  }
}
export default DeletedTodos;
