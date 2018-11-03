import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div className="Form">
        <form onSubmit={this.props.handleSubmit}>
          <input
            //handleChange={this.props.handleChange}
            value={this.props.inputValue}
            onChange={this.props.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default Form;
