import React from "react";
import { useState } from "react";
import { LoginStyled } from "./styled";
import {
  Typography,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import CustomInput from "../utilities/CustomInput";
import ICON_ACCOUNT from "../../assets/icons/account.svg";
import ICON_PASSWORD from "../../assets/icons/password.svg";
import { Link } from "react-router-dom";
import SpinningLoader from "../utilities/SpinningLoader";
import { loginUser } from "../../services/userServices";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGIN_FAILURE, LOGIN_SUCCESS } from "../../store/constants";

const Login = ({ userInfo, setUserInfo }) => {

  const [email, setEmail] = useState(userInfo.email || "");
  const [password, setPassword] = useState(userInfo.password || "");
  const [validateName, setValidateName] = useState("");
  const [validatePassword, setValidatePassword] = useState("");
  const [loadingIcon, setLoadingIcon] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidateName("");
    setValidatePassword("");
    const userData = {
      email,
      password,
    };
    setUserInfo(userData);
    setLoadingIcon(true);
    const respond = await dispatch(loginUser(userData));
    setLoadingIcon(false);
    console.log("respond: ", respond);
    if (respond.status === 200 && respond.data.status === 400) {
      const errors = respond.data.errors;
      errors.forEach((error) => {
        if (error.type === "email") {
          setValidateName(error.message);
        }
        if (error.type === "password") {
          setValidatePassword(error.message);
        }
      });
      dispatch({type: LOGIN_FAILURE});
    }
    if(respond.status === 200 && respond.data.status === 401 ){
      dispatch({type: LOGIN_FAILURE});
    }
    if (respond.data.status === 200) {
      dispatch({ type: LOGIN_SUCCESS });
      navigate("/dashboard");
    }

  };
 
  return (
    <LoginStyled>
      <Typography
        sx={{
          fontFamily: "Hanken Grotesk",
          fontSize: "36px",
          fontWeight: 700,
          lineHeight: "48px",
          textAlign: "center",
          textUnderlinePosition: "from-font",
          textDecorationSkipInk: "none",
          margin: "60px 60px 24px 60px",
        }}
      >
        Welcome!
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="center">
        <CustomInput
          label={"Username"}
          placeholder={"Enter your username"}
          icon={ICON_ACCOUNT}
          value={email}
          setContent={setEmail}
        />
        <Typography
          sx={{
            color: "red",
            fontFamily: "Hanken Grotesk",
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "20px",
            textAlign: "left",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
            margin: "0 60px 0 60px",
          }}
        >
          {validateName}
        </Typography>
        <CustomInput
          label={"Password"}
          placeholder={"Create a password"}
          icon={ICON_PASSWORD}
          isPassword={true}
          value={password}
          setContent={setPassword}
        />
        <Typography
          sx={{
            color: "red",
            fontFamily: "Hanken Grotesk",
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "20px",
            textAlign: "left",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
            margin: "0 60px 0 60px",
          }}
        >
          {validatePassword}
        </Typography>
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          sx={{
            width: "460px",
            height: "56px",
            padding: "16px 14px 16px 14px",
            gap: "10px",
            borderRadius: "8px",
            marginTop: "34px",
            textTransform: "none",
            fontFamily: "Hanken Grotesk",
            fontSize: "16px",
            fontWeight: "600",
            lineHeight: "24px",
            textAlign: "left",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
            backgroundColor: "#3259E8",
          }}
          onClick={handleSubmit}
        >
          Get Started{loadingIcon && <SpinningLoader />}
        </Button>
      </Box>

      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "11px 60px 0 60px",
        }}
      >
        <FormControlLabel
          control={<Checkbox name="rememberMe" color="primary" />}
          label="Remember me"
          sx={{
            fontFamily: "Hanken Grotesk",
            fontSize: "14px",
          }}
        />
        <Typography
          sx={{
            fontFamily: "Hanken Grotesk",
            fontSize: "16px",
            fontWeight: "600",
            lineHeight: "24px",
            textAlign: "left",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
            color: "#3259E8",
          }}
        >
          <Link
            to="/forgotpassword"
            style={{
              textDecoration: "none",
              marginLeft: "16px",
              color: "#3259E8",
            }}
          >
            Forgot your password?
          </Link>
        </Typography>
      </Box>

      <Box
        sx={{
          width: "260px",
          height: "24px",
          gap: "16px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "25px auto 0px auto",
          "& a": {
            fontFamily: "Hanken Grotesk",
            fontSize: "16px",
            fontWeight: 600,
            lineHeight: "24px",
            textAlign: "left",
            textDecorationLine: "underline",
            color: "#0B1B57",
          },
        }}
      >
        <Typography sx={{ color: "#717F92" }}>
          Not have an account yet?
          <Link
            to="/signup"
            style={{
              textDecoration: "none",
              marginLeft: "16px",
              color: "#3259E8",
            }}
          >
            Sign in
          </Link>
        </Typography>
      </Box>
    </LoginStyled>
  );
};

export default Login;
