import { Table } from "@mui/material";
import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { useState } from "react";





  
  const Example = () => {
    const [allUsers, setAllUsers] = useState("");

    
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



<div>
<button onClick={getAllUsers}>get all users</button>
{allUsers.length
    ? allUsers.map(user => (
      <table class="my_table">
  <tr>
    <th>First Name</th>
    <th>User name</th>
    <th>Email</th>
    <th>Date Created</th>
  </tr>
  <tr>
    <td>{user.firstName}</td>
    <td>{user.userName}</td>
    <td>{user.email}</td>
    <td>{user.dateCreated}</td>
  </tr>
</table>
    ))
    :  "No Data"
  }  
    </div>
  );
};


  
  export default Example;;