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
  addUserAuthController,
  LoginUserAuthController,
} from "./controllers/UserControllers.js";

import {
  getAllReportsController,
  getOneReportsController, // צריך לטפל בזה
  addReportsController,
  deleteReportsController,
  updateReportsController,
} from "./controllers/ReportsControllers.js";

import {
  getAllMessageController,
  addMessageController,
  deleteMessagsController,
  getOneMessageController,
  updateMessageController,
} from "./controllers/MessagesControllers.js";

dotenv.config();

const corsOptions = {
  origin: true, //included origin as true
  credentials: true, //included credentials as true
};

const { PORT, DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;

//the initialising of the server itself
const app = express();

import { UserModel } from "./models/UserModel.js";
import bcrypt from "bcrypt";
import { createTokens, validateToken } from "./JWT.js";

import cookieParser from "cookie-parser";

// middlewares for the server
app.use(express.json());
app.use(cookieParser()); // using cookieParser

app.use(cors(corsOptions));

// app.use(cors({}));
// app.use(express.static("client/build"));

mongoose.set("strictQuery", true);

app.post("/api/users/register", (req, res) => {
  const { username, password, email, lastname, firstname } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    UserModel.create({
      userName: username,
      password: hash,
      firstName: firstname,
      lastName: lastname,
      email: email,
    })
      .then(() => {
        res.json("User Registered");
      })
      .catch((err) => {
        if (err) {
          res.status(400).json({ error: err });
        }
      });
  });
});

app.post("/api/users/login", async (req, res,next) => {
  
  // working - checking if username exist in DB
  const { username, password } = req.body;
  
  console.log(username, password);

  const user = await UserModel.findOne({ userName: username });
  if (!user) res.status(400).json({ error: "User doesnt exist" }); // first checking if the user exist

  const dbPassword = user.password;
  console.log("DB PASS" + " " + dbPassword, "USER PASS" + " " + password);
  bcrypt.compare(password, dbPassword).then((match) => {
    if (!match) {
      res.status(400).json({
        isSuccess: false,
        error: "Wrong Username and Password combo !",
      }); // if user exist and password wrong
      console.log("wrong combo");
    } else {
      const accessToken = createTokens(user); // creating token
      console.log("GOT TOKEN" + " " + accessToken);


      res.cookie("access-token", accessToken, {
        
        maxAge: 60 * 60 * 24 * 30 * 1000,
        httpOnly: false,
          }) ;


      res.json({ accessToken, isSuccess: true }); // if username & password are good

      console.log("User Logged");
    }
  });
});

app.get("/api/users/profile", validateToken, (req, res) => {
  res.json("profileHere"); // only if user logged in , got token
});

//user login check 

//routes for users
app.post("/api/users/register", addUserAuthController);
app.post("/api/users/login", LoginUserAuthController);

app.get("/api/users/getAllUsers", getAllUsersController);
app.get("/api/users/getOneUser/:id", getOneUserController);
app.post("/api/users/addUser", addUserController);
app.put("/api/users/updateUser/:id", updateUserController);
app.delete("/api/users/deleteUser/:id", deleteUserController);

//routes for Reports
// app.get("/api/reports/getAllReports", getAllReportsController);
// app.get("/api/reports/getOneReport/:id", getOneReportsController);
// app.post("/api/reports/addReport", addReportsController);
// app.put("/api/reports/updateReport/:id", updateReportsController);
// app.delete("/api/reports/deleteReport/:id", deleteReportsController);





mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (info) => {
    app.listen(PORT, () => {
      console.log("info", info);
      console.log("LISTENING", "Server is running at port : " + PORT);
    });
  }
);
