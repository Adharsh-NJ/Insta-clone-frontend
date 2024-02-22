import { Button, Grid, IconButton, Input } from "@mui/material";
import EmojiPicker, { SKIN_TONE_MEDIUM_DARK } from "emoji-picker-react";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createCommentRequest } from "../../core/features/comments/commentSlice";

const CommentAdd = ({ props }: any) => {
  const [showEmoji, setShowEmoji] = useState(false);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const onCommentAdd = () => {
    const data = { content: props.comment, post: props.postId };
    dispatch(createCommentRequest(data));
    props.setComment("");
  };
  const handleBlur = (e: any) => {
    setShowEmoji(false);
  };
  return (
    <Grid
      container
      borderTop={"1px solid #efefef"}
      padding={"5px 0"}
      minWidth={"100%"}
      display="flex"
      flexWrap="nowrap"
    >
      {showEmoji && (
        <Grid
          item
          position="absolute"
          bottom={"15%"}
          zIndex={999999}
          onBlur={handleBlur}
        >
          <EmojiPicker
            onEmojiClick={props.onEmojiClick}
            skinTone={SKIN_TONE_MEDIUM_DARK}
            searchPlaceholder="search your emoji"
            disableAutoFocus={true}
          />
        </Grid>
      )}
      <Grid
        item
        onClick={() =>
          setShowEmoji((value: boolean) => {
            return !value;
          })
        }
      >
        <IconButton>
          <SentimentVerySatisfiedIcon />
        </IconButton>
      </Grid>
      <Grid item minWidth={"88%"} marginTop={0.5}>
        <form onSubmit={handleSubmit(onCommentAdd)}>
          <Input
            value={props.comment}
            placeholder="Add a comment..."
            sx={{ minWidth: "80%" }}
            disableUnderline
            {...register("content", { onChange: props.handleChange })}
          />
          <Button type="submit">Post</Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default CommentAdd;
