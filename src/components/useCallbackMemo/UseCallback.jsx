import { useCallback, useState } from "react";
import Title from "../Timer/Title";
import ShowCounter from "../Timer/ShowCounter";
import Button from "../Timer/Button";

const UseCallback = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleIncrementByOne = useCallback(() => {
    setCount1((oldCount) => oldCount + 1);
  }, []);

  const handleIncrementByFive = useCallback(() => {
    setCount2((oldCount) => oldCount + 5);
  }, []);

  return (
    <div>
      UseCallback
      <Title></Title>
      <ShowCounter counter={count1} title={"Counter 1"}></ShowCounter>
      <Button handleclick={handleIncrementByOne}>Increment By One</Button>
      <hr />
      <Title></Title>
      <ShowCounter counter={count2} title={"Counter 5"}></ShowCounter>
      <Button handleclick={handleIncrementByFive}>Increment By One</Button>
    </div>
  );
};

export default UseCallback;
