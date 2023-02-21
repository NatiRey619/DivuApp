//imports
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import {
  getAllUsersController,
  addUserController,
  updateUserController,
  deleteUserController,
  getOneUserController,
} from "./controllers/UserControllers.js";

import {
  getAllReportsController,
  getOneReportsController, // צריך לטפל בזה
  addReportsController,
  deleteReportsController,
  updateReportsController
} from "./controllers/ReportsControllers.js";

import {
  getAllMessageController,
  addMessageController,
  deleteMessagsController,
  getOneMessageController,
  updateMessageController
} from "./controllers/MessagesControllers.js"

dotenv.config();

const { PORT, DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;

//the initialising of the server itself
const app = express();
// const {Users} = require ("./models")
// const bcrypt = require('bcrypt');

// middlewares for the server
app.use(express.json());
app.use(cors());
// app.use(express.static("client/build"));

mongoose.set("strictQuery", true);


// app.post("/register", (req, res) => {
// const {userName, password} = req.body;
// bcrypt.hash(password, 10 ).then((hash) => {
//   Users.create({
//     userName: userName,
//     password: hash 
//   }). then(() => {
//     res.json('User Registered');
//   }).catch((err)=>{
//     if(err){
//       res.status(400).json({error:err})
//     }
//   })

// })


// });


//routes for users
app.get("/api/users/getAllUsers", getAllUsersController);
app.get("/api/users/getOneUser/:id", getOneUserController);
app.post("/api/users/addUser", addUserController);
app.put("/api/users/updateUser/:id", updateUserController);
app.delete("/api/users/deleteUser/:id", deleteUserController);

//routes for Reports
app.get("/api/reports/getAllReports", getAllReportsController);
app.get("/api/reports/getOneReport/:id", getOneReportsController);
app.post("/api/reports/addReport", addReportsController);
app.put("/api/reports/updateReport/:id", updateReportsController);
app.delete("/api/reports/deleteReport/:id", deleteReportsController);

//routes for Messages
app.get("/api/messages/getAllMessages", getAllMessageController);
app.get("/api/messages/getOneMessage/:id", getOneMessageController);
app.post("/api/messages/addMessage", addMessageController);
app.put("/api/messages/updateMessage/:id", updateMessageController);
app.delete("/api/messages/deleteMessage/:id", deleteMessagsController);




mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (info) => {
    app.listen(PORT, () => {
      console.log("info", info);
      console.log("LISTENING",'Server is running at port : ' + PORT);
    });
  }
);
