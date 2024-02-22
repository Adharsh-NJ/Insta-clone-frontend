import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getUserDetails } from "../../core/features/userDetails/userDetailsSlice";
import WithNavbar from "../../hoc/withNavbar/withNavbar";
import PostContainer from "./postContainer/PostContainer";
import ProfileDetails from "./profileDetails/ProfileDetails";

const ProfilePage = () => {
  let location = useLocation();
  let id = location.state;
  const dispatch = useDispatch();
  const userData = useSelector((state: any) => {
    return id ? state.user.user : state.login.user;
  });
  useEffect(() => {
    dispatch(getUserDetails(id));
  }, [id]);

  const userDetails = userData && {
    username: userData?.username,
    name: userData?.name,
    followers: userData?.followers?.length,
    following: userData?.following?.length,
    posts: userData?.posts?.length,
    login: Boolean(id),
  };
  return (
    <Grid
      container
      display="flex"
      justifyContent="center"
      alignItems="center"
      maxWidth={{ xs: "80%", md: "70%" }}
      gap={6}
    >
      <ProfileDetails data={userDetails} userId={id} />
      <PostContainer userData={userData} />
    </Grid>
  );
};

export default WithNavbar(ProfilePage);
