import React, { useState, useEffect } from "react";
import "./StartShift.css";

//HOOK Always on top of component
const StartShift = () => {
  const [startShift, setStartShift] = useState("");
  const [endShift, setEndShift] = useState("");
  const [startShiftClicked, setstartShiftClicked] = useState(true);
  const [formatShifts, setformatShifts] = useState("");
  const [data, setData] = useState({});
  const [error, setError] = useState("")

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  // use state is condition for true fase

  function giveStartShift() {
    
    const workerStartShift = {
      ID: "ID HERE",
      StartShift: { startShift, date },
    };

    if (!startShift) {
      setstartShiftClicked(false);
      setStartShift(new Date().toLocaleTimeString());

      console.log(startShiftClicked);
      console.log(workerStartShift)

    } else {
      setError("עדכן סיום משמרת , או אפס במקרה הצורך ");

    }
 
    }



  function giveEndShift() {

    setEndShift(new Date().toLocaleTimeString());
    const workerEndShift = {
      ID: "ID HERE",
      EndShift: { endShift, date },
    };
    console.log(workerEndShift);
  }

  function formatShiftsTimes() {
    
    setEndShift();
    setStartShift();
    console.log(endShift);
    console.log(startShift);
    setError("");
    setstartShiftClicked(true)

  }
  var jsonData = {
    NewReport: [
      {
        startShift: startShift,
        endShift: endShift,
      },
    ],
  };

  function addNewReport() {
    // Send data to the backend via POST
    fetch("http://localhost:8000/api/reports/addReport/", {
      // Enter your IP address here
      method: "POST",
      mode: "cors",
      // body: JSON.stringify(jsonData) // body data type must match "Content-Type" header
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        StartShift: startShift,
        EndShift: endShift,
        
      }),
    });
    console.log(jsonData);
  }

  //js logic
  return (
    <div className="worker-shifts">
      <div className="start-shift">
        {" "}
        <button onClick={giveStartShift}>התחל משמרת</button>
        <p>{startShift}</p>
      </div>

      <div className="end-shift">
        <button disabled={startShiftClicked} onClick={giveEndShift}>
          סיים משמרת
        </button>
        <p>{endShift}</p>
        {error && <p>{error}</p>}
        <div className="action-buttons">
          <button onClick={formatShiftsTimes}>אפס שעון יומי</button>
          <button onClick={addNewReport}>שלח דוח שעות יומי</button>
        </div>
      </div>
    </div>
  );
};

export default StartShift;
