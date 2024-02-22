import { Grid, Typography } from "@mui/material";
import Carousel from "react-grid-carousel";
import StoryIcon from "../../../components/story/StoryIcon";

const StorySection = () => {
  return (
    <Grid
      container
      display="flex"
      justifyContent="center"
      bgcolor={"white"}
      border="1px solid #dbdbdb"
      borderRadius={2}
      maxWidth={470}
      minWidth={470}
    >
      <Grid item maxWidth="95%">
        <Carousel
          cols={6}
          rows={1}
          mobileBreakpoint={0}
          containerStyle={{ background: "transparent", margin: "0 -19px" }}
        >
          {[...Array(2)].map((_, i) => (
            <Carousel.Item key={i}>
              <div style={{ padding: "10px", marginRight: "-10px" }}>
                <StoryIcon dimention={"56px"} type="withStory" />
              </div>
              <Typography
                variant="body2"
                fontSize={"12px"}
                textAlign="center"
                marginLeft="6px"
              >
                Adharsh
              </Typography>
            </Carousel.Item>
          ))}
        </Carousel>
      </Grid>
    </Grid>
  );
};

export default StorySection;
