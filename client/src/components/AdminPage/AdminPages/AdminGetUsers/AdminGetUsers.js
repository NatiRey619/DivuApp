import React, { useState } from "react";
import "./AdminGetUsers.css"



const AdminGetUsers = () => {
  const [allUsers, setAllUsers] = useState("");

  const [userId, setUserId] = useState()


  function DeleteUser() {
    fetch(`http://localhost:8000/api/users/deleteUser/${userId}` +   {

      method: 'DELETE',
      headers: {
        "Content-type": "application/json"
      }      // body: JSON.stringify(jsonData) // body data type must match "Content-Type" header


    })
    .then(res => res.json()) // or res.json()
    .then(res => console.log(res))
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

      <div className="get-all-users">
      <h2>Pull all users</h2>

        <button onClick={getAllUsers}>get all users</button>


        {allUsers
          ? allUsers.map((user, index) => (
              <div key={index} className="worker-details">
                <p onClick={(e) => setUserId(e.target.innerText)}>{user._id}</p>
                <p>{user.firstName}</p>
                <p>{user.lastName}</p>
                <p>{user.userName}</p>
                <p>{user.isAdmin}</p>
                <p>{user.password}</p>
                <button id={user._id} onClick={DeleteUser}>Delete User</button>
              </div>
            ))
          : "Nothing to show..."}
      </div>
  );
};

export default AdminGetUsers;
