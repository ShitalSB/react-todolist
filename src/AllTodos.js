import React, { Component } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
class AllTodos extends Component {
  render() {
    return (
      <ul>
        {this.props.allTodos.map((todo, index) => {
          return (
            <div key={index}>
              {todo.status === "incomplete" && (
                <li>
                  <Checkbox
                    onChange={() => {
                      setTimeout(() => {
                        this.props.completeTodos(todo, index);
                      }, 200);
                    }}
                    color="primary"
                  />
                  {todo.text}
                  <IconButton
                    onClick={() => {this.props.deleteTodo(todo, index);}}
                    aria-label="Delete"
                  >
                    <DeleteIcon />
                  </IconButton>
                </li>
              )}
              {todo.status === "complete" && <li>{todo.text}</li>}
            </div>
          );
        })}
      </ul>
    );
  }
}
export default AllTodos;
