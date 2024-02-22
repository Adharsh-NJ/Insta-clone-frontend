import { Grid, IconButton, Modal } from "@mui/material";
import React, { FC, useState } from "react";
import Stories from "react-insta-stories";
import CloseIcon from "@mui/icons-material/Close";
import classes from "./storyModal.module.css";
import { useNavigate } from "react-router-dom";

interface props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const StoryModal: FC<props> = ({ open, setOpen }) => {
  const [currentId, setCurrentId] = useState(0);
  const nav = useNavigate();
  const stories = [
    {
      content: () => {
        return (
          <Grid container maxHeight={"100%"} position="relative">
            <Grid item position="absolute" color="white">
              {/* <ProfileDetails type="none" /> */}
            </Grid>
            <Grid item>
              <img
                src="https://i.ibb.co/fY1DmQW/8aacdef9ba37db60c7a96271877cfbb5.jpg"
                alt="story"
              ></img>
            </Grid>
          </Grid>
        );
      },
    },
    {
      content: () => {
        return (
          <Grid container maxHeight={"100%"} position="relative">
            <Grid item position="absolute" color="white">
              {/* <ProfileDetails type="none" /> */}
            </Grid>
            <Grid item>
              <img
                src="https://i.ibb.co/fY1DmQW/8aacdef9ba37db60c7a96271877cfbb5.jpg"
                alt="story"
              ></img>
            </Grid>
          </Grid>
        );
      },
    },
  ];
  return (
    <Modal open={open} sx={{ zIndex: 999999999999999 }}>
      <Grid
        container
        display="flex"
        justifyContent={"center"}
        bgcolor={"black"}
        alignItems="center"
        minHeight="100%"
      >
        <Grid item position="absolute" top={20} left={20}>
          <img
            className={classes.logo}
            src="https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-icon-white-border-text-black-background.png"
            alt="logo"
          />
        </Grid>
        <Grid item position={"absolute"} top={0} right={0}>
          <IconButton
            onClick={() => {
              nav(0);
            }}
            sx={{ color: "white" }}
          >
            <CloseIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <Stories
            currentIndex={currentId}
            stories={stories}
            defaultInterval={1500}
            preventDefault
            width={432}
            height={668}
            onStoryEnd={(s: any, st: any) => {
              setCurrentId((currentId) => currentId + 1);
            }}
            onAllStoriesEnd={(s: any, st: any) => {
              setOpen(false);
            }}
            onStoryStart={(s: any, st: any) => {}}
          />
        </Grid>
      </Grid>
    </Modal>
  );
};

export default StoryModal;
