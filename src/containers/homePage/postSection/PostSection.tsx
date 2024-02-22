import { useSelector } from "react-redux";
import PostCard from "./PostCard";

const PostSection = () => {
  const posts = useSelector((state: any) => {
    return state.posts.post;
  });
  return (
    <>
      {Array.isArray(posts) &&
        posts.map((val: any, index: any) => {
          return <PostCard key={index} data={val} />;
        })}
    </>
  );
};

export default PostSection;
