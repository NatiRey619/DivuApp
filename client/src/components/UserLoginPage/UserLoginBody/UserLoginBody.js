import React, { useEffect, useState } from "react";
import "./UserLoginBody.css";
import { useNavigate } from "react-router-dom";
import Loading from "../../../Loading/Loading";
import UserRegisterBody from "../../HomePage/UserRegisterPage/UserRegisterBody/UserRegisterBody";

const UserLoginBody = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [passFiveDigitsError, setPassFiveDigitsError] = useState("");
  const [userList, setUserList] = useState([]);
  const [passInput, setPassInput] = useState();
  const [userInput, setUserInput] = useState();
  const [showPassword, setShowPassword] = useState(false);

  const newPost = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/users/login/", {
        method: "POST",
        credentials: "include", // added this part

        headers: {
          "Content-Type": "application/json",
          withCredentials: true,
        },
        body: JSON.stringify({ username: userInput, password: passInput }),
      });

      const data = await response.json();
      console.log(data);
      if (data.isSuccess) {
        navigate(`/homepage`);
      }
    } catch (error) {
      console.error(error);
    }
    setError("Wrong Username and Password combo");
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  function checkUserLoginAuth(username, password) {
    // Send data to the backend via POST
    fetch("http://localhost:8000/api/users/login/", {
      // Enter your IP address here
      method: "POST",
      mode: "cors",
      // body: JSON.stringify(jsonData) // body data type must match "Content-Type" header
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        username: userInput,
        password: passInput,
      }),
    });
  }

  const loginCheck = (username, pass) =>
    // need to add redirect for admin users

    userList.map((user) => {
      console.log(user);

      if (user.password === pass && user.userName === username) {
        // navigate(`/homepage/${pass}`);
        navigate(`/homepage`);
      } else {
        setError("Failed, please try again");
      }
    });

  const registerRoute = () => {
    let path = `/register`;
    navigate(path);
  };

  const isPassBiggerThenFive = (pass) =>
    pass.length < 5
      ? setPassFiveDigitsError("The Password must contain at least five digits")
      : setPassFiveDigitsError("");

  const getAllUsers = async () => {
    try {
      const respone = await fetch(
        "http://localhost:8000/api/users/getAllUsers"
      );
      const data = await respone.json();
      setUserList(data);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return !isLoading ? (
    <div className="user-login-body">
      <h3>WELCOME TO DIVUAPP</h3>
      <div className="input-field">
        <input
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
          type="text"
          placeholder="Please enter your User name"
        />
        <div className="password-div">
          <input
            onChange={(e) => {
              isPassBiggerThenFive(e.target.value);
              setPassInput(e.target.value);
            }}
            type={showPassword ? "text" : "password"}
            placeholder="Please enter your Password"
          />
          <div>
            <input
              className="checkbox"
              type="checkbox"
              onClick={handleClickShowPassword}
            />
            <label>Show password</label>
          </div>
        </div>
        {/* <p className={!passFiveDigits ? "helper-text-input" : "hidden"}>
          The Password must contain at least five digits
        </p> */}
        {error && <p>{error}</p>}
      </div>
      <div className="remember-me-checkbox">
        <input className="checkbox" type="checkbox" />
        <label>Remember me</label>
      </div>
      <button
        onClick={() => {
          newPost();
        }}
        className="button-6"
      >
        Login Auth
      </button>
      <div className="register">
        <label>Not register ? </label>
        <button onClick={registerRoute}>register</button>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default UserLoginBody;
