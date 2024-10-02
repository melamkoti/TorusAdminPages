import styled from "styled-components";
import { TextField, Button } from "@mui/material";
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

export const StyledTextField = styled(TextField)`
  margin-bottom: 20px;
`;

export const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const SignupButton = styled(Button)`
  width: 100%;
  padding: 10px;
  background-color: #162d3a !important;
  color: white;
`;

export const businessOptions = [
  { label: "Business 1", value: "business1" },
  { label: "Business 2", value: "business2" },
  // Add more options here
];
