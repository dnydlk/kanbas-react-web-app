import { Link } from "react-router-dom"
import "../styles.css"
import { FaPlus } from "react-icons/fa"
import { useSelector, useDispatch } from "react-redux"
import { KanbasState } from "../store"
import { addCourse, deleteCourse, updateCourse, setCourse, setCourses } from "./coursesReducer"
import { useEffect } from "react"
import * as client from "./client"

function Dashboard() {
  const courseList = useSelector((state: KanbasState) => state.coursesReducer.courses)

  const course = useSelector((state: KanbasState) => state.coursesReducer.course)

  const currentUser = useSelector((state: KanbasState) => state.userReducer.currentUser)

  const dispatch = useDispatch()

  const fetchCourses = async () => {
    if (currentUser.role !== "STUDENT") {
      const courses = await client.getAllCoursesByAuthor()
      dispatch(setCourses(courses))
    } else {
      const course = await client.getAllCoursesByStudent()
      dispatch(setCourses(course))
    }
  }

  useEffect(() => {
    fetchCourses()
  }, [dispatch])

  //- createCourse
  const handleCreateCourse = async () => {
    try {
      const newCourse = await client.addNewCourse(course)
      dispatch(addCourse(newCourse))
      fetchCourses()
    } catch (error) {
      console.log("Failed to create course", error)
    }
  }

  //- updateCourse
  const handleUpdateCourse = async () => {
    try {
      const updatedCourse = await client.updateCourse(course)
      dispatch(updateCourse(updatedCourse))
      fetchCourses()
    } catch (error) {
      console.log("Failed to update course", error)
    }
  }

  //- deleteCourse
  const handleDeleteCourse = async (courseId: string) => {
    try {
      await client.deleteCourse(courseId)
      dispatch(deleteCourse(courseId))
      fetchCourses()
    } catch (error) {
      console.log("Failed to delete course", error)
    }
  }

  return (
    <div id="dashboard">
      <h1>Dashboard</h1> <hr />
      <h2 className="me-auto">Courses ({courseList.length})</h2>
      <hr className="m-0 mt-2 mb-3" />
      <h5>Course</h5>
      <div className=" d-flex">
        {/* <div className=" me-2">
          currentUser:
          <pre>
            <code>{JSON.stringify(currentUser, null, 2)}</code>
          </pre>
        </div>
        <div className="">
          currentCourse:
          <pre>
            <code>{JSON.stringify(course, null, 2)}</code>
          </pre>
        </div> */}
      </div>
      <div className="container-fluid m-0 p-0">
        <div className="row">
          <div className="col">
            <label>Course Name</label>
            <input
              type="text"
              value={course.name}
              className="form-control"
              onChange={(e) => dispatch(setCourse({ ...course, name: e.target.value }))}
            />
            <label>Course Number</label>
            <input
              type="text"
              value={course.number}
              className="form-control"
              onChange={(e) =>
                dispatch(
                  setCourse({
                    ...course,
                    number: e.target.value,
                  })
                )
              }
            />
            <label>startDate</label>
            <input
              typeof="date"
              value={course.startDate}
              className="form-control"
              type="date"
              onChange={(e) =>
                dispatch(
                  setCourse({
                    ...course,
                    startDate: e.target.value,
                  })
                )
              }
            />
            <label>endDate</label>
            <input
              typeof="date"
              value={course.endDate}
              className="form-control"
              type="date"
              onChange={(e) =>
                dispatch(
                  setCourse({
                    ...course,
                    endDate: e.target.value,
                  })
                )
              }
            />
            <label>Credit</label>
            <input
              type="number"
              value={course.credit}
              className="form-control w-100"
              onChange={(e) => dispatch(setCourse({ ...course, credit: e.target.value }))}
            />
            <label>Description</label>
            <input
              type="text"
              value={course.description}
              className="form-control w-100"
              onChange={(e) => dispatch(setCourse({ ...course, description: e.target.value }))}
            />
          </div>
          <div className="col">
            {/* <button onClick={addNewCourse} className="wd-dani-btn-red mt-1"> */}
            <button
              onClick={() => {
                // dispatch(addCourse(course))
                handleCreateCourse()
              }}
              className="wd-dani-btn-red mt-1">
              <FaPlus /> Add
            </button>
            <button
              className="wd-dani-btn-red bg-success mt-1"
              onClick={(event) => {
                event.preventDefault()
                // dispatch(updateCourse(course))
                handleUpdateCourse()
              }}>
              Update
            </button>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-1">
        <div className="row row-cols-1 g-4 ">
          {courseList.map((course) => (
            <div key={course._id + course.name} className="col" style={{ width: "300px" }}>
              <div className="card">
                <img
                  src={`./images/${course.image || "C00.jpg"}`}
                  // alt={`${course.image.toString()}`}
                  className="card-img-top"
                  style={{ height: "150px" }}
                />
                <div className="card-body">
                  <Link
                    className="card-title"
                    to={`/Kanbas/Courses/${course._id}`} //? to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontWeight: "bold",
                    }}>
                    {course.name}
                  </Link>
                  <p className="card-text">{course.name}</p>
                  <Link
                    to={`/Kanbas/Courses/${course._id}`} //? to={`/Kanbas/Courses/${course._id}/Home`}
                    className="btn btn-primary">
                    Go
                  </Link>
                  <button
                    onClick={(event) => {
                      event.preventDefault()
                      // editCourse(course._id)
                      dispatch(setCourse(course))
                    }}
                    className="btn btn-success ms-1 me-1">
                    Edit
                  </button>
                  <button
                    onClick={(event) => {
                      event.preventDefault()
                      // dispatch(deleteCourse(course._id))
                      handleDeleteCourse(course._id)
                    }}
                    className="btn btn-danger"
                    style={{ backgroundColor: "#a32424" }}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Dashboard
