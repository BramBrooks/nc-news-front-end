import React from "react";
import { Link } from "@reach/router";
import VotingButton from "../votingbutton";

import FormatDatesForFrontEnd from '../../utils'

function Articlecard(props) {
  const {
    article_id,
    title,
    topic,
    author,
    comment_count,
    created_at,
    votes,
  } = props.article;



  const formattedDate = FormatDatesForFrontEnd(created_at);


  return (
    <div id="article-card">
      <Link to={`/articles/${article_id}`}>
        <ul id="article-card-hover">
          <div className="info_line">
            <p>
              Posted by {author} · {formattedDate} · {comment_count} commments
            </p>
          </div>

          <div className="card-titles">{title}</div>
        </ul>

        {/* <p className="comment-count-position">Comments: {comment_count}</p> */}
        <VotingButton votes={votes} id={article_id} from={"articles"} />
      </Link>
    </div>
  );
}

export default Articlecard;
