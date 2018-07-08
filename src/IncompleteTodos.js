import React, { Component } from "react";

class IncompleteTodos extends Component {
  render() {
    return (
      <ul>
        {this.props.allTodos.map((todo, index) => {
          return (
            <div key={index}>
              {todo.status === "incomplete" && <li key={index}>{todo.text}</li>}
            </div>
          );
        })}
      </ul>
    );
  }
}
export default IncompleteTodos;
