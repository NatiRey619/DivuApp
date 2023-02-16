import React from "react";
import "./HomeDate.css";
import HomeClock from "../HomeClock/HomeClock";

const HomeDate = () => {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;



  const dayOfWeekDigit = new Date().getDay();
  const dayOfWeekName = new Date().toLocaleString("default", {
    weekday: "long",
  });

  return (
    <div className="home-date">
      <h1>Today date : {date}</h1>
      <h1>Current day : {dayOfWeekName}</h1>
      <h1><HomeClock /></h1>
    </div>
  );
};

export default HomeDate;
