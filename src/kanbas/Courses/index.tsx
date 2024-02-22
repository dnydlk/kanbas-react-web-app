import { courses } from "../Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
function Courses() {
  const params = useParams();
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  return (
    <>
      {/* <pre>
        <code>{JSON.stringify(params, null, 2)}</code>
      </pre> */}
      <h1 className=" wd-dani-breadcrumb-item">
        <HiMiniBars3 /> {course?.name}
      </h1>

      {/* <pre>
        <code>{JSON.stringify(course, null, 2)}</code>
      </pre> */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb" style={{}}>
          <li className="breadcrumb-item wd-dani-breadcrumb-item">
            <a href="#">{course?.number}</a>
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
      </nav>
      <hr />
      <div>
        <CourseNavigation />
      </div>
      <Routes>
        <Route path="/" element={<Navigate to="Home" />} />
        <Route path="Home" element={<h1>Home</h1>} />
        <Route path="Modules" element={<h1>Modules</h1>} />
        <Route path="Piazza" element={<h1>Piazza</h1>} />
        <Route path="Assignments" element={<h1>Assignments</h1>} />
        <Route
          path="Assignments/:assignmentId"
          element={<h1>Assignment Editor</h1>}
        />
        <Route path="Grades" element={<h1>Grades</h1>} />
      </Routes>
    </>
  );
}
export default Courses;
