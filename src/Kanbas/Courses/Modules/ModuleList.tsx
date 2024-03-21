import react, { useState } from "react";
import "./index.css";
import { courses, modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { RiEditCircleFill } from "react-icons/ri";
import { useParams } from "react-router";
import { BsThreeDotsVertical } from "react-icons/bs";
function ModuleList() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  const [isAddModuleFormVisible, setIsAddModuleFormVisible] = useState(true);
  const [moduleList, setModuleList] = useState(modules);
  const [module, setModule] = useState({
    _id: "0",
    name: "New Module",
    description: "New Description",
    course: courseId,
  });
  const [expandedModules, setExpandedModules] = useState(new Set<string>());

  const toggleModule = (moduleId: string) => {
    setExpandedModules((prevExpandedModules) => {
      const newExpandedModules = new Set(prevExpandedModules);
      if (newExpandedModules.has(moduleId)) {
        newExpandedModules.delete(moduleId);
      } else {
        newExpandedModules.add(moduleId);
      }
      return newExpandedModules;
    });
  };

  const collapseAll = () => {
    setExpandedModules(new Set());
  };

  const expandAll = () => {
    const allModuleIds = new Set(modules.map((module) => module._id));
    setExpandedModules(allModuleIds);
  };

  const addModule = (module: any) => {
    const newModule = {
      ...module,
      _id: new Date().getTime().toString(),
      lessons: [],
    };
    const newModuleList = [newModule, ...moduleList];
    setModuleList(newModuleList);
  };

  const deleteModule = (moduleId: string) => {
    const newModuleList = moduleList.filter(
      (module) => module._id !== moduleId
    );
    setModuleList(newModuleList);
  };

  const updateModule = (updatedModule: any) => {
    const newModuleList = moduleList.map((m) => {
      if (m._id === updatedModule._id) {
        // return module; //* backup
        return { ...m, ...updatedModule, lessons: m.lessons };
      } else {
        return m;
      }
    });
    setModuleList(newModuleList);
  };

  return (
    <div id="module-list" className="container-fluid p-2">
      <div id="module-buttons" className="row">
        <div className="col-auto p-0 ms-auto">
          <button className="wd-dani-btn" onClick={collapseAll}>
            Collapse All
          </button>
        </div>
        <div className="col-auto p-0">
          <button className="wd-dani-btn" onClick={expandAll}>
            Expand All
          </button>
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
          <button
            className="wd-dani-btn-red"
            onClick={() => {
              setIsAddModuleFormVisible(!isAddModuleFormVisible);
            }}>
            + Module
          </button>
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
      <div id="add-module-form">
        {isAddModuleFormVisible && (
          <div className="container">
            <div className="row">
              <div className="col">
                <input
                  className="form-control m-1 me-auto"
                  value={module.name}
                  onChange={(e) =>
                    setModule({ ...module, name: e.target.value })
                  }
                />
                <textarea
                  className="form-control m-1"
                  value={module.description}
                  onChange={(e) =>
                    setModule({ ...module, description: e.target.value })
                  }
                />
              </div>
              <div className="col">
                <button
                  className="btn btn-danger m-1"
                  style={{ backgroundColor: "#a32424" }}
                  onClick={() => {
                    addModule(module);
                  }}>
                  Add
                </button>
                <button
                  className="btn btn-success m-1"
                  onClick={() => {
                    updateModule(module);
                  }}>
                  Update
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <ul className="list-group wd-modules">
        {moduleList
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="list-group-item rounded-1 m-1 p-0">
              <div className="d-flex align-items-center pt-3 pb-3">
                <FaEllipsisV className="ms-2 me-2 fs-5" />
                <div
                  className="row ms-0 me-auto wd-dani-modules-module-heading"
                  style={{ cursor: "pointer" }}
                  onClick={() => toggleModule(module._id)}>
                  {module.name}
                </div>
                <span>
                  <FaCheckCircle className="text-success ms-1 me-2" />
                  <FaPlusCircle className="ms-1 me-1" />
                  <TiDelete
                    className="ms-1 me-0 fs-4 wd-dani-modules-icon-btn"
                    style={{ color: "#a32424" }}
                    onClick={() => {
                      deleteModule(module._id);
                    }}
                  />
                  <RiEditCircleFill
                    className="text-success ms-1 me-1 fs-5 wd-dani-modules-icon-btn"
                    style={{ color: "#a32424" }}
                    onClick={() => {
                      setModule(module);
                    }}
                  />
                  <FaEllipsisV className="ms-1 me-1" />
                </span>
              </div>
              {expandedModules.has(module._id) && (
                <ul className="list-group rounded-0">
                  {module.lessons?.map((lesson, lessonIndex) => (
                    <li key={lessonIndex} className="list-group-item">
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
