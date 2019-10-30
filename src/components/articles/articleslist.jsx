import React, { Component } from "react";
import ArticleCard from "./articlecard";
import * as api from "../../api";

import { Router } from "@reach/router";
import SingleArticle from "./singleArticle";

class Articleslist extends Component {
  state = {
    articles: [],
    isLoading: true
  };

  fetchContent = () => {
    // console.log(this.props.topic);
    api.getArticles(this.props.topic).then(articlesData => {
      this.setState({ articles: articlesData, isLoading: false });
    });
  };

  componentDidMount() {
    this.fetchContent();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.topic !== prevProps.topic) {
      this.fetchContent(this.props.topic);
    }
  }

  render() {
    const { isLoading } = this.state;
    if (isLoading) {
      return <p>Loading....</p>;
    }

    return (
      <>
        <h2>Articles</h2>

        <ul>
          <Router>
            <SingleArticle path="/:id" />
          </Router>
          {this.state.articles.map(article => {
            return (
              <li key={article.article_id}>
                <ArticleCard article={article} />
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default Articleslist;
