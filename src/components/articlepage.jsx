import Header from "./header";
import Articleslist from "./articles/articleslist";
import TopicList from "./topics/topicnavbar";

import React from "react";

function Articlepage(props) {
  return (
    <div className="container-2">
      <Header />
      <p></p>
      <TopicList />
      <p>
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
        * * * * * * * * * *{" "}
      </p>
      <Articleslist topic={props.topic} username={props.username} />
    </div>
  );
}

export default Articlepage;
