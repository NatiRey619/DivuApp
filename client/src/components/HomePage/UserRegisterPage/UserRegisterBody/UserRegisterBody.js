import React from "react";
import { useState } from "react";
import "./UserRegisterBody.css";

const UserRegisterBody = () => {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [PassFiveDigitsError, setPassFiveDigitsError] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [error, setError] = useState("");

  // const [meter, setMeter] = useState(false);

  // const atLeastOneUppercase = /[A-Z]/g; // capital letters from A to Z
  // const atLeastOneLowercase = /[a-z]/g; // small letters from a to z
  // const atLeastOneNumeric = /[0-9]/g; // numbers from 0 to 9
  // const atLeastOneSpecialChar = /[#?!@$%^&*-]/g; // any of the special characters within the square brackets
  // const eightCharsOrMore= /.{8,}/g; // eight characters or more

  // const passwordTracker = {
  //   uppercase: userPassword.match(atLeastOneUppercase),
  //   lowercase: userPassword.match(atLeastOneLowercase),
  //   number: userPassword.match(atLeastOneNumeric),
  //   specialChar: userPassword.match(atLeastOneSpecialChar),
  //   eightCharsOrGreater: userPassword.match(eightCharsOrMore),
  // }
  // const passwordStrength = Object.values(passwordTracker).filter(value => value).length;

  var jsonData = {
    newUser: [
      {
        userName: username,
        password: hash,
        firstName: firstname,
        lastName: lastname,
        email: email,
      },
    ],
  };

  const isEmptyText = (text) =>
    text.length < 5
      ? setPassFiveDigitsError(`All fields must contain at least 5 letters`)
      : setPassFiveDigitsError("");

  function AddNewUser() {
    // Send data to the backend via POST
    fetch("http://localhost:8000/api/users/addUser/", {
      // Enter your IP address here
      method: "POST",
      mode: "cors",
      // body: JSON.stringify(jsonData) // body data type must match "Content-Type" header
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: userName,
        firstName: firstName,
        lastName: lastName,
        password: userPassword,
        email: userEmail,
        isAdmin: isAdmin,
      }),
    });
    console.log(jsonData);
  }

  return (
    <div className="add-new-user">
      <h2>Create New User</h2>
      <label for="user-name">Enter User Name</label>
      <input
        onChange={(e) => {
          setUserName(e.target.value);
          isEmptyText(userName);
        }}
        name="user-name-val"
        id="user-name"
        type="text"
      />

      <label for="first-name">Enter first name</label>
      <input
        onChange={(e) => {
          setFirstName(e.target.value);
          isEmptyText(firstName);
        }}
        name="first-name-val"
        id="first-name"
        type="text"
      />

      <label for="last-name">Enter last name</label>
      <input
        onChange={(e) => {
          setLastName(e.target.value);
          isEmptyText(lastName);
        }}
        name="last-name-val"
        id="last-name"
        type="text"
      />

      <label for="worker-email">Enter Email</label>
      <input
        onChange={(e) => {
          setUserEmail(e.target.value);
          isEmptyText(userEmail);
        }}
        name="worker-email-val"
        id="worker-email"
        type="text"
      />

      <label for="worker-password">Enter Password</label>
      <input
        onChange={(e) => {
          setUserPassword(e.target.value);
          isEmptyText(userPassword);
        }}
        name="worker-password-val"
        id="worker-password"
        type="text"
      />

      {/* <div>
        <div className="password-strength-meter"></div>
        <div>
          {passwordStrength < 5 && "Must contain "}
          {!passwordTracker.uppercase && "uppercase, "}
          {!passwordTracker.lowercase && "lowercase, "}
          {!passwordTracker.specialChar && "special character, "}
          {!passwordTracker.number && "number, "}
          {!passwordTracker.eightCharsOrGreater && "eight characters or more"}
        </div>
      </div> */}

      <button className="register-button" onClick={AddNewUser}>
        Add New User
      </button>
    </div>
  );
};

export default UserRegisterBody;
