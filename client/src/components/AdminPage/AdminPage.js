import React, { useState } from "react";
import { useEffect } from "react";
import "./AdminPage.css";
import AdminGetUsers from "./AdminPages/AdminGetUsers";

const AdminPage = () => {
  // useEffect(() => {
  //   getAllUsers();
  // }, []);

  return (
    <div>
      <h1>admin page</h1>
      <AdminGetUsers />
    </div>
  );
};

export default AdminPage;
