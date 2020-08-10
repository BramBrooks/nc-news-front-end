import React from "react";
import nc_heart_logo from "./images/nc_heart_logo.png";

const Header = () => {
  return (
    <header>

      <div id="logo_border"><p> . </p></div>
      <div id="title_border"><p> . </p></div>
      <div id="page_border"><p> . </p></div>

      <img src={nc_heart_logo} alt="logo" className="nc_news_logo" />

      <h1 className="nc_news_title">NORTHCODERS NEWS</h1>
      <h2 id='articles_title_permanent'>Articles</h2>
    </header>


  );
};

export default Header;
