import React from "react";
import { Box, Typography, TextField, Link } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styled from "styled-components";
import {
  MainContainer,
  FormContainer,
  RightDevision,
  StyledButton,
  Resetpassword,
} from "./styles/FormContainer";

const CodeInput = styled(TextField)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  margin-right: 10px;
  font-size: 20px;

  & .MuiOutlinedInput-root {
    border-radius: 5px;
    text-align: center;
  }
`;

const ResetPassword = () => {
  return (
    <MainContainer>
      <FormContainer>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            padding: "20px",
            maxWidth: "400px",
            margin: "10px",
            textAlign: "center",
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: "10px" }}>
            Password reset
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: "20px" }}>
            We sent a code to{" "}
            <Link href="#" underline="hover">
              email@email.com
            </Link>
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "30px",
              marginBottom: "20px",
            }}
          >
            <CodeInput variant="outlined" inputProps={{ maxLength: 1 }} />
            <CodeInput variant="outlined" inputProps={{ maxLength: 1 }} />
            <CodeInput variant="outlined" inputProps={{ maxLength: 1 }} />
            <CodeInput variant="outlined" inputProps={{ maxLength: 1 }} />
          </Box>

          <StyledButton type="submit" fullWidth variant="contained">
            continue
          </StyledButton>
          <Typography variant="body2" sx={{ marginTop: "20px" }}>
            Didn’t receive the email?{" "}
            <Link href="#" underline="hover">
              Click to resend
            </Link>
          </Typography>

          <Box
            sx={{ display: "flex", alignItems: "center", marginTop: "20px" }}
          >
            <Box marginTop={4} display="flex" justifyContent="center">
              <ArrowBackIcon /> &nbsp; &nbsp; Back to
              <Resetpassword href="#"> &nbsp; Log in</Resetpassword>
            </Box>
          </Box>
        </Box>
      </FormContainer>
      <RightDevision></RightDevision>
    </MainContainer>
  );
};

export default ResetPassword;
