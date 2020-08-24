import React, { Component } from "react";
import * as api from "../../api";

class CommentBox extends Component {
  state = { commentToAdd: "" };

  handleChange = (event) => {
    this.setState({ commentToAdd: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const comment = {
      body: this.state.commentToAdd,
      username: this.props.username,
    };
    api.postCommentByArticleID(this.props.id, comment).then((postedComment) => {
      this.props.addNewCommentToState(postedComment);
    });
    this.setState({ commentToAdd: "" });
  };

  render() {
    return (
      <>
        <div id="comment_input_box">
          <form onSubmit={this.handleSubmit}>
            {/* <div id="comment_input_box_text">

          </div> */}

            <input
              className="commentBox"
              onChange={this.handleChange}
              type="text"
              placeholder="Please add a comment..."
              value={this.state.commentToAdd}
              name="item-input"
              maxLength="200"
              autoComplete="off"
              size="50"
            ></input>
            <input type="submit"></input>
          </form>
        </div>
      </>
    );
  }
}
export default CommentBox;
