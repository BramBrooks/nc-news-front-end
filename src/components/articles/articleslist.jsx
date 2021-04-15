// import Sortbydropdown from "../sortbydropdown";
import React, { Component } from "react";
import ArticleCard from "./articlecard";
import * as api from "../../api";
import { Router } from "@reach/router";
import SingleArticle from "./singleArticle";

// Class Component
// Getting Article Data from API based on topic
// Tiggers re-rendering of app on receipt of data
// Re factor with SortBy Drop-Down

class Articleslist extends Component {
  state = {
    articles: [],
    isLoading: true,
    sort_by: "",
  };

  fetchContent = () => {
    api
      .getArticles(this.props.topic, this.state.sort_by)
      .then((articlesData) => {
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

  handleDropDownChange = (event) => {
    this.setState({ sort_by: event.target.value }, () => {});
  };

  render() {
    const { isLoading, articles } = this.state;

    if (isLoading) {
      return <p id="article_list_loading">Loading...</p>;
    }

    return (
      <>
        <div id="article_card_container">
          <ul>
            <Router>
              <SingleArticle path="/:id" />
            </Router>

            {articles.map((article) => {
              return (
                <div id="article_list">
                  <li key={article.article_id}>
                    <ArticleCard
                      article={article}
                      username={this.props.username}
                    />
                  </li>
                </div>
              );
            })}
          </ul>
          {/* {<Sortbydropdown handleDropDownChange={this.handleDropDownChange} />} */}
        </div>
      </>
    );
  }
}

export default Articleslist;
