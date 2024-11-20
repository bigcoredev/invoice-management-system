import React, { useEffect, useState } from "react";
import { HomeStyled } from "../../components/home/utilities";
import Signup from "../../components/home/SignupDialog";
import Login from "../../components/home/LoginDialog";
import ForgotPassword from "../../components/home/ForgotPasswordDialog";

const Home = () => {
  
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleUserInfoChange = (userInfo) => {
    setUserInfo(userInfo); 
  };

  return (
  <HomeStyled>
    <Signup userInfo={userInfo} setUserInfo={handleUserInfoChange}/>
  </HomeStyled>
  )
};

export default Home;
