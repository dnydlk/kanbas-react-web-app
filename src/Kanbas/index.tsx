import { Routes, Route, Navigate } from "react-router";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import "./styles.css";
import Courses from "./Courses";
import { useEffect, useState } from "react"
// import db from "./Database";
import { Provider } from "react-redux"
import store from "./store"
import TopNav from "./Navigation/TopNav"
import axios from "axios"

function Kanbas() {
  // const [courses, setCourses] = useState(db.courses);
  const [courses, setCourses] = useState<any[]>([])

  const [course, setCourse] = useState({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2024-09-10",
    endDate: "2024-12-15",
    image: "C00.jpg",
  })

  const COURSES_API = "http://localhost:4000/api/courses"

  //- findAllCourses
  const findAllCourses = async () => {
    const response = await axios.get(COURSES_API)
    setCourses(response.data)
  }

  //- addNewCourse
  // const addNewCourse = () => {
  //   const newCourse = { ...course, _id: new Date().getTime().toString() }
  //   setCourses([...courses, { ...course, ...newCourse }])
  // }
  const addNewCourse = async () => {
    const response = await axios.post(COURSES_API, course)
    setCourses([...courses, response.data])
  }

  //- deleteCourse
  // const deleteCourse = (courseId: string) => {
  //   setCourses(courses.filter((course) => course._id !== courseId))
  // }
  const deleteCourse = async (courseId: string) => {
    const response = await axios.delete(`${COURSES_API}/${courseId}`)
    setCourses(courses.filter((course) => course._id !== courseId))
  }

  //- updateCourse
  // const updateCourse = () => {
  //   setCourses(
  //     courses.map((c) => {
  //       if (c._id === course._id) {
  //         return course
  //       } else {
  //         return c
  //       }
  //     })
  //   )
  // }
  const updateCourse = async () => {
    const response = await axios.put(`${COURSES_API}/${course._id}`, course)
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course
        } else {
          return c
        }
      })
    )
  }

  useEffect(() => {
    findAllCourses()
  }, [])

  return (
    <Provider store={store}>
      <div id="kanbas" className="d-flex">
        <KanbasNavigation />
        <div className="main-content m-0 p-0" style={{ flexGrow: 1 }}>
          <TopNav />
          <div className="m-2 p-2">
            <Routes>
              <Route path="/" element={<Navigate to="Dashboard" />} />
              <Route path="Account" element={<h1>Account</h1>} />
              <Route
                path="Dashboard"
                element={
                  <Dashboard
                    course={course}
                    courses={courses}
                    setCourse={setCourse}
                    addNewCourse={addNewCourse}
                    deleteCourse={deleteCourse}
                    updateCourse={updateCourse}
                  />
                }
              />
              {/* <Route path="Dashboard" element={<Dashboard />} /> */}
              <Route path="Courses/:courseId/*" element={<Courses />} />
            </Routes>
          </div>
        </div>
      </div>
    </Provider>
  )
}
export default Kanbas;

//* since the Kanbas component consists of an entire application with lots of screens each implemented in several files, we've decided to use an entire folder to implement the component. It is common use the same name for the folder and component name, but it is not required.
