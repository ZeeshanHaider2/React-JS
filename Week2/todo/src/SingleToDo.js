import React, { Component } from "react";
class SingleToDo extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <li>
        {this.props.todo}
        <button onClick={this.props.delete} className="btn btn-danger btn-sm">
          X
        </button>
      </li>
    );
  }
}

export default SingleToDo;
