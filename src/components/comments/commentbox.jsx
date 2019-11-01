import React, { Component } from "react";
import * as api from "../../api";

class CommentBox extends Component {
  state = { commentToAdd: "" };

  handleChange = event => {
    this.setState({ commentToAdd: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.props.username, "<--- props");
    const comment = {
      body: this.state.commentToAdd,
      username: this.props.username
    };
    api.postCommentByArticleID(this.props.id, comment).then(postedComment => {
      this.props.addNewCommentToState(postedComment);
    });
    this.setState({ commentToAdd: "" });
  };

  render() {
    return (
      <>
        <h2>Comment box</h2>

        <form onSubmit={this.handleSubmit}>
          <label name="item-input">
            Please add a comment about this article:
          </label>

          <input
            className="commentBox"
            onChange={this.handleChange}
            type="text"
            value={this.state.commentToAdd}
            name="item-input"
            maxLength="200"
            autoComplete="off"
            size="50"
          ></input>
          <input type="submit"></input>
        </form>
      </>
    );
  }
}

export default CommentBox;
