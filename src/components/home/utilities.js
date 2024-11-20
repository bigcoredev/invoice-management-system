import { styled } from "@mui/system";
import BACKGROUND_IMG from "../../assets/bg.png";

export const HomeStyled = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  Width: "100vw",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundImage: `url(${BACKGROUND_IMG})`,
});

export const SignDialogStyled = styled("div")({
  width: "580px",
  height: "auto",
  padding: "0px 0px 60px 0px",
  gap: "34px",
  borderRadius: "40px",
  backgroundColor: "white",
  boxShadow: "30px 30px 30px 30px #0B1B561A",
});

export const LoginStyled = styled("div")({
  width: "580px",
  height: "582px",
  padding: "0px 0px 0px 0px",
  gap: "34px",
  borderRadius: "40px",
  backgroundColor: "white",
  boxShadow: "30px 30px 30px 30px #0B1B561A",
});

export const ForgotPasswordStyled = styled("div")({
    width: "580px",
    height: "494px",
    padding: "0px 0px 0px 0px",
    gap: "34px",
    borderRadius: "40px",
    backgroundColor: "white",
    boxShadow: "30px 30px 30px 30px #0B1B561A",
  });
  