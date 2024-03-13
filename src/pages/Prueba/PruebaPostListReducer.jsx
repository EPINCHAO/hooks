import PostListWithReducer from "../../components/PostListReducer/PostListWithReducer";
import PostListWithoutReducer from "../../components/PostListReducer/PostListWithoutReducer";

const PruebaPostListReducer = () => {
  return (
    <div>
      PruebaPostList Without Reducer
      <PostListWithoutReducer></PostListWithoutReducer>
      <h1>PostList With Reducer</h1>
      <PostListWithReducer></PostListWithReducer>
    </div>
  );
};

export default PruebaPostListReducer;
