import React from "react";
import styled, { keyframes } from "styled-components";
import { Alert } from "@mui/material";

// Define the slide-down animation
const slideDown = keyframes`
  from {
    transform: translateX(-50%) translateY(-100%);
  }
  to {
    transform: translateX(-50%) translateY(0);
  }
`;

const slideUp = keyframes`
  0% {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateX(-50%) translateY(-20px);
    opacity: 0;
  }
`;

// Styled component for the Alert with animation
const StyledAlert = styled(Alert)`
  position: fixed;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 400px;
  z-index: 9999;
  animation: ${slideDown} 0.5s ease-out, ${slideUp} 1s 1.5s forwards;
`;

export const CustomAlert = ({severity, message}) => {
  return (
    <StyledAlert severity={severity} variant="filled">
      {message}
    </StyledAlert>
  );
};
