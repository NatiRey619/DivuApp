import React, { useState } from 'react'
import { useEffect } from 'react';
import "./AdminPage.css"

const AdminPage = () => {
  const [allUsers, setAllUsers] = useState('');
  const allPulledUsers = []

  const getAllUsers = async () => {
    try {
      const respone = await fetch(
        "http://localhost:8000/api/users/getAllUsers"
      );
      const data = await respone.json();
      setAllUsers(data);
      console.log(allUsers)
    } catch (e) {
      console.log(e);
    }
  };

  // useEffect(() => {
  //   getAllUsers();
  // }, []);

  return (

    <div>
      <h1>admin page</h1>
      <div className="get-all-users">
        <button
          onClick={getAllUsers}
        >get all users</button>
         {allUsers.map
          ? allUsers.map(user => 
          <p>{user.firstName}</p>
          
          
          
          )
          : 'Nothing to show...'
        }
        
        </div>

      
      
      
      
      </div>
  )
}

export default AdminPage