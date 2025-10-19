import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#eee" }}>
      <Link to="/">Login</Link> | <Link to="/signup">Signup</Link> | <Link to="/cart">Cart</Link>
    </nav>
  );
};

export default Navbar;
