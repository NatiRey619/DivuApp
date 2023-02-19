import React from 'react'
import { useState } from 'react';
import "./AdminNewUser.css"

const AdminNewUser = () => {
    const [userName, setUserName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [isAdmin, setIsAdmin] = useState (false)


    var jsonData = {
      "newUser": [
          {
            userName: userName,
            firstName: firstName, 
            lastName: lastName,
            password: userPassword,
            email: userEmail,
            isAdmin : isAdmin,

          },
      
      ]
    }
  
    function handleClick() {
      // Send data to the backend via POST
      fetch('http://localhost:8000/api/users/addUser/', {  // Enter your IP address here
        method: 'POST', 
        mode: 'cors', 
        // body: JSON.stringify(jsonData) // body data type must match "Content-Type" header
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userName: userName,
          firstName: firstName,
          lastName: lastName,
          password: userPassword,
          email: userEmail,
          isAdmin: isAdmin,
       })
      })
      console.log(jsonData)

    }
  

  return (

<div className='add-new-user'>
    <label for="user-name">Enter User Name</label>
    <input           onChange={(e) => {
            setUserName(e.target.value);
          }}
 name="user-name-val" id="user-name" />

<label for="first-name">Enter first name</label>
  <input onChange={(e) => {
            setFirstName(e.target.value);
          }} name="first-name-val" id="first-name"  />

  <label for="last-name">Enter last name</label>
  <input onChange={(e) => {
            setLastName(e.target.value);
          }} name="last-name-val" id="last-name"/>

  <label for="worker-email">Enter Email</label>
  <input onChange={(e) => {
            setUserEmail(e.target.value);
          }} name="worker-email-val" id="worker-email"/>
  
  <label for="worker-password">Enter Password</label>
  <input onChange={(e) => {
            setUserPassword(e.target.value);
          }} name="worker-password-val" id="worker-password" />

<input onChange={(e) => {
            setIsAdmin(!isAdmin);
          }} className="checkbox" type="checkbox" />
        <label>is Admin ?</label>


  <button onClick={handleClick}>Add New User</button>

  </div>


  )
}

export default AdminNewUser