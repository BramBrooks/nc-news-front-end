import Header from "./header";
import Articleslist from "./articles/articleslist";
// import TopicList from "./topics/topicnavbar";
import TopicNavBar from './topics/topicnavbar'
import React from "react";

function Articlepage(props) {
  return (
    <>
      {/* <Header /> */}




      <div className="nav-bar-and-article-card-grid">
        <TopicNavBar />

        <Articleslist topic={props.topic} username={props.username} />
      </div>
    </>
  );
}

export default Articlepage;
