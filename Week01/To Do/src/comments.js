import React from "react";

export class Comment extends React.Component {
  render() {
    return (
      <div className="comment-box">
        <div className="sub-box">
          <p className="bold">To Do: {this.props.listItem.task}</p>
          <p className="boll">Description: {this.props.description}</p>
        </div>
        <p className="body">{this.props.body}</p>
      </div>
    );
  }
}

Comment.defaultProps = {
  body: "no body",
  listItem: { id: -1, task: "unknown" }
};
