const Button = ({ handleclick, children }) => {
  return <button onClick={handleclick}> {children}</button>;
};

export default Button;
