import React from "react";
import HomeBody from "./HomeBody/HomeBody";
import HomeNav from "./HomeNav/HomeNav";
// import SideBar from "./SideBar/SideBar";

import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <HomeNav />
      {/* <SideBar /> */}
      <HomeBody />
    </div>
  );
};

export default HomePage;
