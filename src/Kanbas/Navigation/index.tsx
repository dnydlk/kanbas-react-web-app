import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { MdHistory } from "react-icons/md";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import {
  FaTachometerAlt,
  FaRegUserCircle,
  FaBook,
  FaRegCalendarAlt,
  FaInbox,
} from "react-icons/fa";
function KanbasNavigation() {
  // eslint-disable-next-line
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
  const linksPart1 = [
    {
      label: "Account",
      icon: <FaRegUserCircle className="fs-2" />,
    },
    {
      label: "Dashboard",
      icon: <FaTachometerAlt className="fs-2" style={{ color: "#cd172a" }} />,
    },
  ];
  const linksPart2 = [
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
  return (
    <div id="kanbas-navigation">
      <ul className="wd-kanbas-navigation d-none d-md-block">
        <li>
          <Link to={"http://northeastern.edu"}>
            <img
              src="/images/n.png"
              alt="Northeastern logo"
              style={{ width: "60px", height: "60px" }}
            />
          </Link>
        </li>
        {linksPart1.map((link, index) => (
          <li
            key={index}
            className={pathname.includes(link.label) ? "wd-active" : ""}>
            <Link to={`/Kanbas/${link.label}`}>
              {link.icon} {link.label}
            </Link>
          </li>
        ))}
        <li className={pathname.includes("Courses") ? "wd-active" : ""}>
          <Link to={"/Kanbas/Courses"}>
            <FaBook className="fs-2" style={{ color: "#cd172a" }} /> Courses
          </Link>
        </li>
        <li>
          <div className="btn-group dropend">
            <button
              type="button"
              className=" dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              // todo: change the background color of the button using style
            >
              Dropend
            </button>
            <ul className="dropdown-menu">
              <li className="wd-dani-t-nav-dropdown-item"></li>
            </ul>
          </div>
        </li>
        {linksPart2.map((link, index) => (
          <li
            key={index}
            className={pathname.includes(link.label) ? "wd-active" : ""}>
            <Link to={`/Kanbas/${link.label}`}>
              {link.icon} {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default KanbasNavigation;
