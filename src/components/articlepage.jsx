// import Header from "./header";
import Articleslist from "./articles/articleslist";
// import TopicList from "./topics/topicnavbar";
// import TopicNavBar from './topics/topicnavbar'
import React from "react";

function Articlepage(props) {
  return (
    <>

     {
        <div className='topics_postiion '>


          <Articleslist topic={props.topic} username={props.username} />
        </div>}
    </>
  );
}

export default Articlepage;
