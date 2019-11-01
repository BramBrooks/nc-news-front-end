import React, { Component } from "react";
import DeleteButton from "./deletebutton";

class CommentCard extends Component {
  render() {
    const { author, created_at, votes, body, comment_id } = this.props.comment;
    return (
      <>
        <p>author: {author}</p>
        <p>posted: {created_at}</p>
        <p>votes: {votes}</p>
        <p>{body}</p>
        {author === this.props.username ? (
          <DeleteButton
            comment_id={comment_id}
            removeDeletedCommentFromState={
              this.props.removeDeletedCommentFromState
            }
          />
        ) : null}

        <br />
        <br />
      </>
    );
  }
}

export default CommentCard;
