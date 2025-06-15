import React from "react";
import "./Facts.css";

function Facts() {
  return (
    <div className="facts-container">
      <div className="facts">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Secure and private health record management</li>
          <li>Connect with healthcare providers worldwide</li>
          <li>Access to a vast network of medical resources</li>
          <li>User-friendly interface for easy navigation</li>
        </ul>
      </div>
      <div className="fun-facts">
        <h2>Fun Facts</h2>
        <ul>
          <li>Over 1 million users worldwide</li>
          <li>Supports over 100 languages</li>
          <li>Partners with over 500 healthcare institutions</li>
          <li>Committed to improving global health access</li>
        </ul>
      </div>
    </div>
  );
}

export default Facts;
