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
      <div className="bgContainer">
        <h1>
          <p className="one">
            He<span className="sp1">al</span>
            <span className="sp2">th</span>
          </p>
          <p className="two">Connect</p>
          <p className="one">
            <span className="sp2">Gl</span>
            <span className="sp1">ob</span>
            al
          </p>
        </h1>
        <div className="bg-main">
          <div className="bg1"></div>
          <div className="bg2"></div>
        </div>
      </div>
      <div className="content">
        <h1>
          Welcome to <b>HealthConnectGlobal</b>
        </h1>
        <p>
          Your one-stop solution for managing health records, connecting with
          healthcare providers, and accessing medical resources globally.
        </p>
        <button className="getStartedBtn">Get Started</button>
      </div>
    </div>
  );
}

export default Home;
