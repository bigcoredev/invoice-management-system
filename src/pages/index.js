import { Routes, Route } from "react-router-dom";
import Signup from "../components/home/SignupDialog";
import Login from "../components/home/LoginDialog";
import ForgotPassword from "../components/home/ForgotPasswordDialog";
import { useEffect, useState } from "react";
import { HomeStyled } from "../components/home/styled";
import { CustomAlert } from "../components/utilities/CustomAlert";
import { useSelector } from "react-redux";

const AppRoutes = () => {
  const [userInfo, setUserInfo] = useState({});

  const handleUserInfoChange = (newUserInfo) => {
    setUserInfo(newUserInfo);
  };

  const registerSuccess = useSelector((state) => state.auth.registerSuccess); 
  const loginSuccess = useSelector((state) => state.auth.loginSuccess);
  const loginFailure = useSelector((state) => state.auth.loginFailure);

  return (
      <HomeStyled>
        {registerSuccess && <CustomAlert severity={"success"} message={"User registered successfully!"}/>}
        {loginSuccess && <CustomAlert severity={"success"} message={"Login successfully!"}/>}
        {loginFailure && <CustomAlert severity={"error"} message={"Login Failed!"}/>}
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Login userInfo={userInfo} setUserInfo={handleUserInfoChange} />
            }
          />
          <Route
            path="/signup"
            element={
              <Signup userInfo={userInfo} setUserInfo={handleUserInfoChange} />
            }
          />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>
      </HomeStyled>
  );
};

export default AppRoutes;
