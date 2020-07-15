import React, { Component } from "react";
import ArticlePage from "./components/articlepage";
import { Router } from "@reach/router";
import SingleArticle from "./components/articles/singleArticle";
import Header from "./components/header";
import "./App.css";
import TopicNavBar from "./components/topics/topicnavbar";

class App extends Component {
  state = {
    user: {
      username: "happyamy2016",
      avatar_url:
        "https://vignette1.wikia.nocookie.net/mrmen/images/7/7f/Mr_Happy.jpg/revision/latest?cb=20140102171729",
      name: "Amy Happy",
    },
  };

  render() {
    return (
      <>

        <Header />
        <div className="topic-and-articles-header-grid">
          <div id="topics-title">
            {/* <h2>Topic</h2> */}

          </div>

          <h2 id='article_title'>Articles</h2>
        </div>



        <div className='nav-bar-and-article-card-grid' id='navbar'><TopicNavBar /></div>



        <Router>
          <ArticlePage username={this.state.user.username} path="/" />
          <ArticlePage username={this.state.user.username} path="/articles" />
          <ArticlePage
            username={this.state.user.username}
            path="/topics/:topic"
          />
          <SingleArticle
            path="/articles/:id"
            username={this.state.user.username}
          />
        </Router>
      </>
    );
  }
}

export default App;
