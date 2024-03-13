import { Link } from "@mui/material";

const Navbar = () => {
  return (
    <div>
      <Link href="/">home</Link>
      <Link href="/about" color="inherit">
        {'color="inherit"'}
      </Link>
    </div>
  );
};

export default Navbar;
