import React, { useState, useEffect } from "react";
import "./AdminGetUsers.css";

const AdminGetUsers = () => {
  const [allUsers, setAllUsers] = useState("");
  const [isEmpty, setIsEmpty] = "";

  // const isPassBiggerThenFive = (text) =>
  // text.length < 5
  //   ? setIsEmpty("The Password must contain at least five digits")
  //   : setIsEmpty("");

  function DeleteUser(userId) {
    fetch(`http://localhost:8000/api/users/deleteUser/${userId}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json()) // or res.json()
      .then((res) =>
        setAllUsers(allUsers.filter((user) => user._id !== res._id))
      );
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
              <p>{user._id}</p>
              <p>{user.firstName}</p>
              <p>{user.firstName}</p>
              <p>{user.firstName}</p>
              <p>{user.lastName}</p>
              <p>{user.userName}</p>
              <p>{user.isAdmin}</p>
              <p>{user.password}</p>
              <button onClick={() => DeleteUser(user._id)}>Delete User</button>
            </div>
          ))
        : "Nothing to show..."}
    </div>
  );
};

export default AdminGetUsers;
