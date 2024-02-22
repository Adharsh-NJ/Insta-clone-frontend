import { Button, Grid, IconButton, InputBase } from "@mui/material";
import { ChangeEvent, useRef, useState } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeIcon from "@mui/icons-material/Home";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import ExploreIcon from "@mui/icons-material/Explore";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import classes from "./navbar.module.css";
import StoryIcon from "../../components/story/StoryIcon";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PostModal from "./postModal/PostModal";
import { Link, useNavigate } from "react-router-dom";
import SearchDetails from "./search/SearchDetails";
import useDebounce from "../../hooks/useDebounce";

const Navbar = () => {
  const navigate = useNavigate();
  const [searchToggle, setSearchToggle] = useState(false);
  const inputRef = useRef();
  const [iconActive, setIconActive] = useState("home");
  const handlePost = () => {
    setIconActive("post");
    setPostModal(true);
  };
  const [postModal, setPostModal] = useState(false);
  const [profileDrop, setProfileDrop] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const debounceValue = useDebounce(searchValue);

  const handleBlur = () => {
    setIconActive("home");
    setProfileDrop(false);
  };
  const handleProfile = () => {
    setProfileDrop(true);
    setIconActive("profile");
  };
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };
  return (
    <Grid
      container
      display="flex"
      justifyContent="center"
      padding="10px"
      bgcolor={"white"}
      minWidth={500}
    >
      <Grid
        item
        container
        display="flex"
        justifyContent="space-between"
        maxWidth={980}
        alignItems="center"
      >
        {iconActive === "post" && (
          <PostModal
            open={postModal}
            setOpen={setPostModal}
            icon={setIconActive}
          />
        )}
        <Grid item md={2} marginRight={{ md: 20 }}>
          <Button
            onClick={() => {
              return setIconActive("home");
            }}
          >
            <img
              className={classes.logo}
              src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
              alt="logo"
            />
          </Button>
        </Grid>
        <Grid
          item
          className={classes.search}
          display={{ xs: "none", md: "flex" }}
          justifyContent="flex-end"
          padding={2.2}
          position="relative"
        >
          {searchToggle && (
            <SearchDetails
              searchTerm={debounceValue}
              inputRef={inputRef}
              toggleModal={setSearchToggle}
            />
          )}
          {!searchToggle && <SearchIcon className={classes.searchIcon} />}
          <InputBase
            inputRef={inputRef}
            onFocus={() => {
              setSearchToggle(true);
            }}
            onChange={handleSearch}
            placeholder="Search"
            inputProps={{
              "aria-label": "search",
              className: classes.searchInput,
            }}
          />
        </Grid>
        <Grid
          item
          xs={8}
          sm={5}
          md={4}
          display="flex"
          justifyContent="flex-end"
        >
          <Link to="/home">
            <IconButton
              onClick={() => setIconActive("home")}
              sx={{ paddingTop: "13px" }}
            >
              {iconActive === "home" ? (
                <HomeIcon className={classes.navIcons} />
              ) : (
                <HomeOutlinedIcon className={classes.navIcons} />
              )}
            </IconButton>
          </Link>
          <IconButton onClick={() => setIconActive("message")}>
            {iconActive === "message" ? (
              <MapsUgcIcon className={classes.navIcons} />
            ) : (
              <MapsUgcOutlinedIcon className={classes.navIcons} />
            )}
          </IconButton>
          <IconButton onClick={handlePost}>
            {iconActive === "post" ? (
              <LocalHospitalIcon className={classes.navIcons} />
            ) : (
              <LocalHospitalOutlinedIcon className={classes.navIcons} />
            )}
          </IconButton>
          <IconButton onClick={() => setIconActive("explore")}>
            {iconActive === "explore" ? (
              <ExploreIcon className={classes.navIcons} />
            ) : (
              <ExploreOutlinedIcon className={classes.navIcons} />
            )}
          </IconButton>
          <IconButton onClick={() => setIconActive("notification")}>
            {iconActive === "notification" ? (
              <FavoriteIcon className={classes.navIcons} />
            ) : (
              <FavoriteBorderOutlinedIcon className={classes.navIcons} />
            )}
          </IconButton>
          {profileDrop && (
            <Grid item position={"relative"} onBlur={handleBlur}>
              <Grid
                item
                minWidth={150}
                color="black"
                position={"absolute"}
                bgcolor="white"
                top={70}
                right={-50}
                sx={{
                  clipPath:
                    "polygon(82% 0, 86% 4%, 100% 4%, 100% 100%, 0 100%, 0 4%, 77% 4%)",
                }}
                borderRadius={1}
                boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
              >
                <Link to="/profile" onClick={() => setProfileDrop(false)}>
                  <Button
                    fullWidth
                    sx={{ color: "black", paddingTop: "15px" }}
                    startIcon={<AccountCircleIcon />}
                  >
                    {" "}
                    profile{" "}
                  </Button>
                </Link>
                <hr color="grey" style={{ border: ".2px solid grey" }}></hr>
                <Button
                  fullWidth
                  sx={{ color: "black", paddingTop: "15px" }}
                  onClick={handleLogout}
                >
                  {" "}
                  Log out
                </Button>
              </Grid>
            </Grid>
          )}
          <IconButton onClick={handleProfile}>
            <StoryIcon dimention="40px" type="none" />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Navbar;
