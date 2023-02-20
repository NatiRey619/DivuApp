import { useState, useEffect } from "react";
import React from "react";
import "./HomeClock.css";

const HomeClock = () => {
  const [clock, setClock] = useState(new Date().toLocaleTimeString());

  

  useEffect(() => {
    let id = setInterval(() => {
      setClock(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(id);
  }, []);


  

  return <h1 className="clock"> Time is : {clock}</h1>;
};

export default HomeClock;
