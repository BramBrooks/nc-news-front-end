import React, { Component } from "react";
import * as api from "../../api";
// import Header from "../header";
// import TopicNavbar from "../topics/topicnavbar";
import CommentList from "../comments/commentlist";
import VotingButton from "../votingbutton";

import FormatDatesForFrontEnd from '../../utils'


class SingleArticle extends Component {
  state = {
    article: {},
    isLoading: true,
  };

  componentDidMount() {
    const { id } = this.props;

    api.getArticleByArticleID(id).then((singleArticleResponse) => {
      this.setState({ article: singleArticleResponse, isLoading: false });
    });
  }

  render() {
    const { isLoading } = this.state;
    if (isLoading) {
      return <p></p>;
      // loading
    }

    const {
      title,
      body,
      votes,
      author,
      comment_count,
      article_id,
      created_at,
    } = this.state.article;

    const formattedDate = FormatDatesForFrontEnd(created_at);

    return (
      <>

        <div id="single_article">
          <p className="info_line" id="single_article_info_line">
            Posted by {author} · {formattedDate} · {comment_count} comments
          </p>

          <p id="single_article_card_titles" >
            {title}
          </p>

          <p id="single_article_body">{body}</p>

          <div id="article_button">
            <VotingButton votes={votes} id={article_id} from={"articles"} />
          </div>


        </div>
        <CommentList id={this.props.id} username={this.props.username} />

      </>
    );
  }
}

export default SingleArticle;
