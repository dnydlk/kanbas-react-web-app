import { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { BsThreeDotsVertical } from "react-icons/bs";
function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    //? <div id="module-list">
    <div id="module-list" className="flex-fill p-2 border border-black">
      <div className="d-flex justify-content-end">
        <button className="wd-dani-btn">Collapse All</button>
        <button className="wd-dani-btn">Expand All</button>
        <button className="wd-dani-btn">View Progress</button>
        <select style={{ marginLeft: "5px" }}>
          <option>Publish All</option>
          <option>Unpublish All</option>
        </select>
        <button className="wd-dani-btn-red">+ Module</button>
        <button className="wd-dani-btn">
          <BsThreeDotsVertical />
        </button>
      </div>
      <h1>test</h1>
      <ul className="list-group wd-modules">
        {modulesList.map((module) => (
          <li
            className="list-group-item"
            onClick={() => setSelectedModule(module)}>
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson) => (
                  <li className="list-group-item">
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}{" "}
              </ul>
            )}{" "}
          </li>
        ))}{" "}
      </ul>
    </div>
  );
}
export default ModuleList;
