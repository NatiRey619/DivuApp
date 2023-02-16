import React from "react";
import "./HomeNav.css";
import { useNavigate } from "react-router-dom";
import MyContext from "../../../MyContext";
import { useContext } from "react";
import {useState, useEffect} from 'react'
import { Avatar } from "@mui/material";



const HomeNav = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  // const { userInput, setUserInput } = useContext(MyContext);
  const [userInput, setUserInput] = useState('')

  console.log(userInput)



  const navigate = useNavigate();


  

  return (
    
<div class="navbar">
<p><Avatar>H</Avatar></p>
  <p>
 welcome back {userInput}</p>
 

<a className="nav-page" onClick={() => navigate("/*")}>NEW PAGE</a>
<a className="nav-page" onClick={() => navigate("/*")}>NEW PAGE</a>
  <div class="dropdown">
    <button class="dropbtn">My Profile 
    </button>
    <div className="dropdown-content">
    <a className="nav-page" onClick={() => navigate("/MyReports")}>My Reports</a>
    <a className="nav-page" onClick={() => navigate("/PmManager")}>PM Manager</a>
    <a className="nav-page" onClick={() => navigate("/LogOut")}>Log Out</a>
    
    </div>
  </div> 
</div>

  //  <div className="home-nav">
  //            <p>welcome back {userInput}</p>
  //            <nav>
  //            {(!toggleMenu && screenWidth > 500) && (
  //    <ul className="nav-page-list">

  //    <li className="nav-page" onClick={() => navigate("/MyReports")}>My Reports</li>
  //    <li className="nav-page" onClick={() => navigate("/PmManager")}>PM Manager</li>
  //    <li className="nav-page" onClick={() => navigate("/LogOut")}>Log Out</li>
     
  //    </ul>
  //     )}
    
  //     <button onClick={toggleNav} className="btn">OPEN MENU</button>

  //   </nav>
  //   </div>

    
  );
};

   

export default HomeNav;
