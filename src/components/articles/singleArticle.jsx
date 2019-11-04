import React, { Component } from "react";
import * as api from "../../api";
import Header from "../header";
import TopicNavbar from "../topics/topicnavbar";
import CommentList from "../comments/commentlist";
import VotingButton from "../votingbutton";

class SingleArticle extends Component {
  state = {
    article: {},
    isLoading: true
  };

  componentDidMount() {
    const { id } = this.props;

    api.getArticleByArticleID(id).then(singleArticleResponse => {
      this.setState({ article: singleArticleResponse, isLoading: false });
    });
  }

  render() {
    const { isLoading } = this.state;
    if (isLoading) {
      return <p>Loading....</p>;
    }

    const { title, body, votes, author, comment_count } = this.state.article;
    return (
      <>
        <Header />
        <TopicNavbar />
        <h2>{title}</h2>

        <p>{body}</p>
        <p>Author: {author}</p>

        <p>Comments: {comment_count}</p>

        <VotingButton votes={votes} />
        <br />
        <br />

        <br />
        <br />
        <CommentList id={this.props.id} username={this.props.username} />
      </>
    );
  }
}

export default SingleArticle;
