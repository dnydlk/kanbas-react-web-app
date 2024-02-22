import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Navigation/Breadcrumb";
import ModuleList from "./Modules/List";
import Home from "./Home";

function Courses() {
  return (
    <>
      <Breadcrumb />
      <hr />
      <div className="d-flex">
        <CourseNavigation />
        <Routes>
          <Route path="/" element={<Navigate to="Home" />} />
          <Route path="Home" element={<Home />} />
          <Route path="Modules" element={<ModuleList />} />
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
