import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import { IoMdCheckmarkCircle } from "react-icons/io";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = assignments.find(
    (assignment) => assignment._id === assignmentId
  );
  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div id="assignment-editor" className="container p-2 ms-4">
      <div className="row">
        <div className="col"></div>
        <div className="col-auto text-end p-0 mb-0">
          <p id="published" className=" mb-0">
            <IoMdCheckmarkCircle className=" fs-3 me-1" />
            Published
          </p>
        </div>
        <div className="col-auto">
          <button className="wd-dani-btn">...</button>
        </div>
      </div>
      <hr />
      <h2>Assignment Name</h2>
      <input value={assignment?.title} className="form-control mb-4" />
      <div className="row">
        <div className="col">
          <textarea id="description" className=" form-control " rows={5}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem, ipsam et! Culpa, enim fugiat dolor officia
            consequuntur quas possimus soluta, earum illo dignissimos at magni
            repellendus minima autem impedit esse.
          </textarea>
          <div className="row mt-2 mb-4">
            <label
              htmlFor="points"
              className="col-2 col-form-label text-end m-1">
              Points
            </label>
            <div className="col-8 m-1">
              <input
                type="number"
                className="form-control"
                id="points"
                value="100"
              />
            </div>
          </div>
          <div className="row mt-2 mb-4">
            <label
              htmlFor="assignment-group"
              className="col-2 col-form-label text-end m-1">
              Assignment Group
            </label>
            <div className="col-8 m-1">
              <select id="assignment-group" className="form-control">
                <option>ASSIGNMENT</option>
                <option>QUIZ</option>
                <option>EXAM</option>
                <option>PROJECT</option>
              </select>
            </div>
          </div>
          <div className="row mt-2 mb-4">
            <label
              htmlFor="display-grade-as"
              className="col-2 col-form-label text-end m-1">
              Display Grade as
            </label>
            <div className="col-8 m-1">
              <select id="display-grade-as" className="form-control">
                <option>Percentage</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
              </select>
            </div>
          </div>
          <div className="row mt-2 mb-4">
            <div className="col-2 m-1"></div>
            <div className="col-8 m-1">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">
                  Do not count this assignment towards the final grade
                </label>
              </div>
            </div>
          </div>
          <div className="row mt-2 mb-4">
            <label
              htmlFor="display-grade-as"
              className="col-2 col-form-label text-end m-1">
              Assign
            </label>
            <div className="col-8 m-1 border border-light-subtle rounded">
              {/* <!-- * assign to --> */}
              <label
                htmlFor="assigne-to"
                className="row col-form-label ms-1 me-1 mt-1">
                Assign to
              </label>
              <div className="row ms-1 me-1 mb-2">
                <input
                  type="text"
                  className="assigne-to border border-light-subtle rounded p-2"
                  id="assignment-name"
                  value="Everyone"
                />
              </div>
              {/* <!-- * due --> */}
              <label
                htmlFor="duedate"
                className="row col-form-label ms-1 me-1 mt-1">
                Due
              </label>
              <div className="row ms-1 me-1 mb-2">
                <input
                  type="date"
                  className="form-control border border-light-subtle rounded p-2"
                  id="assignment-name"
                  value="2024-02-08"
                />
              </div>
              {/* <!-- * available from --> */}
              <div className="row ms-1 me-1 mb-2">
                <div className="col">
                  <label htmlFor="available-from">Available from</label>
                </div>
                <div className="col">
                  <label htmlFor="until">Until</label>
                </div>
              </div>
              <div className="row ms-1 me-1 mb-2">
                <div className="col">
                  <input
                    type="date"
                    className="form-control assigne-to p-2"
                    id="available-from"
                    value="2024-02-01"
                  />
                </div>
                <div className="col">
                  <input
                    type="date"
                    className="form-control assigne-to p-2"
                    id="until"
                    value="2024-02-08"
                  />
                </div>
              </div>
              {/* <!-- * due --> */}
              <div className="row mt-4">
                <button className="wd-dani-btn">+Add</button>
              </div>
            </div>
          </div>
          <div className="row mt-2 mb-1">
            <hr />
          </div>
          <div className="row mb-5 flex-nowrap">
            <div className="col">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">
                  Notify users that this content has changed
                </label>
              </div>
            </div>
            <div className="col-auto text-end p-0">
              <Link
                to={`/Kanbas/Courses/${courseId}/Assignments`}
                className="wd-dani-btn float-end">
                Cancel
              </Link>
            </div>
            <div className="col-auto float-end p-0">
              <button
                onClick={handleSave}
                className="wd-dani-btn-red ms-2 float-end">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AssignmentEditor;
