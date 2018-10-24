import React from "react";

export class Title extends React.Component {
  render() {
    return <h1 className="heading"> {this.props.name}</h1>;
  }
}
