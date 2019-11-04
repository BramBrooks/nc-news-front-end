import React, { Component } from "react";

import { Link } from "@reach/router";

import VotingButton from "../votingbutton";

class ArticleCard extends Component {
  render() {
    const {
      article_id,
      title,
      topic,
      author,
      comment_count,
      created_at,
      votes
    } = this.props.article;

    return (
      <>
        <Link to={`/articles/${article_id}`}>
          <p>Title: {title}</p>
          <p>Topic: {topic} </p>
          <p>Author: {author}</p>
          <p>Comment Count: {comment_count}</p>
          <p>Created At: {created_at}</p>

          <VotingButton votes={votes} />

          <br />
        </Link>
      </>
    );
  }
}

export default ArticleCard;
