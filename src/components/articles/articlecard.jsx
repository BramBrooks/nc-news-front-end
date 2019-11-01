import React from "react";
import { Link } from "@reach/router";

// import { Container } from './styles';

const ArticleCard = ({ article }) => {
  return (
    <>
      <Link to={`/articles/${article.article_id}`}>
        <p>Title: {article.title}</p>
        <p>Topic: {article.topic} </p>
        <p>Author: {article.author}</p>
        <p>Comment Count: {article.comment_count}</p>
        <p>Created At: {article.created_at}</p>
        <br />
      </Link>
    </>
  );
};

export default ArticleCard;
