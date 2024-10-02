import React from "react";
import { useForm } from "react-hook-form";
import { TextField, IconButton, MenuItem, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import {
  MainContainer,
  FormContainer,
  StyledForm,
  WelcomeText,
  FooterText,
  StyledButton,
  ForgotPasswordLink,
  RightDevision,
  Boxcenter,
} from "./styles/FormContainer";

const LoginForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
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
            Welcome Torus 👋
          </WelcomeText>

          <TextField
            select
            fullWidth
            label="Select"
            defaultValue="Torus"
            {...register("selectOption", { required: true })}
            sx={{ marginBottom: 2 }}
          >
            <MenuItem value="Torus">Torus</MenuItem>
            <MenuItem value="Algo">Algo</MenuItem>
          </TextField>

          <TextField
            fullWidth
            label="Email"
            type="email"
            {...register("email", { required: "Email is required" })}
            error={!!errors.email}
            sx={{ marginBottom: 2 }}
          />

          <TextField
            fullWidth
            label="Password"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
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

          <Boxcenter display="flex" justifyContent="flex-end" marginBottom={2}>
            <ForgotPasswordLink href="#">Forgot Password?</ForgotPasswordLink>
          </Boxcenter>

          <StyledButton type="submit" fullWidth variant="contained">
            Sign in
          </StyledButton>

          <FooterText variant="body2" sx={{ marginTop: 10 }}>
            © 2024 ALL RIGHTS RESERVED
          </FooterText>
        </StyledForm>
      </FormContainer>
      <RightDevision></RightDevision>
    </MainContainer>
  );
};

export default LoginForm;
