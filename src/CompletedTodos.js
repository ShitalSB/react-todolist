import React, { Component } from "react";

class CompletedTodos extends Component {
  render() {
    return (
      <ul>
        {this.props.allTodos.map((todo,index) => {
          return (
              <div key={index}>
                 { todo.status === 'complete' &&( <li key={index}>{todo.text} - {todo.date}</li>) }
                 </div>
            )
        })}
      </ul>
    );
  }
}
export default CompletedTodos;
