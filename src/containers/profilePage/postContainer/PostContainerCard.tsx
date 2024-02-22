import { Grid } from "@mui/material";
import Image from "mui-image";
import { FC, useState } from "react";
import ViewPost from "../../../components/viewPostModal/ViewPost";

interface props {
  data: any;
  username: string;
}
const PostContainerCard: FC<props> = ({ data, username }) => {
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
    postId: data._id,
    user: username,
    content: data.content,
    liked: data.liked,
  };
  const handleClick = () => {
    setOpenModal(true);
  };
  const images = data.image.map((val: any) => {
    return val.url;
  });
  const newData = {
    data,
    username,
  };
  return (
    <Grid
      item
      maxWidth="300px"
      minHeight="300px"
      xs={4}
      onClick={handleClick}
      key={data._id}
    >
      <ViewPost
        open={openModal}
        setOpen={setOpenModal}
        data={images}
        commentProps={commentProps}
        username={username}
        comments={data.comments}
        postData={newData}
      />
      <Image
        height="100%"
        width="100%"
        fit="cover"
        src={images[0] ? images[0] : ""}
      />
    </Grid>
  );
};

export default PostContainerCard;
