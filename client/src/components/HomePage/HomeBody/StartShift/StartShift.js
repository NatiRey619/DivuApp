import React, { useState, useEffect } from "react";
import "./StartShift.css";

//HOOK Always on top of component
const StartShift = () => {
  const [startShift, setStartShift] = useState("");
  const [endShift, setEndShift] = useState("");
  const [startShiftClicked, setstartShiftClicked] = useState(true);
  const [formatShifts, setformatShifts] = useState("");




  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  // use state is condition for true fase

  function giveStartShift() {
    setStartShift(new Date().toLocaleTimeString());
    setstartShiftClicked(false)
    console.log(startShiftClicked)
    const workerStartShift = {
      ID: "ID HERE",
      StartShift: { startShift, date },
    };
    console.log(workerStartShift);
  }

  function giveEndShift() {
    setEndShift(new Date().toLocaleTimeString());
    const workerEndShift = {
      ID: "ID HERE",
      EndShift: { endShift, date },
    };
    console.log(workerEndShift);
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
    setStartShift()
    console.log(endShift)
    console.log(startShift)

  
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
        <button disabled={startShiftClicked} onClick={giveEndShift}>סיים משמרת</button>
        <p>{endShift}</p>
        
       <button onClick={formatShiftsTimes}>אפס שעון יומי</button>
      </div>
    </div>
  );
};

export default StartShift;
