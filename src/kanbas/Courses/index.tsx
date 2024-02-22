import { courses } from "../Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Navigation/Breadcrumb";
function Courses() {
  const params = useParams();
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  return (
    <>
      <Breadcrumb />
      <hr />
      <div className="d-flex">
        <CourseNavigation />
        <Routes>
          <Route path="/" element={<Navigate to="Home" />} />
          <Route
            path="Home"
            element={
              <div className=" d-flex">
                <h1>Home</h1>
              </div>
            }
          />
          <Route path="Modules" element={<h1>Modules</h1>} />
          <Route path="Piazza" element={<h1>Piazza</h1>} />
          <Route path="Assignments" element={<h1>Assignments</h1>} />
          <Route
            path="Assignments/:assignmentId"
            element={<h1>Assignment Editor</h1>}
          />
          <Route path="Grades" element={<h1>Grades</h1>} />
        </Routes>
      </div>
    </>
  );
}
export default Courses;
