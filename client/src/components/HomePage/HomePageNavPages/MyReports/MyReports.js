import React, { useState } from "react";
import "./MyReports.css";
import StartShift from "../../HomeBody/StartShift/StartShift";
import { useNavigate } from "react-router-dom";
const MyReports = () => {
  const navigate = useNavigate();
  const [allReports, setAllReports] = useState("")



  const getAllReports = async () => {
    try {
      const respone = await fetch(
        "http://localhost:8000/api/reports/getAllReports"
      );
      const data = await respone.json();
      setAllReports(data);

      console.log(allReports);
    } catch (e) {
      console.log(e);
    }
  };

    return (
    <div className="my-reports">
                  <button onClick={() => navigate(-1)}>Go back</button>

      <h1>My Reports</h1>
      <button onClick={getAllReports}>pull reports</button>
      {allReports
        ? allReports.map((report) => (
            <div className="report-details">
               <p>Report ID : {report._id}</p>

              <p>Start : {report.StartShift}</p>
              <p>End : {report.EndShift}</p>
              <p>Date : {report.dateCreated}</p>
              <p>User : need to connect users{report.userName}</p>



            </div>
          ))
        : "Press to load..."}
    </div>
      

  );
};

export default MyReports;
