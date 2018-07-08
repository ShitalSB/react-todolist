import React, { Component } from "react";
import "./App.css";
import Todos from "./Todos";
import DeletedTodos from "./DeletedTodos";
import CompletedTodos from "./CompletedTodos";
import IncompleteTodos from "./IncompleteTodos";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import AllTodos from "./AllTodos";
class App extends Component {
  state = {
    allTodos: [],
    text: "",
    delete: [],
    error: ""
  };
  writeTodo = value => {
    this.setState({
      text: value
    });
  };
  addTodo = e => {
    e.preventDefault();
    if (this.state.text !== "") {
      const newTodos = {
        text: this.state.text,
        status: "incomplete"
      };

      this.setState(state => ({
        allTodos: [...state.allTodos, newTodos],
        text: "",
        error: ""
      }));
    } else {
      this.setState({
        error: "Please enter todo"
      });
    }
  };
  deletedTodo = (todo, index) => {
    const newTodos = this.state.allTodos;
    newTodos.splice(index, 1);
    this.setState(state => ({
      allTodos: newTodos,
      delete: [...state.delete, todo]
    }));
  };
  date = () => {
    const date = new Date();
    return (
      date.getDate() +
      "-" +
      date.getMonth() +
      "-" +
      date.getFullYear() +
      "," +
      date.toTimeString()
    );
  };
  completedTodos = (todo, index) => {
    const newTodos = this.state.allTodos;
    newTodos[index].status = "complete";
    newTodos[index].date = this.date();
    this.setState({
      allTodos: newTodos
    });
  };
  render() {
    return (
      <div className="App">
        <Todos
          writeTodos={this.writeTodo}
          text={this.state.text}
          addTodo={this.addTodo}
          error={this.state.error}
        />
        <Route
          exact
          path="/"
          render={() => {
            return (
              <AllTodos
                allTodos={this.state.allTodos}
                deleteTodo={this.deletedTodo}
                completeTodos={this.completedTodos}
              />
            );
          }}
        />
        <Route
          exact
          path="/Complete"
          render={() => {
            return <CompletedTodos allTodos={this.state.allTodos} />;
          }}
        />
        <Route
          exact
          path="/Incomplete"
          render={() => {
            return <IncompleteTodos allTodos={this.state.allTodos} />;
          }}
        /> <Route
          path="/Delete"
          render={() => {
            return <DeletedTodos deleteTodo={this.state.delete} />;
          }}
        />
        <Link to="/">AllTodos</Link>
        <Link to="/Delete">Deleted</Link>
        <Link to="/Complete">Completed</Link>
        <Link to="/Incomplete">Incompleted</Link>
      </div>
    );
  }
}

export default App;
