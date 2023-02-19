import React, { useState } from "react";
import "./AdminGetUsers.css"
const AdminGetUsers = () => {
  const [allUsers, setAllUsers] = useState("");


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
    <div>
      <h2>Pull all users</h2>

      <div className="get-all-users">
        <button onClick={getAllUsers}>get all users</button>
        {allUsers
          ? allUsers.map((user, index) => (
              <div key={index} className="worker-details">
                <p>{user.firstName}</p>
                <p>{user.lastName}</p>
                <p>{user.userName}</p>
                <p>{user.isAdmin}</p>
                <p>{user.password}</p>
              </div>
            ))
          : "Nothing to show..."}
      </div>
    </div>
  );
};

export default AdminGetUsers;
