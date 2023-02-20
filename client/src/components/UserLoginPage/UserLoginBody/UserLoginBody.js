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

    const registerRoute = () =>{ 
      let path = `/register`; 
      navigate(path);
    }

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
      setIsLoading(false)
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

//   return (
//     <div className="user-login-body">
//       <h3>WELCOME TO DIVUAPP</h3>
//       <div className="input-field">
//         <input
//           onChange={(e) => {
//             setUserInput(e.target.value);
//           }}
//           type="text"
//           placeholder="Please enter your User name"
//         />
//         <input
//           onChange={(e) => {
//             isPassBiggerThenFive(e.target.value);
//             setPassInput(e.target.value);
//           }}
//           type="number"
//           placeholder="Please enter your Password"
//         />
//         {/* <p className={!passFiveDigits ? "helper-text-input" : "hidden"}>
//           The Password must contain at least five digits
//         </p> */}
//         {error && <p>{error}</p>}
//       </div>
//       <div className="remember-me-checkbox">
//         <input className="checkbox" type="checkbox" />
//         <label>Remember me</label>
//       </div>

//       <button
//         onClick={() => {
//           loginCheck(userInput, passInput);
//         }}
//         className="button-6"
//       >
//         Login
//       </button>
//     </div>
//   );
// };

  return ! isLoading ? (
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
        <input
          onChange={(e) => {
            isPassBiggerThenFive(e.target.value);
            setPassInput(e.target.value);
          }}
          type="text"
          placeholder="Please enter your Password"
        />
        {/* <p className={!passFiveDigits ? "helper-text-input" : "hidden"}>
          The Password must contain at least five digits
        </p> */}
        {error && <p>{error}</p>}
      </div>
      <div className="remember-me-checkbox">
        <input className="checkbox" type="checkbox" />
        <label>Remember me</label>
      </div>
      <p onClick={registerRoute}>register</p>
      <button
        onClick={() => {
          loginCheck(userInput, passInput);
        }}
        className="button-6">
        Login
      </button>
      
    </div>
  ) : (
    <Loading />
  );
};

export default UserLoginBody;
