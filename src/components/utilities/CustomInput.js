import React, { useState } from "react";
import { TextField, Typography, Box, InputAdornment, IconButton } from "@mui/material";
import ICON_EYE from "../../assets/icons/trueeye.svg"; 
import ICON_EYE_OFF from "../../assets/icons/falseeye.svg"; 

const CustomInput = ({ label, placeholder, icon, value, isPassword, setContent}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={1}
      width="100%"
      sx={{
        width: "460px",
        height: "84px",
        gap: "8px",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "10px",
        marginBottom: "10px",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Hanken Grotesk",
          fontSize: "14px",
          fontWeight: 600,
          lineHeight: "20px",
          textAlign: "left",
        }}
      >
        {label}
      </Typography>
      <TextField
      onChange={(e)=>
        setContent(e.target.value)
      }
        type={isPassword && !showPassword ? "password" : "text"}
        placeholder={placeholder}
        variant="outlined"
        fullWidth
        value={value}
        sx={{
          fontFamily: "Hanken Grotesk, sans-serif",
          fontSize: "16px",
          fontWeight: 600,
          lineHeight: "24px",
          width: "460px",
          height: "56px",
          gap: "12px",
          borderRadius: "8px",
          backgroundColor: "#EEEEEE",
          "& .MuiOutlinedInput-root": {
            outline: "none",
            border: "none",
            "& fieldset": {
              border: "none",
            },
          },
          "& .MuiOutlinedInput-root.Mui-focused": {
            border: "1px solid #3259E8",
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Box
                style={{
                  width: "24px",
                  height: "24px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={icon} alt="icon" style={{ width: 20, height: 20 }} />
              </Box>
            </InputAdornment>
          ),
          endAdornment: isPassword ? (
            <InputAdornment position="end">
              <IconButton
                onClick={handleTogglePasswordVisibility}
                edge="end"
                aria-label="toggle password visibility"
              >
                <img
                  src={showPassword ? ICON_EYE : ICON_EYE_OFF}
                  alt="toggle visibility"
                  style={{ width: 24, height: 24 }}
                />
              </IconButton>
            </InputAdornment>
          ) : null,
        }}
      >
      </TextField>
    </Box>
  );
};

export default CustomInput;
