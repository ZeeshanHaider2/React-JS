import React, { Component } from "react";
import Task from "./Task";
class List extends Component {
  render() {
    return (
      <div className="List">
        {this.props.todos.map((todo, index) => {
          return (
            <Task
              key={index}
              index={index}
              todo={todo}
              handleClick={this.props.handleClick}
            />
          ); //without key V.DOM wold not know which part to look for
        })}
      </div>
    );
  }
}

export default List;
