import { CardMedia } from "@mui/material";
import { FC } from "react";
import Carousel from "react-grid-carousel";

interface dots {
  isActive: boolean;
}
interface props {
  imgs: string[];
}
const PostCarousel: FC<props> = ({ imgs }) => {
  const Dots: FC<dots> = ({ isActive }) => (
    <span
      style={{
        display: "inline",
        position: "relative",
        top: "10px",
        left: "0",
        height: "8px",
        borderRadius: "50%",
        width: "8px",
        background: isActive ? "#0095f6" : "#a8a8a8",
      }}
    ></span>
  );
  return (
    <Carousel
      rows={1}
      cols={1}
      mobileBreakpoint={0}
      showDots={true}
      dot={Dots}
      containerStyle={{ margin: "0 -19px", maxHeight: "580px" }}
    >
      {imgs.map((val, index) => {
        return (
          <Carousel.Item
            key={index}
            style={{ maxHeight: "100px", backgroundColor: "red" }}
          >
            <CardMedia component="img" height="80%" width="100%" image={val} />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default PostCarousel;
