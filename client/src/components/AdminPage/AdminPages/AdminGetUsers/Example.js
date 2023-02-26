import { Table } from "@mui/material";
import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { useState } from "react";





  
  const Example = () => {
    const [formObject, setFormObject] = useState({
      worker: {
        _id: "",
        userName: '',
        firstName: '',
        lastName: '',

      },
      email: '',
      Admin: '',
      password: '',
    });
    
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

    const [allUsers, setAllUsers] = useState("");

    const getAllUsers = async () => {
      try {
        const respone = await fetch(
          "http://localhost:8000/api/users/getAllUsers"
        );
        const data = await respone.json();
        setFormObject(data);
    
        console.log(formObject);
      } catch (e) {
        console.log(e);
      }
    };    const columns = useMemo(
      () => [
        {
          accessorKey: '_id', //access nested data with dot notation
          header: 'ID',
          size: 10,

        },
        {
          accessorKey: 'userName', //access nested data with dot notation
          header: 'User Name',
          size: 10,
        },
        {
          accessorKey: 'firstName', //access nested data with dot notation
          header: 'First Name',
          size: 10,

        },
        {
          accessorKey: 'lastName',
          header: 'Last Name',
          size: 20,

        },
        {
          accessorKey: 'email', //normal accessorKey
          header: 'Email',
          size: 20,

        },
        {
          accessorKey: 'password', //normal accessorKey
          header: 'Password',
          size: 20,

        },
        {
          accessorKey: 'dateCreated', //normal accessorKey
          header: 'Created On',
          size: 20,

        },
        {
          accessorKey: 'isAdmin', //normal accessorKey
          header: 'Admin',
        },
        {
          accessorKey: 'DeleteButton', //normal accessorKey
          header: 'DeleteButton',
          render: ({ row }) => (<button onClick={(e) => this.handleButtonClick(e, row)}>Click Me</button>)

        },
              
          
            ],
      [],
    );
  
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
    return (

      <div>

<button onClick={getAllUsers}>get all users</button>

<MaterialReactTable columns={columns} data={formObject} /> ;
      </div>
    ) 
  };
  
  export default Example;;