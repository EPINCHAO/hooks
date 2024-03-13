const RenderProps = ({ render }) => {
  return (
    <div>
      RenderProps
      <h1>{render(false)}</h1>
    </div>
  );
};

export default RenderProps;
