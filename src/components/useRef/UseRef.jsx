import { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [input, setInput] = useState({ name: "", email: "", password: "" });

  const inputRef = useRef(null);
  useEffect(() => {
    console.log(inputRef.current);
    inputRef.current.focus();
    inputRef.current.style.border = "1px solid red";
  }, []);
  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, value: e.target.value }));
  };
  return (
    <div>
      UseRef
      <input
        type="text"
        name="name"
        ref={inputRef}
        value={input.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        value={input.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="password"
        value={input.password}
        onChange={handleChange}
      />
      <button onClick={() => console.log(input)}>Submit</button>
    </div>
  );
};

export default UseRef;
