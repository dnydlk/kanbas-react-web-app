import { IoReorderThreeOutline } from "react-icons/io5";
import { MdHistory } from "react-icons/md";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import {
  FaTachometerAlt,
  FaRegUserCircle,
  FaBook,
  FaRegCalendarAlt,
  FaInbox,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { courses } from "../Database";

function TopNav() {
  const links = [
    {
      label: "Account",
      icon: <FaRegUserCircle className="fs-2" />,
    },
    {
      label: "Dashboard",
      icon: <FaTachometerAlt className="fs-2" style={{ color: "#cd172a" }} />,
    },
    {
      label: "Courses",
      icon: <FaBook className="fs-2" style={{ color: "#cd172a" }} />,
    },
    {
      label: "Calendar",
      icon: <FaRegCalendarAlt className="fs-2" style={{ color: "#cd172a" }} />,
    },
    {
      label: "Inbox",
      icon: <FaInbox className="fs-2" style={{ color: "#cd172a" }} />,
    },
    {
      label: "History",
      icon: <MdHistory className="fs-2" style={{ color: "#cd172a" }} />,
    },
    {
      label: "Studio",
      icon: (
        <HiOutlineComputerDesktop
          className="fs-2"
          style={{ color: "#cd172a" }}
        />
      ),
    },
    {
      label: "Commons",
      icon: <FaRegCalendarAlt className="fs-2" style={{ color: "#cd172a" }} />,
    },
    {
      label: "Help",
      icon: <FaRegCalendarAlt className="fs-2" style={{ color: "#cd172a" }} />,
    },
  ];
  const { pathname } = useLocation();
  const courseLinks = ["Home", "Modules", "Piazza", "Grades", "Assignments"];
  const courseNumber = courses.find(
    (course) => course._id === pathname.split("/")[3]
  )?.number;

  return (
    <div
      className="d-block d-md-none bg-black d-flex justify-content-between align-items-center"
      style={{ height: "50px" }}>
      <div className="dropdown">
        <button
          className="btn btn-dark dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false">
          <IoReorderThreeOutline />
        </button>
        <ul className="dropdown-menu">
          <li>
            <Link
              className="wd-dani-t-nav-dropdown-item"
              to={"http://northeastern.edu"}>
              <div>Northeastern</div>
            </Link>
          </li>
          {links.map((link, index) => (
            <li key={index} className="wd-dani-t-nav-dropdown-item">
              <Link to={`/Kanbas/${link.label}`}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      {pathname.match("Courses") ? (
        <>
          <div className="row wd-dani-t-nav-mid">
            {courseNumber}
            <br />
            {pathname.split("/")[4]}
          </div>
          <div className="dropdown">
            <button
              id="TopNavCNav"
              className="btn btn-dark dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              <IoReorderThreeOutline />
            </button>
            <ul className="dropdown-menu">
              {courseLinks.map((courseLink, index) => (
                <li key={index} className="wd-dani-t-nav-dropdown-item">
                  <Link to={`${pathname.slice(0, 20)}${courseLink}`}>
                    {courseLink}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default TopNav;
