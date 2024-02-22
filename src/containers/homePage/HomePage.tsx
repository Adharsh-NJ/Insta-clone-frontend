import { Grid } from "@mui/material";
import WithNavbar from "../../hoc/withNavbar/withNavbar";
import PostSection from "./postSection/PostSection";
import StorySection from "./StorySection/StorySection";
import Suggestions from "./sugesstions/Suggestions";

const HomePage = () => {
  return (
    <Grid
      container
      item
      display="flex"
      gap={2}
      justifyContent="center"
      xs={12}
      md={9.3}
      lg={7.3}
      xl={5.3}
    >
      <Grid
        container
        item
        xs={12}
        md={8}
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <StorySection />
        <PostSection />
      </Grid>
      <Grid
        container
        item
        md={3.7}
        display={{ xs: "none", md: "flex" }}
        marginTop={1}
      >
        <Suggestions />
      </Grid>
    </Grid>
  );
};

export default WithNavbar(HomePage);
