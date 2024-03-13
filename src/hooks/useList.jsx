import axios from "axios";
import { useReducer } from "react";
import { useEffect } from "react";

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

const useList = (url, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function getPosts() {
      try {
        const res = await axios.get(url);
        dispatch({ type: "SUCCESS", data: res.data });
      } catch (error) {
        dispatch({ type: "ERROR", message: error.message });
      }
    }
    getPosts();
  }, [url]);

  return state;
};

export default useList;
