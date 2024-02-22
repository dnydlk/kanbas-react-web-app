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
    <ul className="wd-kanbas-navigation">
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
  );
}
export default KanbasNavigation;
