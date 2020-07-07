import React, { Component } from "react";
import * as api from "../../api";

class DeleteButton extends Component {
  handleDelete = (event) => {
    api
      .deleteCommentByCommentID(this.props.comment_id)
      .then(this.props.removeDeletedCommentFromState(this.props.comment_id));
  };

  render() {
    return (
      <>
        <button className="delete_button" onClick={this.handleDelete}>
          Delete Comment
        </button>
      </>
    );
  }
}

export default DeleteButton;
