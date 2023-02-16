import React from "react";
import "./MyReports.css";
import StartShift from "../../HomeBody/StartShift/StartShift";
import { useNavigate } from "react-router-dom";
import MyContext from "../../../../MyContext";
import { useContext } from "react";
const MyReports = () => {
  const navigate = useNavigate();
  const { StartShift, setStartShift } = useContext(MyContext);

  
  console.log(StartShift)
  return (
    <div className="my-reports">
                  <button onClick={() => navigate(-1)}>Go back</button>
                 <h3>{StartShift}</h3> 

      <h1>My Reports</h1>

      

    </div>
  );
};

export default MyReports;
