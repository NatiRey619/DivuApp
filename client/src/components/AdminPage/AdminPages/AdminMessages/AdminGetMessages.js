import React, { useState } from 'react'
import "./AdminGetMessages.css";

const AdminGetMessages = () => {

const [allMessages, setAllMessages] = useState(''); 
    
const getAllPms = async () => {
    try {
      const respone = await fetch(
        "http://localhost:8000/api/messages/getAllMessages"
      );
      const pmData = await respone.json();
      setAllMessages(pmData);

      console.log(allMessages);
    } catch (e) {
      console.log(e);
    }
  };


  return (
    <div className='all-messages'>
        <button onClick={getAllPms}>Show All Messages</button>
        {allMessages.length
        ? allMessages.map((pm) => (
            <table class="my_table">
              <thead>
              <tr>
                <th>id</th>
                <th>worker name</th>
                <th>message</th>
                <th>Date Created</th>

              </tr>
              </thead>
          
              <tr>
                <td>{pm._id}</td>
                <td>{pm.workerName}</td>
                <td>{pm.innerMessage}</td>

                <td>{pm.dateCreated}</td>
              </tr>
            </table>
          ))
        : "Please Reload"} 

    </div>
  )
}

export default AdminGetMessages