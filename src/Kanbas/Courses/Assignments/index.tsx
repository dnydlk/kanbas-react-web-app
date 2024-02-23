import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <>
      {/* {<!-- Add buttons and other fields here -->} */}
      <div id="module-list" className="container p-2">
        <div id="module-buttons" className="row justify-content-end ">
          <div className="container">
            <div className="d-flex">
              <input
                type="text"
                className="form-control w-25 float-start "
                placeholder="Search for Assignment"
              />
              <div className="col">
                <div className="float-end">
                  <button className="wd-dani-btn">+Group</button>
                  <button className="wd-dani-btn-red">+Assignment</button>
                  <button className="wd-dani-btn">...</button>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
        <ul className="list-group wd-modules">
          <li className="list-group-item rounded-top">
            <div>
              <FaEllipsisV className="me-2 ms-2" /> ASSIGNMENTS
              <span className="float-end">
                <FaCheckCircle className="text-success me-2 ms-1" />
                <FaPlusCircle className="me-1 ms-1" />
                <FaEllipsisV className="me-1 ms-1" />
              </span>
            </div>
            <ul className="list-group">
              {assignmentList.map((assignment) => (
                <li className="list-group-item">
                  <FaEllipsisV className="me-2 ms-2" />
                  <Link
                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                    {assignment.title}
                  </Link>
                  <span className="float-end">
                    <FaCheckCircle className="text-success" />
                    <FaEllipsisV className="ms-2 me-1" />
                  </span>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Assignments;
