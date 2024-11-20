import React, { useEffect, useState } from "react";
import { SignDialogStyled } from "./utilities";
import { Typography, Box, Button } from "@mui/material";
import CustomInput from "../utilities/CustomInput";
import ICON_ACCOUNT from "../../assets/icons/account.svg";
import ICON_PASSWORD from "../../assets/icons/password.svg";
import ICON_EMAIL from "../../assets/icons/email.svg";
import ICON_LOADING from "../../assets/icons/nonicons_loading.svg";

const Signup = ({userInfo, setUserInfo}) => {

  const [username, setUsername] = useState(userInfo.name || "");
  const [email, setEmail] = useState(userInfo.email || "");
  const [password, setPassword] = useState(userInfo.password || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username,
      email,
      password,
    };
    setUserInfo(userData);
    
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
          value={username}
          setContent={setUsername}
        />
        <CustomInput
          label={"Email"}
          placeholder={"Enter your email address"}
          icon={ICON_EMAIL}
          value={email}
          setContent={setEmail}
        />
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
          Password must have at least 8 characters, 1 lowercase, 1 uppercase,
          1 number, and 1 special character.
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
          <img src={ICON_LOADING} alt="Loading icon" style={{ width: 20, height: 20 }}></img>
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
          <a
            href="/"
            style={{
              textDecoration: "none",
              marginLeft: "16px",
              color: "#3259E8",
            }}
          >
            Log in
          </a>
        </Typography>
      </Box>
    </SignDialogStyled>
  );
};

export default Signup;
