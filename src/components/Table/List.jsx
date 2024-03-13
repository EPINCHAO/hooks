const List = () => {
  const items = ["React", "Vue", "Angular", "Svelte"];
  return (
    <div>
      <h1>List Popular course name</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {index}: {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
