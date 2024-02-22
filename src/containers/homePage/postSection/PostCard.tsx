import { Button, Card, Grid, Typography } from "@mui/material";
import { FC, useState } from "react";
import Captions from "../../../components/captions/Captions";
import CommentAdd from "../../../components/commentsAdd/CommentAdd";
import Interactions from "../../../components/interactions/Interactions";
import PostCarousel from "../../../components/postCarousel/PostCarousel";
import ProfileDetails from "../../../components/profileDetail/ProfileDetails";
import ViewPost from "../../../components/viewPostModal/ViewPost";

interface props {
  data: {
    liked: boolean;
    username: string;
    userId: string;
    data: {
      _id: string;
      content: string;
      likes: string[];
      user: {
        _id: string;
        username: string;
      };
      image: { public_id: string; url: string }[];
      comments: string[];
    };
  };
}
const PostCard: FC<props> = ({ data }) => {
  const [openModal, setOpenModal] = useState(false);
  const [comment, setComment] = useState<string>("");
  const onEmojiClick = (event: any, emojiObj: any) => {
    setComment((value) => {
      return value + emojiObj.emoji;
    });
  };
  const handleChange = (event: any) => {
    setComment(event.target.value);
  };
  let commentProps = {
    comment,
    setComment,
    onEmojiClick,
    handleChange,
    postId: data.data._id,
    user: data.username,
    content: data.data.content,
    liked: data.liked,
  };
  const imgs = data.data.image.map((val) => val.url);
  const handleModal = () => {
    setOpenModal(true);
  };

  return (
    <Grid
      container
      maxWidth={470}
      minWidth={470}
      maxHeight={550}
      marginTop={2}
      bgcolor={"white"}
      border="1px solid #dbdbdb"
      borderRadius={2}
      position="relative"
    >
      <Card sx={{ minWidth: "100%" }}>
        <ViewPost
          postData={data}
          open={openModal}
          setOpen={setOpenModal}
          data={imgs}
          commentProps={commentProps}
          username={data.username}
          userId={data.userId}
          comments={data.data.comments}
        />
        <ProfileDetails
          type="withLocation"
          username={data.username}
          id={data.userId}
        />
        <PostCarousel imgs={imgs} />
        <Interactions
          postId={data.data._id}
          liked={data.liked}
          likes={data.data.likes.length}
        />
        <Captions caption={data.data.content} user={data.username} />
        <Grid
          item
          container
          display="flex"
          marginLeft={1}
          direction="column"
          alignItems="start"
        >
          <Button sx={{ color: "#a0a0a0" }} size="small" onClick={handleModal}>
            View comments
          </Button>
          <Typography color={"#a0a0a0"} marginLeft={1} fontSize={14}>
            {"10hrs Ago"}
          </Typography>
        </Grid>
        <CommentAdd props={commentProps} />
      </Card>
    </Grid>
  );
};

export default PostCard;
