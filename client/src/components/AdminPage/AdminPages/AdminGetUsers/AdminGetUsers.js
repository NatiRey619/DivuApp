import React, { useState, useEffect } from "react";
import "./AdminGetUsers.css";
import Example from "./Example";

const AdminGetUsers = () => {
  const [allUsers, setAllUsers] = useState("");
  const [isEmpty, setIsEmpty] = "";

  // const isPassBiggerThenFive = (text) =>
  // text.length < 5
  //   ? setIsEmpty("The Password must contain at least five digits")
  //   : setIsEmpty("");



  return (
    <div className="get-all-users">
      <h2>Pull all users</h2>
      < Example />

    </div>
  );
};

export default AdminGetUsers;
