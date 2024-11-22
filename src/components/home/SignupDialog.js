import React, { useEffect, useState } from "react";
import { SignDialogStyled } from "./styled";
import { Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomInput from "../utilities/CustomInput";
import ICON_ACCOUNT from "../../assets/icons/account.svg";
import ICON_PASSWORD from "../../assets/icons/password.svg";
import ICON_EMAIL from "../../assets/icons/email.svg";
import { registerUser } from "../../services/userServices";
import SpinningLoader from "../utilities/SpinningLoader";
import { CustomAlert } from "../utilities/CustomAlert";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { REGISTER_SUCCESS } from "../../store/constants";

const Signup = ({ userInfo, setUserInfo }) => {
  const [name, setName] = useState(userInfo.name || "");
  const [email, setEmail] = useState(userInfo.email || "");
  const [password, setPassword] = useState(userInfo.password || "");
  const [validateName, setValidateName] = useState("");
  const [validateEmail, setValidateEmail] = useState("");
  const [validatePassword, setValidatePassword] = useState("");
  const [loadingIcon, setLoadingIcon] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidateName("");
    setValidateEmail("");
    setValidatePassword("");
    const userData = {
      name,
      email,
      password,
    };
    setUserInfo(userData);
    setLoadingIcon(true);
    const respond = await dispatch(registerUser(userData));
    setLoadingIcon(false);
    console.log("respond: ", respond);
    if (respond.status === 200 && respond.data.status === 400) {
      const errors = respond.data.errors;
      errors.forEach((error) => {
        if (error.type === "name") {
          setValidateName(error.message);
        }
        if (error.type === "email") {
          setValidateEmail(error.message);
        }
        if (error.type === "password") {
          setValidatePassword(error.message);
        }
      });
    }
    if (respond.data.status === 201) {
      dispatch({ type: REGISTER_SUCCESS });
      navigate("/");
    }

    if (respond.status === 200 && respond.data.status === 409) {
      setValidateEmail(respond.data.error);
    }
  };

  return (
    <SignDialogStyled>
      <Typography
        sx={{
          fontFamily: "Hanken Grotesk",
          fontSize: "36px",
          fontWeight: 700,
          lineHeight: "48px",
          textAlign: "center",
          textUnderlinePosition: "from-font",
          textDecorationSkipInk: "none",
          margin: "60px 60px 34px 60px",
        }}
      >
        Let's Get Started!
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="center">
        <CustomInput
          label={"Username"}
          placeholder={"Enter your username"}
          icon={ICON_ACCOUNT}
          value={name}
          setContent={setName}
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
          label={"Email"}
          placeholder={"Enter your email address"}
          icon={ICON_EMAIL}
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
          {validateEmail}
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
            marginBottom: "34px",
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
          Sign Up
          {loadingIcon && <SpinningLoader />}
        </Button>
      </Box>
      <Box
        sx={{
          width: "245px",
          height: "24px",
          gap: "16px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
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
          Already have an account?
          <Link
            to="/"
            style={{
              textDecoration: "none",
              marginLeft: "16px",
              color: "#3259E8",
            }}
          >
            Log in
          </Link>
        </Typography>
      </Box>
    </SignDialogStyled>
  );
};

export default Signup;
