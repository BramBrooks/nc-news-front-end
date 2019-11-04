import React, { Component } from "react";
import DeleteButton from "./deletebutton";
import VotingButton from "../votingbutton";

class CommentCard extends Component {
  render() {
    const { author, created_at, votes, body, comment_id } = this.props.comment;
    return (
      <>
        <p>author: {author}</p>
        <p>posted: {created_at}</p>

        <p>{body}</p>

        {author === this.props.username ? (
          <DeleteButton
            comment_id={comment_id}
            removeDeletedCommentFromState={
              this.props.removeDeletedCommentFromState
            }
          />
        ) : null}
        <VotingButton votes={votes} id={comment_id} from={"comments"} />

        <br />
        <br />
      </>
    );
  }
}

export default CommentCard;
