import React from "react";
import "./PmManager.css";
import { useState } from "react";
import MyContext from "../../../../MyContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const PmManger = () => {
   const [postContent, setPostContent] = useState(""); // Declare a state variable...
   const [isEmptyContent, setisEmptyContent] = useState("");
   

   const { userInput, setUserInput } = useContext(MyContext);
  const navigate = useNavigate()
   

  function sendPmMessage(e) {
    if(postContent.length > 5){
      setPostContent(e.target.value)
      setisEmptyContent('')

      console.log(postContent)
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
        <label>Worker Name {userInput}</label>
        <input type="text" className="form-control" share />
      </div>
      <div className="form-group">
        <label>Email address</label>
        <input type="email" className="form-control" />
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

      <button onClick={sendPmMessage} type="submit">
        Submit Request
      </button>
      {/* </form> */}
    </div>
    </div>
  );
};

export default PmManger;
