import { Box } from "@mui/material";
import React, { FC, useState } from "react";
import StoryModal from "./storyModal/StoryModal";
import classes from "./story-icon.module.css";

interface props {
  dimention: string;
  type: string;
}
const StoryIcon: FC<props> = ({ dimention, type }) => {
  const [animation, setAnimation] = useState(`${classes.loading}`);
  const [open, setOpen] = useState(false);
  let time: any;
  const handleAnimation = () => {
    clearTimeout(time);
    setAnimation(`${classes.loading} ${classes.animation}`);
    setOpen(true);
    time = setTimeout(() => {
      setAnimation(`${classes.loading}`);
    }, 1000);
  };
  const renderStory = (type: string) => {
    switch (type) {
      case "withStory":
        return (
          <div
            className={classes.iconContainer}
            style={{ width: `${dimention}`, height: `${dimention}` }}
            onClick={handleAnimation}
          >
            <div className={animation}></div>
            <Box
              component="img"
              className={classes.icon}
              alt="The house from the offer."
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
            />
            {<StoryModal open={open} setOpen={setOpen} />}
          </div>
        );
      case "withoutBorder":
        return (
          <div
            className={classes.iconContainer}
            style={{
              width: `${dimention}`,
              height: `${dimention}`,
              border: "5px solid #dbdbdb",
            }}
            onClick={handleAnimation}
          >
            <Box
              component="img"
              className={classes.icon}
              alt="The house from the offer."
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
            />
            {open && <StoryModal open={open} setOpen={setOpen} />}
          </div>
        );
      default:
        return (
          <Box
            maxHeight={dimention}
            maxWidth={dimention}
            minHeight={dimention}
            minWidth={dimention}
            component="img"
            className={classes.icon}
            alt="The house from the offer."
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
          />
        );
    }
  };
  return <>{renderStory(type)}</>;
};

export default StoryIcon;
