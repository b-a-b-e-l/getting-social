import React from "react";
import { useState } from "react";
import LoginForm from "../login/components/LoginForm.jsx";
import LoginTemplate from "../../components/LoginTemplate";
import { PUBLIC } from "../../constants/routes";
import { USERS_VALUES } from "../../constants/localStorage";
import { useHistory } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

export default function Signin() {
  const [user, setUser] = useState(initialValues);
  const history = useHistory();

  const handleChange = (attribute) => {
    return (event) => {
      setUser({
        ...user,
        [attribute]: event.target.value,
      });
    };
  };

  const handleSubmitSignin = (event) => {
    event.preventDefault();
    localStorage.setItem(USERS_VALUES, JSON.stringify([user]));
    history.push("/login");
  };

  const handleChangeEmail = handleChange("email");
  const handleChangePassword = handleChange("password");

  return (
    <LoginTemplate
      subtitle="Welcome! Please create an account to start."
      leftLink={{
        label: "Already have an account? Log in here",
        to: PUBLIC.LOGIN,
      }}
    >
      <LoginForm
        onChangeEmail={handleChangeEmail}
        onChangePassword={handleChangePassword}
        onClickSubmit={handleSubmitSignin}
        email={user.email}
        password={user.password}
      />
    </LoginTemplate>
  );
}
