import React from "react";
import "./HomeNav.css";
import { useNavigate } from "react-router-dom";
import MyContext from "../../../MyContext";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { Avatar } from "@mui/material";

const HomeNav = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  // const { userInput, setUserInput } = useContext(MyContext);
  const [userInput, setUserInput] = useState("");

  const [isAdmin, setIsAdmin] = useState(false); // need to get isAdmin from login page
  //to change option to see admin menu

  const navigate = useNavigate();

  const getProfileDetails = async () => {
    const response = await fetch("http://localhost:8000/api/users/profile");
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    getProfileDetails();
  }, []);

  return (
    <div className="navbar">
      <span>
        <Avatar>H</Avatar>
      </span>
      <p>welcome back {userInput}</p>

      <a className="nav-page" onClick={() => navigate("/*")}>
        NEW PAGE
      </a>
      <a className="nav-page" onClick={() => navigate("/*")}>
        NEW PAGE
      </a>
      <div className="dropdown">
        <button className="dropbtn">My Profile</button>
        <div className="dropdown-content">
          {/* { isAdmin 
    ?       <a className="nav-page" onClick={() => navigate("/adminpage")}>Admin Panel</a> 

    : null
} */}

          <a className="nav-page" onClick={() => navigate("/adminpage")}>
            Admin Panel
          </a>
          <a className="nav-page" onClick={() => navigate("/MyReports")}>
            My Reports
          </a>
          <a className="nav-page" onClick={() => navigate("/PmManager")}>
            PM Manager
          </a>
          <a className="nav-page" onClick={() => navigate("/LogOut")}>
            Log Out
          </a>
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
