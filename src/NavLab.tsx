import { Link } from "react-router-dom";

function NavLab() {
  return (
    <nav className="nav nav-tabs mt-2">
      <Link to="/labs/a3" className=" nav-link">
        Lab 3
      </Link>
      <Link to="/labs/a4" className=" nav-link">
        Lab 4
      </Link>
    </nav>
  );
}

export default NavLab;
