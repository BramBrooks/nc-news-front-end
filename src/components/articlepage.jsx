import Header from "./header";
import Articleslist from "./articles/articleslist";
import TopicList from "./topics/topicnavbar";

import React, { Component } from "react";

class ArticlePage extends Component {
  render() {
    return (
      <>
        <Header />
        <TopicList />
        <Articleslist topic={this.props.topic} username={this.props.username} />
      </>
    );
  }
}

export default ArticlePage;
