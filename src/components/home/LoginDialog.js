import React from "react";
import { LoginStyled } from "./utilities";
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

const Login = () => {
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
        Welcome Back!
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="center" >
        <CustomInput
          label={"Username"}
          placeholder={"Enter your username"}
          icon={ICON_ACCOUNT}
        />
        <CustomInput
          label={"Password"}
          placeholder={"Create a password"}
          icon={ICON_PASSWORD}
          isPassword={true}
        />
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
        >
          Get Started
        </Button>
      </Box>

      <Box style={{display: "flex", justifyContent: "space-between", alignItems: "center", margin: "11px 60px 0 60px"}}>
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
          Forgot your password?
        </Typography>
      </Box>

      <Box
        sx={{
          width: "245px",
          height: "24px",
          gap: "16px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "25px auto",
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
    </LoginStyled>
  );
};

export default Login;
