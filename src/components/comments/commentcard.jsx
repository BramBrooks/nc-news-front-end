import React from "react";
import DeleteButton from "./deletebutton";
import VotingButton from "../votingbutton";

function CommentCard(props) {
  const { author, created_at, votes, body, comment_id } = props.comment;
  return (
    <>
      <div id="commment_card">
        <div className="info_line" id="commment-card_info_line">
          {" "}
          <p>
            {author === props.username ? (
              <DeleteButton
                comment_id={comment_id}
                removeDeletedCommentFromState={
                  props.removeDeletedCommentFromState
                }
              />
            ) : null}{" "}
            Posted by {author} · {created_at}{" "}
          </p>
        </div>
        <div id="comment_card_text">
          <p>{body}</p>
        </div>
        {/* {author === props.username ? (
          <DeleteButton
            comment_id={comment_id}
            removeDeletedCommentFromState={props.removeDeletedCommentFromState}
          />
        ) : null} */}
        <div id="comment_card_voting_button">
          <VotingButton votes={votes} id={comment_id} from={"comments"} />
        </div>
      </div>
    </>
  );
}

export default CommentCard;
