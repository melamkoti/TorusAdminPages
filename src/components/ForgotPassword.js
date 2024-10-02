import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import {
  MainContainer,
  FormContainer,
  StyledForm,
  WelcomeText,
  StyledButton,
  Resetpassword,
  RightDevision,
} from "./styles/FormContainer";
const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <MainContainer>
      <FormContainer>
        <StyledForm component="form" onSubmit={handleSubmit(onSubmit)}>
          <WelcomeText variant="h4" sx={{ marginBottom: 6 }}>
            Forgot Password
          </WelcomeText>

          <TextField
            fullWidth
            label="Email"
            type="email"
            {...register("email", { required: "Email is required" })}
            error={!!errors.email}
            sx={{
              marginBottom: 2,
            }}
          />

          <StyledButton type="submit" fullWidth variant="contained">
            Reset Password
          </StyledButton>
          <Box marginTop={6} display="flex" justifyContent="center">
            <ArrowBackIcon /> &nbsp; &nbsp; Back to
            <Resetpassword href="#"> &nbsp; Log in</Resetpassword>
          </Box>
        </StyledForm>
      </FormContainer>
      <RightDevision></RightDevision>
    </MainContainer>
  );
};

export default ForgotPassword;
