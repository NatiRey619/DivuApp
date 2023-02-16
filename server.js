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

dotenv.config();

const { PORT, DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;

//the initialising of the server itself
const app = express();

// middlewares for the server
app.use(express.json());
app.use(cors());
// app.use(express.static("client/build"));

mongoose.set("strictQuery", true);

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
