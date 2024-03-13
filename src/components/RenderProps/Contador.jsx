import { useState } from "react";

const Contador = ({ render }) => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((oldCount) => oldCount + 1);
  };
  return render(count, handleIncrement);
};

export default Contador;
