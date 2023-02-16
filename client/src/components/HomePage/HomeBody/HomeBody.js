import React from "react";
import "./HomeBody.css";
import Clock from "./HomeClock/HomeClock";
import StartShift from "./StartShift/StartShift";
import HomeDate from "./HomeDate/HomeDate";
import Footer from "../../UserLoginPage/Footer/Footer";

const HomeBody = () => {
  return (
    <div className="home-body">
      
      <HomeDate />
      <StartShift />
    </div>
  );
};

export default HomeBody;
