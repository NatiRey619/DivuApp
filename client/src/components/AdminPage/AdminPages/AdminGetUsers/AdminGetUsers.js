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
              <tr>
                User ID :<th>{user._id}</th>{" "}
                <label>
                  First Name :<th>{user.firstName}</th>{" "}
                </label>
                <label>
                  Last Name :<th>{user.firstName}</th>{" "}
                </label>
              </tr>

              <p>{user.firstName}</p>
              <p>{user.lastName}</p>
              <p>{user.userName}</p>
              <p>{user.isAdmin}</p>
              <p>{user.password}</p>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <button>Modify User</button> // where you'll put the edit
                    button
                  </tr>
                </thead>
                <tbody>
                  {/* iterate through the customers array and render a unique Customer component for each customer object in the array */}
                  {/* { customers.map(customer => <Customer key={customer.id} customer={customer} />) } */}
                </tbody>
              </table>
              <button onClick={() => DeleteUser(user._id)}>Delete User</button>
            </div>
          ))
        : "Nothing to show..."}
    </div>
  );
};

export default AdminGetUsers;
