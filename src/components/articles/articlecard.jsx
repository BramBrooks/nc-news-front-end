import React from "react";
import { Link } from "@reach/router";

import VotingButton from "../votingbutton";

function Articlecard(props) {
  const {
    article_id,
    title,
    topic,
    author,
    comment_count,
    created_at,
    votes
  } = props.article;
  return (
    <div id="article-card">
      <Link to={`/articles/${article_id}`}>
        <p>{title}</p>
        <p>Author: {author}</p>
        <p>Topic: {topic} </p>

        <p>Comments: {comment_count}</p>
        <p>Posted: {created_at}</p>

        <VotingButton votes={votes} id={article_id} from={"articles"} />
      </Link>
    </div>
  );
}

export default Articlecard;
