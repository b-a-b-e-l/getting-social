import React from "react";
import LoginTemplate from "../../components/LoginTemplate";
import ButtonCentered from "../../components/ButtonCentered";
import ResponsiveBox from "../../components/ResponsiveBox";
import { PUBLIC } from "../../constants/routes";
import { TextField, Button } from "@material-ui/core";

export default function ForgotPassword() {
  return (
    <LoginTemplate
      subtitle="We will send you a link to reset your password."
      leftLink={{
        label: "Log in with email and password",
        to: PUBLIC.LOGIN,
      }}
      rightLink={{
        label: "First time here? Sign in",
        to: PUBLIC.SIGN_IN,
      }}
    >
      <ResponsiveBox md={{ minWidth: "590px" }}>
        <form autoComplete="off" onSubmit="handleForgotForm">
          <TextField
            name="email"
            label="email"
            variant="outlined"
            placeholder="email@domain.com"
            fullWidth
          />
          <ButtonCentered>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </ButtonCentered>
        </form>
      </ResponsiveBox>
    </LoginTemplate>
  );
}
