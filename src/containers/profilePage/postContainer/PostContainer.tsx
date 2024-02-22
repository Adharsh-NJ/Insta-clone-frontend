import { Grid } from "@mui/material";
import { FC } from "react";

import PostContainerCard from "./PostContainerCard";

interface props {
  userData: any;
}
const PostContainer: FC<props> = ({ userData }) => {
  return (
    <Grid
      container
      borderTop="2px solid #eaeaea"
      spacing={{ xs: 0.5, md: 3 }}
      marginBottom={10}
      gap={0}
      minHeight={"fit-content"}
    >
      {Array.isArray(userData.posts) &&
        userData.posts.map((val: any) => {
          return (
            <PostContainerCard
              data={val}
              username={userData.username}
              key={val._id}
            />
          );
        })}
    </Grid>
  );
};

export default PostContainer;
