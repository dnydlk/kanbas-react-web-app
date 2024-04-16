import "./index.css"
import { useParams } from "react-router"
import { KanbasState } from "../../store"
import { useEffect, useState } from "react"
import { addModule, deleteModule, setModule, setModuleCourse, updateModule, setModules } from "./modulesReducer"
import * as client from "./client"
import { TiDelete } from "react-icons/ti"
import { RiEditCircleFill } from "react-icons/ri"
import { BsThreeDotsVertical } from "react-icons/bs"
import { useDispatch, useSelector } from "react-redux"
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa"

function ModuleList() {
  const { courseId } = useParams()

  const moduleList = useSelector((state: KanbasState) => state.modulesReducer.modules)

  const module = useSelector((state: KanbasState) => state.modulesReducer.module)

  const dispatch = useDispatch()

  // Functions for toggling module visibility
  const [isAddModuleFormVisible, setIsAddModuleFormVisible] = useState(true)
  const [expandedModules, setExpandedModules] = useState(new Set<string>())
  const toggleModule = (moduleId: string) => {
    setExpandedModules((prevExpandedModules) => {
      const newExpandedModules = new Set(prevExpandedModules)
      if (newExpandedModules.has(moduleId)) {
        newExpandedModules.delete(moduleId)
      } else {
        newExpandedModules.add(moduleId)
      }
      return newExpandedModules
    })
  }
  const collapseAll = () => {
    setExpandedModules(new Set())
  }
  const expandAll = () => {
    const allModuleIds = new Set(moduleList.map((module) => module._id))
    setExpandedModules(allModuleIds)
  }

  const refreshModules = async () => {
    const modules = await client.findModulesForCourse(courseId || "")
    dispatch(setModules(modules))
  }

  useEffect(() => {
    refreshModules()
    dispatch(setModuleCourse(courseId || ""))
  }, [courseId, dispatch, moduleList.length])

  //// findCourseById
  // const findCourseById = async (courseId: string) => {
  //   const response = await axios.get(`${COURSES_API}/${courseId}`)
  //   setCourse(response.data)
  // }

  //- createModule
  const handleAddModule = async () => {
    try {
      const newModule = await client.createModule(courseId, module)
      dispatch(addModule(newModule))
    } catch (error) {
      console.error("Failed to add module:", error)
    }
  }

  //- deleteModule
  const handleDeleteModule = (moduleId: string) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId))
    })
  }

  //- updateModule
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module)
    dispatch(updateModule(module))
  }

  return (
    <div id="module-list" className="container-fluid p-2">
      <div id="module-buttons" className="d-flex row">
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
              setIsAddModuleFormVisible(!isAddModuleFormVisible)
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
      <pre>
        <code>{JSON.stringify(module, null, 2)}</code>
      </pre>
      <div id="add-module-form">
        {isAddModuleFormVisible && (
          <div className="container">
            <div className="row">
              <div className="col">
                <input
                  className="form-control m-1 me-auto"
                  value={module.name}
                  onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
                />
                <textarea
                  className="form-control m-1"
                  value={module.description}
                  onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
                />
              </div>
              <div className="col">
                <button
                  className="btn btn-danger m-1"
                  style={{ backgroundColor: "#a32424" }}
                  onClick={() => {
                    handleAddModule()
                  }}>
                  Add
                </button>
                <button
                  className="btn btn-success m-1"
                  onClick={() => {
                    handleUpdateModule()
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
                  <br />
                  <div style={{ fontWeight: "normal", fontSize: "0.9em" }}>{module.description}</div>
                </div>
                <div className="d-flex flex-nowrap align-items-center justify-content-between">
                  <FaCheckCircle className="text-success ms-1 me-2" />
                  <FaPlusCircle className="ms-1 me-1" />
                  {/* //- Delete button */}
                  <TiDelete
                    className="ms-1 me-0 fs-4 wd-dani-modules-icon-btn"
                    style={{ color: "#a32424" }}
                    onClick={() => {
                      handleDeleteModule(module._id)
                    }}
                  />
                  {/* //- Edit button */}
                  <RiEditCircleFill
                    className="text-success ms-1 me-1 fs-5 wd-dani-modules-icon-btn"
                    style={{ color: "#a32424" }}
                    onClick={() => {
                      dispatch(setModule(module))
                    }}
                  />
                  <FaEllipsisV className="ms-1 me-1" />
                </div>
              </div>
              {expandedModules.has(module._id) && (
                <ul className="list-group rounded-0">
                  {module.lessons?.map((lesson: any, lessonIndex: any) => (
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
  )
}
export default ModuleList
