import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const PostListWithoutReducer = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getPosts() {
      try {
        setLoading(true);
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(res.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }
    getPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>

      {loading ? (
        <h3>Loading....</h3>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <h4> {post.title}</h4>
            <p> {post.body}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
};

export default PostListWithoutReducer;
