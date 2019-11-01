import React, { Component } from "react";
import * as api from "../../api";

class DeleteButton extends Component {
  handleDelete = event => {
    api
      .deleteCommentByCommentID(this.props.comment_id)
      .then(this.props.removeDeletedCommentFromState(this.props.comment_id));
    // set state again? need to re-render on comment list
  };

  render() {
    return (
      <>
        <button onClick={this.handleDelete}>Delete Comment</button>
      </>
    );
  }
}

export default DeleteButton;

// create an onClick to invoke delete comment by comment ID
// need to re-render the comment list following deletion
