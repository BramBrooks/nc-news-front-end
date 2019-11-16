import React, { Component } from "react";
import ArticleCard from "./articlecard";
import * as api from "../../api";

import { Router } from "@reach/router";
import SingleArticle from "./singleArticle";
import Sortbydropdown from "../sortbydropdown";

class Articleslist extends Component {
  state = {
    articles: [],
    isLoading: true,
    sort_by: ""
  };

  fetchContent = () => {
    api.getArticles(this.props.topic, this.state.sort_by).then(articlesData => {
      this.setState({ articles: articlesData, isLoading: false });
    });
  };

  componentDidMount() {
    this.fetchContent();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.topic !== prevProps.topic ||
      this.state.sort_by !== prevState.sort_by
    ) {
      this.fetchContent(this.props.topic, this.state.sort_by);
    }
  }

  handleDropDownChange = event => {
    this.setState({ sort_by: event.target.value }, () => {});
  };

  render() {
    const { isLoading, articles } = this.state;
    if (isLoading) {
      return <p>Loading....</p>;
    }

    return (
      <>
        <h2>Articles</h2>
        <Sortbydropdown handleDropDownChange={this.handleDropDownChange} />
        <ul>
          <Router>
            <SingleArticle path="/:id" />
          </Router>

          {articles.map(article => {
            return (
              <div id="liststyle">
                <li key={article.article_id}>
                  <ArticleCard
                    article={article}
                    username={this.props.username}
                  />
                </li>
                <p>
                  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
                  * * * * * * * * * * * * * * *{" "}
                </p>
              </div>
            );
          })}
        </ul>
      </>
    );
  }
}

export default Articleslist;
