import React, { useState } from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import { TiDelete } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../store";
import {
  deleteAssignment,
  resetToInitialState,
  setAssignment,
  setAssignmentCourse,
} from "./assignmentsReducer";
function Assignments() {
  const dispatch = useDispatch();
  const { courseId } = useParams();
  const assignmentList = useSelector(
    (state: KanbasState) => state.assignmentsReducer.assignments
  );
  console.log("🚀 ~ Assignments ~ assignmentList:", assignmentList);
  const assignment = useSelector(
    (state: KanbasState) => state.assignmentsReducer.assignment
  );
  dispatch(setAssignmentCourse(courseId));
  console.log("🚀 ~ Assignments ~ assignment:", assignment);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAssignmentId, setSelectedAssignmentId] = useState(null);
  // Function to open the modal and set which assignment is selected
  const openModal = (assignmentId: any) => {
    setSelectedAssignmentId(assignmentId);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to confirm deletion
  const confirmDelete = () => {
    if (selectedAssignmentId) {
      dispatch(deleteAssignment(selectedAssignmentId));
      closeModal();
    }
  };

  return (
    <>
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
                  {/*//- +Assignment */}
                  <button className="wd-dani-btn-red">
                    <Link
                      to={`/Kanbas/Courses/${courseId}/Assignments/New-Assignment`}
                      style={{ textDecoration: "none", color: "white" }}
                      onClick={() => {
                        dispatch(resetToInitialState(courseId));
                      }}>
                      +Assignment
                    </Link>
                  </button>
                  <button className="wd-dani-btn">...</button>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
        <ul className="list-group wd-modules">
          <li className="list-group-item rounded-1 m-1 p-0">
            <div className="d-flex align-items-center pt-3 pb-3">
              <FaEllipsisV className="ms-2 me-2 fs-5" />{" "}
              <div
                className="row ms-0 me-auto wd-dani-modules-module-heading"
                style={{ fontWeight: "bold" }}>
                ASSIGNMENTS
              </div>
              <span className="float-end">
                <FaCheckCircle className="text-success me-2 ms-1" />
                <FaPlusCircle className="me-1 ms-1" />
                <FaEllipsisV className="me-1 ms-1" />
              </span>
            </div>
            <ul className="list-group">
              {assignmentList
                .filter((assignment) => assignment.course === courseId)
                .map((assignment) => (
                  <li className="list-group-item d-flex align-items-center">
                    <FaEllipsisV className="me-2 ms-2" />
                    <Link
                      to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                      className="me-auto ms-1"
                      style={{
                        textDecoration: "none",
                        color: "#28343c",
                        fontWeight: "bold",
                      }}
                      onClick={() => {
                        dispatch(setAssignment(assignment));
                      }}>
                      {assignment.name}
                    </Link>
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <TiDelete
                        className="ms-1 me-0 fs-4 wd-dani-modules-icon-btn"
                        style={{ color: "#a32424" }}
                        onClick={() => {
                          openModal(assignment._id);
                          // dispatch(deleteAssignment(assignment._id));
                        }}
                      />
                      <FaEllipsisV className="ms-2 me-1" />
                    </span>
                  </li>
                ))}
            </ul>
          </li>
        </ul>
      </div>
      {/* Modal component */}
      {isModalOpen && (
        <div className="modal show d-block" tabIndex={-1} role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Removal</h5>
                <button
                  type="button"
                  className="btn fs-3"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={closeModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to remove this assignment?</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeModal}>
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={confirmDelete}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Assignments;
