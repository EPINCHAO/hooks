import axios from "axios";
import { useReducer } from "react";
import { useEffect } from "react";

const initialState = { loading: true, posts: [], error: "" };

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return { loading: false, posts: action.data, error: "" };
    case "ERROR":
      return { loading: false, posts: [], error: action.message };
    default:
      return state;
  }
};

const PostListWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function getPosts() {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        dispatch({ type: "SUCCESS", data: res.data });
      } catch (error) {
        dispatch({ type: "ERROR", message: error.message });
      }
    }
    getPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>

      {state.loading ? (
        <h3>Loading....</h3>
      ) : state.error ? (
        <h3>{state.error}</h3>
      ) : (
        state.posts.map((post) => (
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

export default PostListWithReducer;
