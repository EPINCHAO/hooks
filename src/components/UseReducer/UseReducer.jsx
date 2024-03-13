import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    default:
      return state;
  }
};
const UseReducer = () => {
  const initialState = 0;
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      UseReducer
      <button onClick={() => dispatch("increment")}> +</button>
      <p> Counter - {state}</p>
      <button onClick={() => dispatch("decrement")}>-</button>
    </div>
  );
};

export default UseReducer;
