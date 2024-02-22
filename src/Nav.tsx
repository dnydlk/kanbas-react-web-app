import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav nav-tabs mt-2">
      <Link className="nav-link" to="/labs/a3">
        A3
      </Link>
      <Link className="nav-link" to="/kanbas">
        Kanbas
      </Link>
      <Link className="nav-link" to="/hello">
        Hello
      </Link>
    </nav>
  );
}

export default Nav;
