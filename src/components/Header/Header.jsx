import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">about</NavLink>
        <NavLink to="/user-register">User</NavLink>
        <NavLink to="/prueba">Prueba</NavLink>
        <NavLink to="/useCallback">Memo and Use Callback</NavLink>
        <NavLink to="/useRef"> UseRef</NavLink>
        <NavLink to="/useReducer">Post State</NavLink>
        <NavLink to="/postReduce">Post Reduce</NavLink>
        <NavLink to="/custom">Custom Hook</NavLink>
        <NavLink to="/post">Post List</NavLink>
      </nav>
    </div>
  );
};

export default Header;
