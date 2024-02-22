import { Grid, IconButton, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite"; //after like
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import StoryIcon from "../story/StoryIcon";
import { FC } from "react";
import { useDispatch } from "react-redux";
import {
  likePostRequest,
  removeLikeRequest,
} from "../../core/features/posts/postSlice";
interface props {
  liked: boolean;
  likes: number;
  postId: string;
}
const Interactions: FC<props> = ({ liked, postId, likes }) => {
  const dispatch = useDispatch();
  const handleLike = () => {
    let body = {
      postId,
    };
    dispatch(likePostRequest(body));
  };
  const handleDislike = () => {
    dispatch(removeLikeRequest(postId));
  };
  return (
    <Grid
      container
      position="relative"
      top={"-15px"}
      display="flex"
      direction="column"
      width="100%"
      justifyContent="flex-start"
      alignItems={"flex-start"}
    >
      <Grid item>
        {!liked ? (
          <IconButton sx={{ color: "black" }} onClick={handleLike}>
            <FavoriteBorderIcon />
          </IconButton>
        ) : (
          <IconButton sx={{ color: "red" }} onClick={handleDislike}>
            <FavoriteIcon />
          </IconButton>
        )}
        <IconButton sx={{ color: "black" }}>
          <ModeCommentOutlinedIcon />
        </IconButton>
      </Grid>
      <Grid item display="flex" gap={1} marginLeft={1}>
        <StoryIcon dimention="20px" type="withStory" />{" "}
        <Typography>
          Liked by <span>{likes} others</span>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Interactions;
