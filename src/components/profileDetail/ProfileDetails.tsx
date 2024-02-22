import { Grid, Typography } from "@mui/material";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import classes from "./profileDetails.module.css";
import StoryIcon from "../story/StoryIcon";
interface props {
  type: string;
  username: string;
  id?: string;
}
const ProfileDetails: FC<props> = ({ type, username, id }) => {
  const renderSub = (type: string, username: string) => {
    switch (type) {
      case "withLocation":
        return <Typography>Wayanad kerala</Typography>;
      case "withName":
        return <Typography>{username}</Typography>;
      case "none":
        return null;
    }
  };
  return (
    <Grid item display="flex" width="100%" padding="15px">
      <StoryIcon dimention="42px" type="withStory" />
      <Grid marginLeft={"20px"} textAlign="left">
        <Typography fontWeight={"bold"} fontSize={15}>
          {id ? (
            <Link
              to={{ pathname: "/profile" }}
              className={classes.link}
              state={id}
            >
              {username}
            </Link>
          ) : (
            username
          )}
        </Typography>
        {renderSub(type, username)}
      </Grid>
    </Grid>
  );
};

export default ProfileDetails;
