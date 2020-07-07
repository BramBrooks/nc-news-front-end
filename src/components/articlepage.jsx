import Header from "./header";
import Articleslist from "./articles/articleslist";
import TopicList from "./topics/topicnavbar";

import React from "react";

function Articlepage(props) {
  return (
    <>
      <Header />

      <div className="topic-and-articles-header-grid">
        <div id="topics-title">
          <h2>Topics</h2>
        </div>

        <h2>Articles</h2>
      </div>

      <div className="nav-bar-and-article-card-grid">
        <TopicList />
        <Articleslist topic={props.topic} username={props.username} />
      </div>
    </>
  );
}

export default Articlepage;
