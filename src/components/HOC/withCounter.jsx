import { useState } from "react";

const withCounter = (Component) => {
  const NewComponent = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
      setCount((oldCount) => oldCount + 1);
    };
    return (
      <div>
        <Component count={count} handleIncrement={handleIncrement} />
      </div>
    );
  };

  return NewComponent;
};

export default withCounter;
