import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>LushAITech</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">Register New Job</Link>
      </div>
    </nav>
  );
};

export default Navbar;
