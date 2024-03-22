import { useParams } from "react-router";
import { useLocation, Link } from "react-router-dom";
import { courses } from "../../Database";
import { HiMiniBars3 } from "react-icons/hi2";

function Breadcrumb() {
  // const params = useParams();
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  const { pathname } = useLocation();
  const fullPath = pathname
    .split("/")
    .filter((part) => part !== "")
    .slice(3);
  // console.log(fullPath);
  return (
    <div id="breadcrumb" className="d-none d-md-block">
      <nav aria-label="breadcrumb">
        {/* <pre>
        <code>{JSON.stringify(params, null, 2)}</code>
      </pre> */}

        <div className="d-flex align-items-center">
          <HiMiniBars3
            className="fs-3 ms-1 me-1"
            style={{ color: "#28343c" }}
          />
          <ol className="breadcrumb m-0 " style={{}}>
            {/* Course Number to Home */}
            <li className="breadcrumb-item wd-dani-breadcrumb-item">
              <Link to={`/Kanbas/Courses/${courseId + "/Home" ?? ""}`}>
                {course?.number ?? "Home"}
              </Link>
            </li>
            {fullPath.length > 1
              ? fullPath.slice(0, -1).map((aPath, index) => (
                  <li
                    key={index}
                    className="breadcrumb-item wd-dani-breadcrumb-item">
                    <Link to={`${fullPath.slice(0, index + 1).join("/")}`}>
                      {aPath}
                    </Link>
                  </li>
                ))
              : ""}
            {/* Last item plain text */}
            <li className="breadcrumb-item wd-dani-breadcrumb-item">
              {fullPath.pop()}
            </li>
          </ol>
        </div>
        {/* <pre>
        <code>{JSON.stringify(course, null, 2)}</code>
      </pre> */}
      </nav>
      <hr />
    </div>
  );
}

export default Breadcrumb;
