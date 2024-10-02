import React from "react";
import { Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import {
  MainContainer,
  FormContainer,
  StyledForm,
  WelcomeText,
  Resetpassword,
  RightDevision,
} from "./styles/FormContainer";
const SuccessLogin = () => {
  return (
    <MainContainer>
      <FormContainer>
        <StyledForm>
          <WelcomeText variant="h4" sx={{ marginBottom: 1 }}>
            All done!
          </WelcomeText>

          <Box display="flex" justifyContent="center">
            Your password has been reset.{" "}
          </Box>
          <Box marginTop={4} display="flex" justifyContent="center">
            <ArrowBackIcon />
            &nbsp;&nbsp; Back to
            <Resetpassword href="#"> &nbsp; Log in</Resetpassword>
          </Box>
        </StyledForm>
      </FormContainer>
      <RightDevision></RightDevision>
    </MainContainer>
  );
};

export default SuccessLogin;
