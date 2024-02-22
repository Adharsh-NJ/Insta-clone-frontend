import { Grid, IconButton, Modal } from "@mui/material";
import React, { FC } from "react";
import PostCarousel from "../postCarousel/PostCarousel";
import CloseIcon from "@mui/icons-material/Close";
import ProfileDetails from "../profileDetail/ProfileDetails";
import CommentSection from "../commentSection/CommentSection";
import PostCard from "../../containers/homePage/postSection/PostCard";
import Interactions from "../interactions/Interactions";
import CommentAdd from "../commentsAdd/CommentAdd";

interface props {
  open: boolean;
  data: string[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  commentProps: any;
  username: string;
  comments: any;
  postData:any,
  userId?:string
}

const ViewPost: FC<props> = ({
  open,
  data,
  setOpen,
  commentProps,
  username,
  userId,
  comments,
  postData
}) => {
  const handleClose = (e: any) => {
    e.stopPropagation();
    setOpen(false);
  };
  return (
    <Modal open={open} sx={{ zIndex: 99999999999999 }}>
      <Grid
        container
        position="relative"
        minHeight="80%"
        minWidth="80%"
        display={"flex"}
        justifyContent="center"
        marginTop={4}
      >
        <IconButton
          sx={{ position: "absolute", right: 0, color: "white" }}
          size="large"
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
        <Grid
          container
          display={{ md: "flex", xs: "none" }}
          justifyContent="center"
        >
          <Grid
            item
            display="flex"
            xs={4}
            bgcolor="black"
            alignItems={"center"}
          >
            <PostCarousel imgs={data} />
          </Grid>
          <Grid
            item
            xs={4}
            bgcolor="white"
            display="flex"
            direction="column"
            container
          >
            <ProfileDetails type="withLocation" username={username} id={userId}/>
            <CommentSection
              comments={comments}
              user={commentProps.user}
              content={commentProps.content}
            />
            <Interactions liked={commentProps.liked} postId={commentProps.postId} likes={postData.data.likes.length}/>
            <CommentAdd props={commentProps} />
          </Grid>
        </Grid>
        <Grid
          container
          display={{ xs: "flex", md: "none" }}
          justifyContent="center"
          maxHeight={700}
        >
          <PostCard data={postData}/>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default ViewPost;
