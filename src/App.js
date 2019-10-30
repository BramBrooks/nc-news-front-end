import React from "react";
import ArticlePage from "./components/articlepage";
import { Router } from "@reach/router";
import SingleArticle from "./components/articles/singleArticle";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <ArticlePage path="/" />
        <ArticlePage path="/articles" />
        <ArticlePage path="/topics/:topic" />
        <SingleArticle path="/articles/:id" />
      </Router>
    </>
  );
}

export default App;
