import { Link, useLocation } from "react-router-dom";
import "./index.css";
import {
  FaTachometerAlt,
  FaRegUserCircle,
  FaBook,
  FaRegCalendarAlt,
  FaInbox,
} from "react-icons/fa";
import { MdHistory } from "react-icons/md";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
function KanbasNavigation() {
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
  return (
    <div id="KanbasNavigation">
      <ul className="wd-kanbas-navigation d-none d-sm-none d-md-block">
        <li>
          <Link to={"http://northeastern.edu"}>
            <img
              src="/images/n.png"
              alt="Northeastern logo"
              style={{ width: "60px", height: "60px" }}
            />
          </Link>
        </li>
        {links.map((link, index) => (
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
