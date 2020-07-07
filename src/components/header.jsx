import React from "react";
import nclogo from "./images/nclogo.png";
import nc_heart_logo from "./images/nc_heart_logo.png";

const Header = () => {
  return (
    <header>
      <img src={nc_heart_logo} alt="logo" className="nc_news-_logo" />

      <h1 className="nc_news_title">NORTHCODERS NEWS</h1>
    </header>
  );
};

export default Header;
