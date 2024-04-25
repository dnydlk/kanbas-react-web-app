import { Navigate, Route, Routes } from "react-router-dom";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Navigation/Breadcrumb";
import ModuleList from "./Modules/ModuleList";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import Quizzes from "./Quizzes"
import Details from "./Quizzes/Details"
import EditorDetails from "./Quizzes/Editor/EditorDetails"
import QuestionEditor from "./Quizzes/Editor/QuestionEditor"
import EditorQuestions from "./Quizzes/Editor/EditorQuestions"
import Preview from "./Quizzes/Preview"

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
          <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
          <Route path="Quizzes" element={<Quizzes />} />
          <Route path="Quizzes/:quizId" element={<Details />} />
          <Route path="Quizzes/:quizId/Preview" element={<Preview />} />
          <Route path="Quizzes/:quizId/EditorDetails" element={<EditorDetails />} />
          <Route path="Quizzes/:quizId/EditorQuestions" element={<EditorQuestions />} />
          <Route path="Quizzes/:quizId/Editor/QuestionEditor" element={<QuestionEditor />} />
        </Routes>
      </div>
    </>
  )
}
export default Courses;
