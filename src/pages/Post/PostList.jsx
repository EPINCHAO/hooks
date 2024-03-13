import { useSearchParams } from "react-router-dom";

const PostList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div>
      <h2>PostList</h2>
      <p>Post 1</p>
      <p>Post 2</p>
      <p>Post 3</p>
      <button
        onClick={() => setSearchParams({ filter: "latest", query: "post 1" })}
      >
        Latest Post
      </button>
      <button>Reset</button>
    </div>
  );
};

export default PostList;
