import React, { useState } from 'react'
import "./AdminGetMessages.css";
import SearchBar from "material-ui-search-bar";
import { useEffect } from 'react';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";



const AdminGetMessages = () => {



const [allMessages, setAllMessages] = useState(''); 
const [searched, setSearched] = useState("");

const getAllPms = async () => {
    try {
      const respone = await fetch(
        "http://localhost:8000/api/messages/getAllMessages"
      );
      const pmData = await respone.json();
      setAllMessages(pmData);

      console.log(allMessages);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getAllPms();
  }, []);

  const requestSearch = (searchedVal) => {
    const filteredMessage = allMessages.filter((row) => {
      return row.workerName.toLowerCase().includes(searchedVal.toLowerCase())
    })
    setAllMessages(filteredMessage)

    if (!filteredMessage){
      setAllMessages(filteredMessage)
    }

  }

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };


  const useStyles = makeStyles({
    table: {
      minWidth: 650
    }
  });
 

   

  return (
    <div className='all-messages'>
                <div className='table-container'>

        <button onClick={getAllPms}>Show All Messages</button>
        <SearchBar
          placeholder="Search By Name"
          value={searched}
          onChange={(searchVal) => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
        />      
        <h4>Total Messages : {allMessages.length}</h4>

    {allMessages.length
        ? allMessages.map((pm) => (
          <TableContainer>
            <Table  className={useStyles}>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="center">Worker Name</TableCell>
                <TableCell align="center">Message</TableCell>
                <TableCell align="center">Date Created</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              
                <TableRow >
                  <TableCell component="th" scope="row">
                    {pm._id}
                  </TableCell>
                  <TableCell align="center">{pm.workerName}</TableCell>
                  <TableCell align="center">{pm.innerMessage}</TableCell>
                  <TableCell align="center">{pm.dateCreated}</TableCell>
                </TableRow>
              
            </TableBody>
                    </Table>
            </TableContainer>
          ))
        : "Please Reload"} 



{/*              
        {allMessages.length
        ? allMessages.map((pm) => (
            <table class="my_table">
              <thead>
              <tr>
                <th>id</th>
                <th>worker name</th>
                <th>message</th>
                <th>Date Created</th>

              </tr>
              </thead>
          
              <tr>
                <td>{pm._id}</td> 
                <td>{pm.workerName}</td>
                <td>{pm.innerMessage}</td>

                <td>{pm.dateCreated}</td>
              </tr>
            </table>
          ))
        : "Please Reload"}  */}

    </div>
    </div>

  )
}
 
export default AdminGetMessages