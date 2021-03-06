import React from "react";
import "../styles/Body.css";
import Search from "./Search";

function HomeBody() {
  return (
    <div className="home__body">
      <img
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        alt="google-logo"
      />

      <div className="home__inputContainer">
        <Search />
      </div>
    </div>
  );
}

export default HomeBody;
