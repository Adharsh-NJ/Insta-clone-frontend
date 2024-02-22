import { Button, Grid, Typography } from "@mui/material";
import { FC } from "react";
import StoryIcon from "../../../components/story/StoryIcon";
import { follow } from "../../../core/services/follow/follow";
import classes from "./profileDetails.module.css";

interface props {
  data: any;
  userId?: any;
}

const ProfileDetails: FC<props> = ({ data, userId }) => {
  const handleFollow = async () => {
    if (userId) {
      const res = await follow(userId);
      return res
    }
  };

  return (
    <Grid display="flex" gap={20}>
      <Grid item display={{ xs: "none", md: "flex" }}>
        <StoryIcon type="withoutBorder" dimention="150px" />
      </Grid>
      <Grid
        item
        container
        direction="column"
        gap={2}
        display={{ xs: "none", md: "flex" }}
      >
        <Typography textAlign="left" fontSize={25} fontWeight={330}>
          {data.username}
          {data?.login && (
            <Button onClick={handleFollow} sx={{ marginLeft: "100px" }}>
              Follow
            </Button>
          )}
        </Typography>
        <Typography display={{ xs: "none", md: "flex" }}>
          {" "}
          <span className={classes.data}>{data.posts}</span> posts{" "}
          <span className={classes.data}>{data.followers}</span>followers{" "}
          <span className={classes.data}>{data.following}</span> following
        </Typography>
        <Typography textAlign="left" fontWeight="bold">
          {" "}
          {data.name}
        </Typography>
        <Typography textAlign="left" maxWidth={350}>
          {" "}
          Hi this is my Training projects and more features are comming soon
        </Typography>
      </Grid>
      <Grid>
        {/* on mobile */}
        <Grid display={{ xs: "static", md: "none" }}>
          <Grid item display="flex" gap={3}>
            <StoryIcon type="withoutBorder" dimention="80px" />
            <Typography
              textAlign="left"
              marginTop={3}
              fontWeight="bold"
              fontFamily="roboto"
              fontSize={20}
            >
              {data.username}
            </Typography>
            {data?.login && (
              <Button
                sx={{ marginLeft: "20px", height: "30px", fontSize: "12px" }}
                onClick={handleFollow}
              >
                Follow
              </Button>
            )}
          </Grid>
          <Grid
            item
            container
            display="flex"
            direction="column"
            marginBottom={5}
          >
            <Typography
              textAlign="left"
              margin={"15px 20px"}
              fontWeight="bold"
              fontFamily="roboto"
            >
              {" "}
              {data.name}
            </Typography>
            <Typography textAlign="left" margin={"0px 20px"}>
              {" "}
              Hi this is my Training projects and more features are comming soon
            </Typography>
          </Grid>
          <Grid
            item
            container
            borderTop="1px solid grey"
            display="flex"
            justifyContent="space-around"
          >
            <Typography>
              <span className={classes.data}>{data.posts}</span> <br /> post
            </Typography>
            <Typography>
              <span className={classes.data}>{data.followers}</span>
              <br /> followers
            </Typography>
            <Typography>
              <span className={classes.data}>{data.following}</span> <br />{" "}
              following
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProfileDetails;
