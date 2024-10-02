import React from "react";
import LoginForm from "./components/LoginForm";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import NewPasswordSet from "./components/NewPasswordSet";
import SuccessLogin from "./components/SuccessLogin";
import AdminForm from "./components/AdminForm";
const App = () => {
  return (
    <div>
      <LoginForm />
      <ForgotPassword />
      <ResetPassword />
      <NewPasswordSet />
      <SuccessLogin />
      <AdminForm />
    </div>
  );
};

export default App;
