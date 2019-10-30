import React from "react";
import Header from "./header";
import Articleslist from "./articles/articleslist";
import TopicList from "./topics/topicnavbar";

function ArticlePage(props) {
  return (
    <>
      <Header />
      <TopicList />
      <Articleslist topic={props.topic} />
    </>
  );
}

export default ArticlePage;
