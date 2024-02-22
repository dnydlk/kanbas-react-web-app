import { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { BsThreeDotsVertical } from "react-icons/bs";
function ModuleList() {
  const { courseId } = useParams();
  console.log("🚀 ~ ModuleList ~ courseId:", courseId);
  // const modulesList = modules.filter((module) => module.course === courseId);
  const modulesList = modules.filter((module) => module.course === courseId);
  console.log("🚀 ~ ModuleList ~ modulesList:", modulesList);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    //? <div id="module-list">
    <div id="module-list" className="flex-fill p-2">
      <div id="module-buttons" className="d-flex justify-content-end">
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
      {/* <pre>
        <code>{JSON.stringify(modulesList, null, 2)}</code>
      </pre> */}
      <ul className="list-group wd-modules">
        {modulesList.map((module) => (
          <li
            className="list-group-item"
            onClick={() => setSelectedModule(module)}>
            <div>
              <FaEllipsisV className="me-2 ms-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success me-2 ms-1" />
                <FaPlusCircle className="me-1 ms-1" />
                <FaEllipsisV className="me-1 ms-1" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson) => (
                  <li className="list-group-item">
                    <FaEllipsisV className="ms-2 me-2" />
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
