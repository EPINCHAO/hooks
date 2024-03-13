import { useState } from "react";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  let text = null;
  if (isLoggedIn) {
    text = "Welcome user";
  } else {
    text = "Click to login button for logged in";
  }
  return (
    <div>
      Login
      <p>{text}</p>
      {isLoggedIn === false ? (
        <button onClick={handleLogin}>Login</button>
      ) : (
        <button onClick={handleLogout}>Logout</button>
      )}
    </div>
  );
};

export default Login;
