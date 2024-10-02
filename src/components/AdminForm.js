import React from "react";
import { IconButton, InputAdornment, MenuItem } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useForm } from "react-hook-form";

import {
  FormContainer,
  FormTitle,
  StyledTextField,
  businessOptions,
  FormRow,
  SignupButton,
  StyledForm,
} from "./styles/AdminFormStyles";

export default function AdminForm() {
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
    console.log("stubmit Form", data);
  };

  return (
    <FormContainer>
      <FormTitle>Create an Admin</FormTitle>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledTextField
          select
          fullWidth
          label="Select your Business Name"
          variant="outlined"
          defaultValue=""
          {...register("businessName", { required: true })}
        >
          {businessOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </StyledTextField>
        <StyledTextField
          fullWidth
          label="Phone Number"
          type="number"
          variant="outlined"
          {...register("phoneNumber", { required: "Phone is required" })}
          error={!!errors.phoneNumber}
        />

        <FormRow>
          <StyledTextField
            fullWidth
            label="First Name"
            variant="outlined"
            type="text"
            {...register("firstName")}
            error={!!errors.firstName}
          />
          <StyledTextField
            fullWidth
            label="Middle Name"
            variant="outlined"
            type="text"
            {...register("middleName")}
            error={!!errors.middleName}
          />
          <StyledTextField
            fullWidth
            label="Last Name"
            variant="outlined"
            type="text"
            {...register("lastName")}
            error={!!errors.lastName}
          />
        </FormRow>

        <StyledTextField
          fullWidth
          label="Email Address"
          variant="outlined"
          type="email"
          {...register("email", { required: "email is required" })}
          error={!!errors.email}
        />

        <StyledTextField
          fullWidth
          label="Create Password"
          variant="outlined"
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
            errors.password ? errors.password.message : "At least 8 characters"
          }
        />

        <SignupButton type="submit" fullWidth variant="contained">
          Sign up
        </SignupButton>
      </StyledForm>
    </FormContainer>
  );
}
