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



  var jsonData = {
    ExistUser: [
      {
        username: userInput,
        password: passInput,
      },
    ],
  };





  const newPost = async () => {
    try {
        const response = await fetch('http://localhost:8000/api/users/login/', {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json',
           },
           body: JSON.stringify({username: userInput,
            password: passInput,
          })  })
        

 
        const loginSuc = await response.json();
        console.log(loginSuc)
        return navigate(`/homepage`)
      } catch (error) {
          console.error(error)
      }
    } 
    



  const postData = async () => {

    
    const requestOptions = {
                    method: 'POST',
                   headers: { 'Content-Type': 'application/json' },
                   body: JSON.stringify({
                    username: userInput,
                    password: passInput,
                  })            }
                  
        const response = await fetch('http://localhost:8000/api/users/login/', requestOptions )

        const loginresp = await response.json()
        console.log(loginresp)
        .then(() =>  navigate(`/homepage`)// enter you logic when the fetch is successful
        )
         .catch(error => {
           // enter your logic for when there is an error (ex. error toast)
          console.log(error)
         })
       
    }



  function checkUserLoginAuth(username,password) {
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
      })
      
    })
    

    
    // .then(data => {
    //  // enter you logic when the fetch is successful
    //   console.log(data)


    // })
    // .catch(error => {
    // // enter your logic for when there is an error (ex. error toast)
    //  console.log(error)
    // })  
    
 
     
    }

  const loginCheck = (username, pass) =>
  // need to add redirect for admin users

  userList.map((user) => { 
    
     console.log(user)

        

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
        className="button-6"
      > 
        Login
      </button>
      <button
        onClick={() => {

          newPost()




        }}
        
        
        
        className="button-6"
      >
        Login Auth
      </button>
    </div>
  ) : (
    <Loading />
  );
};

export default UserLoginBody;
 