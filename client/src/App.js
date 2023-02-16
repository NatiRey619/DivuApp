import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import MyReports from "./components/HomePage/HomePageNavPages/MyReports/MyReports";
import LogOut from "./components/HomePage/HomePageNavPages/LogOut/LogOut";
import PmManger from "./components/HomePage/HomePageNavPages/PmManger/PmManger";
import StartShift from "./components/HomePage/HomeBody/StartShift/StartShift";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import UserLoginPage from "./components/UserLoginPage/UserLoginPage";
import Footer from "./components/UserLoginPage/Footer/Footer";
import MyContext from "./MyContext";
import { useState } from "react";
import NotFound from "./components/HomePage/HomePageNavPages/NotFound/NotFound";

function App() {

  const [userInput, setUserInput] = useState([]);


  return (
    <BrowserRouter>
      <MyContext.Provider value={{ userInput, setUserInput }}>
        <div className="main">
          <Routes>
            <Route path="/" element={<UserLoginPage />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/myreports" element={<MyReports />} />
            <Route path="/logout" element={<LogOut />} />
            <Route path="/pmmanager" element={<PmManger />} />
            <Route path="*" element={<NotFound />} />

          </Routes>
        </div>
      </MyContext.Provider>
    </BrowserRouter>

    //sadsadad
  );
  
}

export default App;
