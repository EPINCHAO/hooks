const HoverRP = ({ count, handleIncrement }) => {
  return (
    <div>
      <h2 onMouseOver={handleIncrement}>Hover RP {count}</h2>
    </div>
  );
};

export default HoverRP;
