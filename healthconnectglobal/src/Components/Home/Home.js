import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="main">
      <div className="navbar">
        <div className="logo" />
        <a className="homeLink" href="#">
          Home
        </a>
      </div>
      <div className="bg">
        <p>This is my home page</p>
      </div>
    </div>
  );
}

export default Home;
