import React, { Component } from "react";
import "../App.css";

import Form from "./Form";
import List from "./List";

class App extends Component {
  state = {
    inputValue: "",
    todos: [
      { id: 1, value: "Get out of bed", done: true },
      { id: 2, value: "Brush teeth", done: false },
      { id: 3, value: "Eat breakfast", done: false }
    ]
  };

  handleChange = evt => {
    console.log(evt.target.value);
    this.setState({ inputValue: evt.target.value });
  };

  handleClick = index => {
    console.log("button clicked", index);
    const todos = this.state.todos;
    todos[index].done = !todos[index].done;
    this.setState({ todos });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const newTodo = {
      value: this.state.inputValue,
      done: false
    };
    const todos = this.state.todos;
    todos.push(newTodo);
    this.setState({ todos: todos, inputValue: "" });
  };
  render() {
    return (
      <div className="App">
        <Form
          handleChange={this.handleChange}
          inputValue={this.state.inputValue}
          handleSubmit={this.handleSubmit}
        />
        <List todos={this.state.todos} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
