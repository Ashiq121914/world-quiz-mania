import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-section">
        <div className="header-text">
          <h2>
            Place where you can participate <br /> live multi topic quiz
          </h2>
          <p>
            WorldQuizMania is a web-based quiz platform where people can
            participate on multi topic quiz.
          </p>
          <button className="explore-btn">
            <a href="#homeTopic">Go to Topics</a>
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Header;
