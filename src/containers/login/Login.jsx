import React from "react";
import { useState, useEffect } from "react";
import LoginForm from "./components/LoginForm.jsx";
import LoginTemplate from "../../components/LoginTemplate";
import { PUBLIC, PRIVATE } from "../../constants/routes";
import { USERS_VALUES, AUTHENTICATED_USER } from "../../constants/localStorage";
import { Name } from "../../constants/name";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [storedUsers, setStoredUsers] = useState([]);
  const [user, setUser] = useState("");
  const history = useHistory();

  useEffect(() => {
    setStoredUsers(JSON.parse(localStorage.getItem([USERS_VALUES])));
  }, []);

  const handleChange = (attribute) => {
    return (event) => {
      setUser({
        ...user,
        [attribute]: event.target.value,
      });
    };
  };

  const handleSubmitLogin = (event) => {
    event.preventDefault();

    const matchedUser = storedUsers.find(
      ({ email, password }) => email == user.email && password == user.password
    );

    if (matchedUser) {
      history.push(PRIVATE.DASHBOARD);
      localStorage.setItem(AUTHENTICATED_USER, JSON.stringify(matchedUser));
    } else {
      alert("email and password don't match");
    }
  };

  const handleChangeEmail = handleChange("email");
  const handleChangePassword = handleChange("password");

  return (
    <LoginTemplate
      title={Name}
      subtitle="Nice to see you around here! 
        Please log in first."
      leftLink={{
        label: "Forgot password?",
        to: PUBLIC.FORGOT_PASSWORD,
      }}
      rightLink={{
        label: "First time here? Sign in",
        to: PUBLIC.SIGN_IN,
      }}
    >
      <LoginForm
        onChangeEmail={handleChangeEmail}
        onChangePassword={handleChangePassword}
        onClickSubmit={handleSubmitLogin}
        email={user.email}
        password={user.password}
      />
    </LoginTemplate>
  );
}
