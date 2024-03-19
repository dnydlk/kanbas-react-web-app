import { assignments } from "../../Database";
import { grades } from "../../Database";
import { users } from "../../Database";
import { enrollments } from "../../Database";
import { useParams } from "react-router-dom";
import { FaGear } from "react-icons/fa6";
import { CiExport } from "react-icons/ci";
import { CiImport } from "react-icons/ci";
import { CiFilter } from "react-icons/ci";

function Grades() {
  const { courseId } = useParams();
  const as = assignments.filter((assignment) => assignment.course === courseId);
  const es = enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="float-end">
            <button className="wd-dani-btn">
              <CiImport />
              Import
            </button>
            <button className="wd-dani-btn-red">
              <CiExport />
              Export
            </button>
            <button className="wd-dani-btn">
              <FaGear />
            </button>
          </div>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <label htmlFor="student-name" className="wd-modules-heading">
            Student Names
          </label>
        </div>
        <div className="col">
          <label htmlFor="assignment-name" className="wd-modules-heading">
            Assignment Names
          </label>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <input
            type="text"
            className="form-control"
            id="assignment-name"
            value="Search Assignments"
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            id="student-name"
            value="Search Students"
          />
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <button className="wd-dani-btn">
            <CiFilter />
            Apply Filters
          </button>
        </div>
        <div className="col"></div>
      </div>
      <h1>Grades</h1>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <th>Student Name</th>
            {as.map((assignment) => (
              <th>{assignment.title}</th>
            ))}
          </thead>
          <tbody>
            {es.map((enrollment) => {
              const user = users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                  <td>
                    {user?.firstName} {user?.lastName}
                  </td>
                  {as.map((assignment) => {
                    const grade = grades.find(
                      (grade) =>
                        grade.student === enrollment.user &&
                        grade.assignment === assignment._id
                    );
                    return <td>{grade?.grade || ""}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Grades;
