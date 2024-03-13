import { useParams } from "react-router-dom";

const PostDetail = () => {
  const params = useParams();
  const postId = params.postId;
  console.log("PArametros :" + params.postId);
  return <div>Post {postId} Detail.</div>;
};

export default PostDetail;
