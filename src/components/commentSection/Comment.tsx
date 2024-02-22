import { Grid, Typography } from "@mui/material";
import { FC } from "react";
import Captions from "../captions/Captions";
import StoryIcon from "../story/StoryIcon";

interface props {
  data: {
    content: string;
  };
  user: {
    _id: string;
    username: string;
  };
}
const Comment: FC<props> = ({ data, user }) => {
  return (
    <Grid container gap={2} margin={1}>
      <Grid item width="fit-content">
        <StoryIcon dimention="40px" type="withStory" />
      </Grid>
      <Grid
        item
        container
        xs={10}
        display="flex"
        marginTop={1}
        flexWrap="wrap"
        height={"fit-content"}
        direction="column"
      >
        <Captions caption={data.content} user={user.username} />
        <Typography variant="body2" paddingLeft={1.3} color="#929292">
          2h
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Comment;
