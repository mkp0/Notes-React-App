import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">LOGO</div>
      <ul className="nav-items">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/quotes">
          <li>Quotes</li>
        </Link>
        <Link to="/create">
          <li>Create</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
