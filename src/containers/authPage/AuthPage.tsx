import { Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import Login from "./login/Login";
import Signup from "./signup/Signup";
import classes from "./auth-page.module.css";

const AuthPage = () => {
  const [isSignUpPage, setIsSignupPage] = useState(false);
  const handleSignupToggle = () => {
    setIsSignupPage((value) => !value);
  };

  return (
    <Grid
      container
      bgcolor={"#fafafa"}
      minHeight={"700px"}
      display="flex"
      gap="15px"
      justifyContent="center"
      direction="column"
      alignItems="center"
    >
      <Grid
        container
        width="fit-content"
        padding={5}
        item
        display="flex"
        direction="column"
        alignItems="center"
        bgcolor={"white"}
        border="1px solid #dbdbdb"
      >
        <Grid item xs={12}>
          <img
            className={classes.logo}
            src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
            alt="logo"
          />
        </Grid>
        <Grid item>
          {isSignUpPage ? <Signup formChange={setIsSignupPage} /> : <Login />}
        </Grid>
      </Grid>
      <Grid
        container
        item
        width="380px"
        padding="15px 0"
        display="flex"
        direction="column"
        alignItems="center"
        bgcolor={"white"}
        border="1px solid #dbdbdb"
      >
        <Typography>
          Don't have an account?
          <Button onClick={handleSignupToggle}>{`${
            isSignUpPage ? "Login" : "Signup"
          }`}</Button>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default AuthPage;
