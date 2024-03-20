import react, { useState } from "react";
import "./index.css";
import { courses, modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { BsThreeDotsVertical } from "react-icons/bs";
function ModuleList() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  // const modulesList = modules.filter((module) => module.course === courseId);
  const [modulesList, setModulesList] = useState(modules);

  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    <div id="module-list" className="container-fluid p-2">
      <div id="module-buttons" className="row">
        <div className="col-auto p-0 ms-auto">
          <button className="wd-dani-btn">Collapse All</button>
        </div>
        <div className="col-auto p-0">
          <button className="wd-dani-btn">Expand All</button>
        </div>
        <div className="col-auto p-0">
          <button className="wd-dani-btn">View Progress</button>
        </div>
        <div className="col-auto p-0">
          <select style={{ marginLeft: "5px", marginTop: "13px" }}>
            <option>Publish All</option>
            <option>Unpublish All</option>
          </select>
        </div>
        <div className="col-auto p-0">
          <button className="wd-dani-btn-red">+ Module</button>
        </div>
        <div className="col-auto p-0 me-3">
          <button className="wd-dani-btn">
            <BsThreeDotsVertical />
          </button>
        </div>
      </div>
      <hr />
      {/* <pre>
        <code>{JSON.stringify(modulesList, null, 2)}</code>
      </pre> */}
      <ul className="list-group wd-modules">
        {modulesList
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li
              key={index}
              className="list-group-item rounded"
              onClick={() => setSelectedModule(module)}>
              <div className="d-flex align-items-center">
                <FaEllipsisV className="me-2 ms-2 fs-5" />
                <div
                  className="row me-auto wd-dani-modules-module-heading"
                  style={{ cursor: "pointer" }}>
                  {module.name}
                </div>
                <span>
                  <FaCheckCircle className="text-success ms-1 me-2" />
                  <FaPlusCircle className="ms-1 me-1" />
                  <FaEllipsisV className="ms-1 me-1" />
                </span>
              </div>
              {selectedModule._id === module._id && (
                <ul className="list-group">
                  {module.lessons?.map((lesson) => (
                    <li className="list-group-item">
                      <FaEllipsisV className="me-2 ms-2" />
                      {lesson.name}
                      <span className="float-end">
                        <FaCheckCircle className="text-success" />
                        <FaEllipsisV className="ms-2 me-1" />
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}
export default ModuleList;
