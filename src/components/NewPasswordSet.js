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
  RightDevision,
  Resetpassword,
} from "./styles/FormContainer";
const NewPasswordSet = () => {
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
            Set new password
          </WelcomeText>

          <TextField
            fullWidth
            label="  New Password"
            type="password"
            {...register("password", {
              required: "Password is required",
              pattern: "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
            error={!!errors.password}
            helperText={
              errors.password
                ? errors.password.message
                : "At least 8 characters"
            }
            sx={{ marginBottom: 2 }}
          />

          <TextField
            fullWidth
            label=" Confirm New Password"
            type="password"
            {...register("password", {
              required: "Password is required",
              pattern: "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
            error={!!errors.password}
            helperText={
              errors.password
                ? errors.password.message
                : "At least 8 characters"
            }
            sx={{ marginBottom: 2 }}
          />

          <StyledButton type="submit" fullWidth variant="contained">
            Reset Password
          </StyledButton>
          <Box marginTop={6} display="flex" justifyContent="center">
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

export default NewPasswordSet;
