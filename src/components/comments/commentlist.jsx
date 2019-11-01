import React, { Component } from "react";
import CommentCard from "./commentcard";
import * as api from "../../api";
import CommentBox from "./commentbox";

class CommentList extends Component {
  state = {
    comments: [],
    isLoading: true
  };

  fetchContent = () => {
    api.getCommentsByArticeID(this.props.id).then(commentData => {
      this.setState({ comments: commentData, isLoading: false });
    });
  };

  addNewCommentToState = postedCommment => {
    const updatedStateComments = [postedCommment, ...this.state.comments];

    this.setState({ comments: updatedStateComments });
  };

  removeDeletedCommentFromState = deletedCommentID => {
    const copyOfCommentsArray = [...this.state.comments];

    const result = copyOfCommentsArray.filter(comment => {
      return comment.comment_id !== deletedCommentID;
    });

    this.setState({ comments: result });
  };

  componentDidMount() {
    this.fetchContent();
  }

  render() {
    const { isLoading, comments } = this.state;
    if (isLoading) {
      return <p>Loading....</p>;
    }

    return (
      <>
        <CommentBox
          id={this.props.id}
          addNewCommentToState={this.addNewCommentToState}
          username={this.props.username}
        />
        <h2>Comments!</h2>

        <ul>
          {comments.map(comment => {
            return (
              <li key={comment.comment_id}>
                <CommentCard
                  comment={comment}
                  username={this.props.username}
                  removeDeletedCommentFromState={
                    this.removeDeletedCommentFromState
                  }
                />
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default CommentList;
