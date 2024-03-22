import { Navigate, Route, Routes } from "react-router-dom";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Navigation/Breadcrumb";
import ModuleList from "./Modules/ModuleList";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";

function Courses() {
  return (
    <>
      <Breadcrumb />
      <div className="d-flex">
        <CourseNavigation />
        <Routes>
          <Route path="/" element={<Navigate to="Home" />} />
          <Route path="Home" element={<Home />} />
          <Route path="Modules" element={<ModuleList />} />
          <Route path="Piazza" element={<h1>Piazza</h1>} />
          <Route path="Grades" element={<Grades />} />
          <Route path="Assignments" element={<Assignments />} />
          <Route
            path="Assignments/:assignmentId"
            element={<AssignmentEditor />}
          />
        </Routes>
      </div>
    </>
  );
}
export default Courses;
