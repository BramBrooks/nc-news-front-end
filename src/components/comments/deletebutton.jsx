import React from "react";
import * as api from "../../api";

function DeleteButton(props) {
  // erm...
  // make delete handler
  // make it a class so can get this.stuff on the go...

  return (
    <>
      <button onClick={api.deleteCommentByCommentID(props.comment_id)}>
        Delete Comment
      </button>
    </>
  );
}

export default DeleteButton;

// create an onclick to invoke delete comment by comment It

// need to re-render the comment list following deletion
