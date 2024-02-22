import { Link, useLocation } from "react-router-dom";

function LabNav() {
  const { pathname } = useLocation();
  return (
    <nav className="nav nav-tabs mt-2">
      <Link
        to="/labs/a3"
        className={`nav-link ${pathname.includes("a3") ? "active" : ""}`}>
        Lab 3
      </Link>
      <Link
        to="/labs/a4"
        className={`nav-link ${pathname.includes("a4") ? "active" : ""}`}>
        Lab 4
      </Link>
    </nav>
  );
}

export default LabNav;
