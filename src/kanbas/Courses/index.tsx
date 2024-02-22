import { courses } from "../Database";
import { useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
function Courses() {
  const params = useParams();
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  return (
    <div>
      {/* <pre>
        <code>{JSON.stringify(params, null, 2)}</code>
      </pre> */}
      <h1 className=" wd-dani-breadcrumb-item">
        <HiMiniBars3 /> {course?.name}
      </h1>
      {/* <pre>
        <code>{JSON.stringify(course, null, 2)}</code>
      </pre> */}
      {/* <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item wd-dani-breadcrumb-item">
            <a href="#">CS5610-07</a>
          </li>
          <li className="breadcrumb-item wd-dani-breadcrumb-item">
            <a href="#">Assignments</a>
          </li>
          <li
            className="breadcrumb-item wd-dani-breadcrumb-item active"
            aria-current="page">
            A1 - ENV + HTML
          </li>
        </ol>
      </nav> */}
    </div>
  );
}
export default Courses;
