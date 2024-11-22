import React from "react";
import { Typography, Box, Button } from "@mui/material";
import CustomInput from "../utilities/CustomInput";
import ICON_EMAIL from "../../assets/icons/email.svg";
import { ForgotPasswordStyled } from "./styled";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <ForgotPasswordStyled>
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
        Forgot Your Password?
        <Typography
          sx={{
            fontFamily: "Hanken Grotesk",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "24px",
            textAlign: "center",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
            marginTop: "12px",
            color: "#717F92",
          }}
        >
          Enter your email address here and we'll send you <br />a link to
          change your password.
        </Typography>
      </Typography>

      <CustomInput
        label={"Email"}
        placeholder={"Enter your email address"}
        icon={ICON_EMAIL}
      />
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
          Send Me Reset Instruction
        </Button>
      </Box>

      <Typography
        sx={{
          fontFamily: "Hanken Grotesk",
          fontSize: "16px",
          fontWeight: "600",
          lineHeight: "24px",
          textAlign: "center",
          textUnderlinePosition: "from-font",
          textDecorationSkipInk: "none",
          color: "#3259E8",
          marginTop: "34px",
          cursor: "pointer",
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            marginLeft: "16px",
            color: "#3259E8",
          }}
        >
          Back to Login page
        </Link>
      </Typography>
    </ForgotPasswordStyled>
  );
};

export default ForgotPassword;
