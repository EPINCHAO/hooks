import useList from "../../hooks/useList";
const url = "https://jsonplaceholder.typicode.com/posts";
const initialState = { loading: true, posts: [], error: "" };
const PostListWithCustomHook = () => {
  const state = useList(url, initialState);
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

export default PostListWithCustomHook;
