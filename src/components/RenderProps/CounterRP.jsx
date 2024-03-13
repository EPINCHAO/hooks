const CounterRP = ({ count, handleIncrement }) => {
  return (
    <>
      <button onClick={handleIncrement}> Counter {count} clicked.</button>
    </>
  );
};

export default CounterRP;
