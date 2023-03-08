import { Table } from "@mui/material";
import React from "react";
import { useState } from "react";
import "./Example.css";

const Example = () => {
  const [allUsers, setAllUsers] = useState("");
  const [userID, setUserID] = useState("");

  const [workerFName, setWorkerFName] = useState('')
  const [workerUserName, setWorkerUserName] = useState('')
  const [workerEmail, setWorkerEmail] = useState('')





  function editUser (userId) {

    fetch(`http://localhost:8000/api/users/updateUser/${userId.target.className}`, {
      method: "PUT",
      body: JSON.stringify({
        firstName: workerFName,
        email: workerEmail, 
        userName: workerUserName,
      }),  
      mode: "cors",
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
  },

     
    });
  } 
 


  function DeleteUser(userId) {
    fetch(`http://localhost:8000/api/users/deleteUser/${userId.target.className}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        Accept: "application/json", 
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json()) // or res.json() 
      .then((res) =>
        setAllUsers(allUsers.filter((user) => user._id !== userId.target.className))
        
        )
        

      
  }


  const getAllUsers = async () => {
    try {
      const respone = await fetch(
        "http://localhost:8000/api/users/getAllUsers"
      );
      const data = await respone.json();
      setAllUsers(data);

      console.log(allUsers);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="all-users">
      <button onClick={getAllUsers}>get all users</button>

      {allUsers.length
        ? allUsers.map((user) => (
            <table class="my_table">
              <thead>
              <tr>
                <th>First Name</th>
                <th>User name</th>
                <th>Email</th>
                <th>Date Created</th>
                <th>DELETE USER</th>
                <th>UPDATE USER</th>

              </tr>
              </thead>
          
              <tr>
                <td>
                   <input
                   onChange={(e)=>setWorkerFName(e.target.value)}
          name="user-firstname"
          placeholder={user.firstName}
          type="text"
        />
        </td>
                <td>           <input
                onChange={(e)=>setWorkerUserName(e.target.value)}
          name="user-username"
          placeholder={user.userName}
          type="text"
        /></td>
                <td>           <input
                onChange={(e)=>setWorkerEmail(e.target.value)}
          name="user-email"
          placeholder={user.email}
          type="text"
        /></td>
                 <td>{user.dateCreated}</td>
                <td>
                  <button onClick=
                  {DeleteUser} 
                  className={user._id}>
                    DELETE
                  </button>
                </td>
                <td>
                  <button onClick={editUser}  
                  className={user._id}>
                    UPDATE
                  </button>
                </td>
              </tr>
            </table>
          ))
        : "No Data"} 
    </div>
    // <div className="all-users">
    //   <button onClick={getAllUsers}>get all users</button>

    //   {allUsers.length
    //     ? allUsers.map((user) => (
    //         <table class="my_table">
    //           <thead>
    //           <tr>
    //             <th>First Name</th>
    //             <th>User name</th>
    //             <th>Email</th>
    //             <th>Date Created</th>
    //             <th>DELETE USER</th>
    //           </tr>
    //           </thead>
          
    //           <tr>
    //             <td>{user.firstName}</td>
    //             <td>{user.userName}</td>
    //             <td>{user.email}</td>
    //             <td>{user.dateCreated}</td>
    //             <td>
    //               <button onClick=
    //               {DeleteUser} 
    //               className={user._id}>
    //                 DELETE
    //               </button>
    //             </td>
    //           </tr>
    //         </table>
    //       ))
    //     : "No Data"}
    // </div>
  );
};

export default Example;
