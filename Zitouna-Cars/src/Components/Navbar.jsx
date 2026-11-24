import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <nav className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/cars">Cars</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <Link to="/cars/new" className="add-car">+ Add a car</Link>
      </nav>
    </header>
  );
}

export default Navbar;