import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SingleToDo from "./SingleToDo";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      currentTodo: ""
    };
  }
  onInputChange = e => {
    this.setState({ currentTodo: e.target.value });
  };

  onClick = () => {
    let copyOfTodos = this.state.todos.slice();
    copyOfTodos.push(this.state.currentTodo);
    this.setState({ todos: copyOfTodos, currentTodo: "" });
  };

  deleteToDo = i => {
    let todosCopy = this.state.todos.slice();
    todosCopy.splice(i, 1);
    this.setState({ todos: todosCopy });
  };
  render() {
    let listOfTodos = this.state.todos.map((eve, index) => {
      return <SingleToDo todo={eve} delete={() => this.deleteToDo(index)} />;
    });
    return (
      <div>
        <input
          placeholder="Enter todos"
          value={this.state.currentTodo}
          onChange={this.onInputChange} //to trigger function by passing an event
        />
        <button onClick={this.onClick} className="btn btn-secondary">
          Add
        </button>
        <br />
        {this.state.todos.length == 0 ? (
          "No todos, kindly enter some"
        ) : (
          <ul>{listOfTodos}</ul>
        )}
      </div>
    );
  }
}

export default App;
