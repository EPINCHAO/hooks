import withCounter from "./withCounter";

const HoverCounter = ({ count, handleIncrement }) => {
  return (
    <div>
      HoverCounter
      <h2 onMouseOver={handleIncrement}>Hover Counter {count}</h2>
    </div>
  );
};

export default withCounter(HoverCounter);
