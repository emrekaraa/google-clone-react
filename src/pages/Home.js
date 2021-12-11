import React from "react";
import "../styles/Home.css";
import Header from "../components/Header";
import HomeBody from "../components/HomeBody";

function Home() {
  return (
    <div className="home">
      <Header />

      <HomeBody />
    </div>
  );
}

export default Home;
