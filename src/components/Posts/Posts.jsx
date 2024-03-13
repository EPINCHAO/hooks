import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getPosts() {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      console.log(res.data);
      setPosts(res.data);
    }
    getPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>

      {posts.map((post) => (
        <div key={post.id}>
          <h4> {post.title}</h4>
          <p> {post.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Posts;
