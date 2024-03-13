import { useReducer } from "react";

const initialState = {
  counter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + 1 };

    case "decrement":
      return { counter: state.counter - 1 };

    default:
      return state;
  }
};
const ComplexCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      UseReducer
      <button onClick={() => dispatch({ type: "increment" })}> +</button>
      <p> Counter - {state.counter}</p>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
};

export default ComplexCounter;
