import { Grid, Typography } from "@mui/material";
import { FC } from "react";
import Captions from "../captions/Captions";
import Comment from "./Comment";

interface props {
  comments: [];
  user: string;
  content: string;
}
const CommentSection: FC<props> = ({ comments, user, content }) => {
  return (
    <Grid
      item
      border="1px solid #efefef "
      borderLeft={0}
      borderRight={0}
      container
      padding={1}
      display="flex"
      flexWrap="nowrap"
      paddingLeft={1}
      flexGrow={1}
      marginBottom={2}
      overflow="auto"
      maxHeight={{ xs: 1000, md: 450 }}
      direction="column"
      sx={{ overflowX: "hidden" }}
    >
      <Captions caption={content} user={user} />
      <Typography variant="body2" paddingLeft={1.3} color="#929292">
        2h
      </Typography>
      {comments.map((val: any) => {
        return <Comment data={val} key={val._id} user={val.user} />;
      })}
    </Grid>
  );
};

export default CommentSection;
