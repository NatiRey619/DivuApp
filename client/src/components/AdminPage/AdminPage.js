import React, { useState } from "react";
import { useEffect } from "react";
import "./AdminPage.css";
import AdminNewUser from "./AdminPages/AdminNewUser/AdminNewUser";
import AdminGetUsers from "./AdminPages/AdminGetUsers/AdminGetUsers";
const AdminPage = () => {
  
  // useEffect(() => {
  //   getAllUsers();
  // }, []);

  return (
    <div className="admin-page">
      <h1>Admin Page</h1>
      <AdminGetUsers />
      <br></br>
      <AdminNewUser />
    </div>
  );
};

export default AdminPage;
