import React, { useState } from "react";
function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment in the UI",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  const [module, setModule] = useState({
    id: 1,
    name: "module name in the UI",
    description: "module description",
    course: [
      {
        _id: 2,
        name: "module course name ",
        description: "module course description",
        module: 1,
      },
    ],
  });

  const ASSIGNMENT_URL = "http://localhost:4000/a5/assignment";
  const MODULE_URL = "http://localhost:4000/a5/module";

  return (
    <div>
      <h3>Working With Objects</h3>
      <h4>Retrieving Objects</h4>
      <a
        href="http://localhost:4000/a5/assignment"
        className="btn btn-primary m-1">
        Get Assignment
      </a>
      <a
        href="http://localhost:4000/a5/assignment/title"
        className="btn btn-secondary m-1">
        Get Assignment Title
      </a>
      <br />
      <a href={`${MODULE_URL}`} className="btn btn-primary m-1">
        Get Module
      </a>
      <a href={`${MODULE_URL}/name`} className="btn btn-secondary m-1">
        Get Module Name
      </a>
      <h4>Modifying Properties</h4>
      <input
        type="text"
        className="form-control m-1"
        onChange={(e) => {
          setAssignment({ ...assignment, title: e.target.value });
        }}
        value={assignment.title}
      />
      <a
        href={`${ASSIGNMENT_URL}/title/${assignment.title}`}
        className="btn btn-primary m-1">
        Update Assignment Title
      </a>
      <input
        type="text"
        className="form-control m-1"
        onChange={(e) => {
          setModule({ ...module, name: e.target.value });
        }}
        value={module.name}
      />
      <a
        href={`${MODULE_URL}/name/${module.name}`}
        className="btn btn-primary m-1">
        Update Module Name
      </a>
      <input
        type="number"
        className="form-control m-1"
        onChange={(e) => {
          setAssignment({ ...assignment, score: parseInt(e.target.value) });
        }}
        value={assignment.score}
      />
      <a
        href={`${ASSIGNMENT_URL}/score/${assignment.score}`}
        className="btn btn-primary m-1">
        Update Assignment Score
      </a>
      <input
        type="checkbox"
        className="btn-check"
        id="btn-check-4"
        autoComplete="off"
      />
      <select
        className="form-select m-1"
        name="complete-status"
        id="completed"
        onChange={(e) => {
          setAssignment({
            ...assignment,
            completed: e.target.value === "true" ? true : false,
          });
        }}>
        <option value="true">Completed</option>
        <option selected value="false">
          Incomplete
        </option>
      </select>
      <a
        href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}
        className="btn btn-primary m-1">
        Update Assignment Status
      </a>
      <input
        type="text"
        className="form-control m-1"
        onChange={(e) => {
          setModule({ ...module, description: e.target.value });
        }}
        value={module.description}
      />
      <a
        href={`${MODULE_URL}/description/${module.description}`}
        className="btn btn-primary m-1">
        Update Module Description
      </a>
      <hr />
    </div>
  );
}
export default WorkingWithObjects;
