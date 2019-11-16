import React from "react";
import DeleteButton from "./deletebutton";
import VotingButton from "../votingbutton";

function CommentCard(props) {
  const { author, created_at, votes, body, comment_id } = props.comment;
  return (
    <>
      <p>author: {author}</p>
      <p>posted: {created_at}</p>

      <p>{body}</p>

      {author === props.username ? (
        <DeleteButton
          comment_id={comment_id}
          removeDeletedCommentFromState={props.removeDeletedCommentFromState}
        />
      ) : null}
      <VotingButton votes={votes} id={comment_id} from={"comments"} />

      <p>
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *{" "}
      </p>
    </>
  );
}

export default CommentCard;
