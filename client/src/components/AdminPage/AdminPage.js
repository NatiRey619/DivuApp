import React, { useState } from "react";
import { useEffect } from "react";
import "./AdminPage.css";
import AdminNewUser from "./AdminPages/AdminNewUser/AdminNewUser";
import AdminGetUsers from "./AdminPages/AdminGetUsers/AdminGetUsers";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  
  // useEffect(() => {
  //   getAllUsers();
  // }, []);
  const navigate = useNavigate()
  const [isShown, setIsShown] = useState(false);
  const [isShown2, setIsShown2] = useState(false);


  const handleClickGETUSERS = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);
  }

  const handleClickADDUSER = event => {
    setIsShown2(current => !current)
  }

  return (
    <div className="admin-page">

<h1>Admin Page</h1>

<div className="admin-funcs">



      <button onClick={handleClickGETUSERS}>ALL USERS</button>
            {isShown && (
        <div>
      <AdminGetUsers />
        </div>
      )}


      <br></br>
              <button onClick={handleClickADDUSER}>ADD USER</button>

              {isShown2 && (
        <div>
      <AdminNewUser />
        </div>
      )}

    </div>
    </div>
  );
};

export default AdminPage;
