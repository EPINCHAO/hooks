import withCounter from "./withCounter";

const Counter = ({ count, handleIncrement }) => {
  return (
    <div>
      Counter
      <button type="button" onClick={handleIncrement}>
        Count {count} more.
      </button>
    </div>
  );
};

export default withCounter(Counter);
