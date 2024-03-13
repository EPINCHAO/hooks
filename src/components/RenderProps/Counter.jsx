import { useState } from "react";

const Counter = ({ render }) => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((oldCount) => oldCount + 1);
  };
  return render(count, handleIncrement);
};

export default Counter;
