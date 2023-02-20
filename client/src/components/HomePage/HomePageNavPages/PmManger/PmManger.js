import React from "react";
import "./PmManager.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PmManger = () => {
   const [postContent, setPostContent] = useState(""); // Declare a state variable...
   const [workerName, setWorkerName] = useState("")
   const [workerEmail, setWorkerEmail] = useState("")
   const [isEmptyContent, setisEmptyContent] = useState("");
   const [messageTime, setMessageTime] = useState("")
   const [fullWorkerMessage, setFullWorkerMessage] = useState("")

   var jsonData = {
    newMessage: [
      {
        workerName: workerName,
        email: workerEmail,
        innerMessage: postContent,
        userName: workerName,

      },
    ],
  };


   function AddNewMessage() {
    // Send data to the backend via POST
    fetch("http://localhost:8000/api/messages/addMessage", {
      // Enter your IP address here
      method: "POST",
      mode: "cors",
      // body: JSON.stringify(jsonData) // body data type must match "Content-Type" header
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        workerName: workerName,
        email: workerEmail,
        innerMessage: postContent,
        userName: workerName,
      }),
    });
    console.log(jsonData);
  }

  const navigate = useNavigate()
   

  function sendPmMessage(e) {
    if(postContent.length > 5){
      setPostContent(e.target.value)
      setWorkerName(e.target.value)
      setWorkerEmail(e.target.value)
      setMessageTime(new Date().toLocaleTimeString());

      setisEmptyContent('Message was sent successfuly !')

      setFullWorkerMessage({
        ...workerName,
      });
      


      console.log("Worker name " + workerName )
      console.log("Email " + workerEmail )
      console.log("Message " + postContent )
      console.log(messageTime)

    }
       else {
        setisEmptyContent('Please enter at least 5 words')
    }
    
    
    };


    




  return (
    <div className="pm-manager">
      <div className="pm-manager-container">
            <button onClick={() => navigate(-1)}>Go back</button>

      <h1>Send Private Message To Manager</h1>
      {/* <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST"> */}
      <div className="form-group">
        <label>Worker Name</label>
        <input onChange={(e) => setWorkerName(e.target.value)} type="text" className="form-control" share />
      </div>
      <div className="form-group">
        <label>Email address</label>
        <input onChange={(e) => setWorkerEmail(e.target.value)} type="email" className="form-control" />
      </div>
      <div className="form-group">
        <label>Message</label>
        <textarea
            onChange={(e) => {
            setPostContent(e.target.value);
          }}
          placeholder="Please enter message"
          value={postContent}
          rows={20}
        ></textarea>
      </div>
       <p>{isEmptyContent}</p>

      <button onClick={AddNewMessage} AddNewMessage
       type="submit">
        Submit Request
      </button>
      {/* </form> */}
    </div>
    </div>
  );
};

export default PmManger;
