import React, { useState } from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

const AdminGetUsers = () => {
  const [allUsers, setAllUsers] = useState("");

  const rows: GridRowsProp = [
    { id: 1, col1: allUsers.firstName, col2: "World" },
    { id: 2, col1: "DataGridPro", col2: "is Awesome" },
    { id: 3, col1: "MUI", col2: "is Amazing" },
  ];

  const columns: GridColDef[] = [
    { field: "col1", headerName: "Column 1", width: 150 },
    { field: "col2", headerName: "Column 2", width: 150 },
  ];

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
      <h2>Pull all users</h2>

      <div style={{ height: 400, width: "100%" }} className="get-all-users">
        <button onClick={getAllUsers}>get all users</button>
        <DataGrid rows={rows} columns={columns} />
        {allUsers
          ? allUsers.map((user, index) => (
              <div key={index} className="worker-details">
                <label>firstname</label>
                <p>{user.firstName}</p>
                <p>{user.lastName}</p>
                <p>{user.userName}</p>
                <p>{user.isAdmin}</p>
                <p>{user.password}</p>
              </div>
            ))
          : "Nothing to show..."}
      </div>
    </div>
  );
};

export default AdminGetUsers;
