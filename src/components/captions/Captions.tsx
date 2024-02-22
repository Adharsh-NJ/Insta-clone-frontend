import { Grid, Typography } from "@mui/material";
import { FC } from "react";
import classes from "./captions.module.css";
interface props {
  caption: string;
  user: string;
}
const Captions: FC<props> = ({ caption, user }) => {
  return (
    <Grid item textAlign={"left"} marginLeft={1}>
      <Typography>
        <span className={classes.userName}>{user}</span> {caption}
      </Typography>
    </Grid>
  );
};

export default Captions;
