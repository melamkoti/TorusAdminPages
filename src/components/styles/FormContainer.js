import { Button, Typography, Box, TextField } from "@mui/material";

import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  height: 100%;
  margin: 20px;
  position: relative;
`;

export const FormContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 50%;
`;

export const StyledForm = styled(Box)`
  width: 400px;
  padding: 30px;
  background-color: white;
  border-radius: 10px;
`;

export const WelcomeText = styled(Typography)`
  font-size: 42px;
  text-align: center;
`;

export const FooterText = styled(Typography)`
  text-align: center;
  color: #aaa;
  margin-top: 40px;
`;
export const StyledButton = styled(Button)`
  padding: 12px;
  background-color: #162d3a !important;
  color: white;
`;

export const ForgotPasswordLink = styled.a`
  text-decoration: none;
  color: #1e4ae9;
  font-size: 14px;
`;
export const RightDevision = styled.div`
  width: 50%;
  background-color: #bfbdbd;
  opacity: 0.3;
  border-radius: 30px;
`;

export const Boxcenter = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0px;
`;
export const Resetpassword = styled.a`
  text-decoration: none;
  color: #1e4ae9;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledTextField = styled(TextField)`
  margin-bottom: 20px;
`;
