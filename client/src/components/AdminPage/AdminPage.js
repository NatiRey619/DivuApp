import React, { useState } from "react";
import { useEffect } from "react";
import "./AdminPage.css";
import AdminNewUser from "./AdminPages/AdminNewUser/AdminNewUser";
import AdminGetUsers from "./AdminPages/AdminGetUsers/AdminGetUsers";
import AdminGetMessages from "./AdminPages/AdminMessages/AdminGetMessages";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  
  // useEffect(() => {
  //   getAllUsers();
  // }, []);
  const navigate = useNavigate()
  const [isShown, setIsShown] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);



  const handleClickGETUSERS = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);
  }

  const handleClickADDUSER = event => {
    setIsShown2(current => !current)
  }
const handleClickMessages = event =>{
  setIsShown3(current =>!current)

}

  return (
    <div className="admin-page">
          <div className="page-container">


<h1>Admin Page</h1>

<div className="admin-funcs">



      <button onClick={handleClickGETUSERS}>Current Users</button>
            {isShown && (
      <div className="admin-get-users"><AdminGetUsers /></div>
      )}


              
              <button onClick={handleClickADDUSER}>Add New User</button>

              {isShown2 && (
     <div className="admin-add-users"> <AdminNewUser /> </div>
      )}

      <button onClick={handleClickMessages}>All Messages</button>
                {isShown3 && (
                 <div className="admin-get-messages">< AdminGetMessages/></div>
                )} 
    </div>


    </div>
    </div>
  );
}; 

export default AdminPage;
