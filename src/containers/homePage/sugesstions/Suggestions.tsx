import { Button, Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import ProfileDetails from "../../../components/profileDetail/ProfileDetails";

const Suggestions = () => {
  const user = useSelector((state: any) => state.login.user.username);
  return (
    <Grid item display="flex" maxHeight={50} xs={12}>
      <ProfileDetails type="none" username={user} />
      <Button>switch</Button>
    </Grid>
  );
};

export default Suggestions;
