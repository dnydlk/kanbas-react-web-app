import React, { useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import "../styles.css";
import { FaPlus } from "react-icons/fa";

// interface Course {
//   _id: string;
//   name: string;
//   number: string;
//   startDate: string;
//   endDate: string;
//   image: string;
// }

// interface DashboardProps {
//   courses: Course[];
//   course: Course;
//   setCourse: (course: Course) => void;
//   addNewCourse: () => void;
//   deleteCourse: (courseId: string) => void;
//   updateCourse: () => void;
// }

// function Dashboard({
//   courses,
//   course,
//   setCourse,
//   addNewCourse,
//   deleteCourse,
//   updateCourse,
// }: DashboardProps) {

function Dashboard() {
    const [courses, setCourses] = useState(db.courses);
    const [course, setCourse] = useState({
      _id: "0",
      name: "New Course",
      number: "New Number",
      startDate: "2024-09-10",
      endDate: "2024-12-15",
      image: "C00.jpg",
    });

    const addNewCourse = () => {
      const newCourse = { ...course, _id: new Date().getTime().toString() };
      setCourses([...courses, { ...course, ...newCourse }]);
    };

    const deleteCourse = (courseId: string) => {
      setCourses(courses.filter((course) => course._id !== courseId));
    };

    const updateCourse = () => {
      setCourses(
        courses.map((c) => {
          if (c._id === course._id) {
            return course;
          } else {
            return c;
          }
        })
      );
    };

    const editCourse = (courseId: string) => {
      const courseToEdit = courses.filter((course) => course._id === courseId);
      setCourse(courseToEdit[0]);
    };

    return (
      <div id="dashboard">
        <h1>Dashboard</h1> <hr />
        <h2 className="me-auto">Published Courses ({courses.length})</h2>
        <hr className="m-0 mt-2 mb-3" />
        <h5>Course</h5>
        <input
          type="text"
          value={course.name}
          className="form-control"
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
        />
        <input
          type="text"
          value={course.number}
          className="form-control"
          onChange={(e) =>
            setCourse({
              ...course,
              number: e.target.value,
            })
          }
        />
        <input
          typeof="date"
          value={course.startDate}
          className="form-control"
          type="date"
          onChange={(e) =>
            setCourse({
              ...course,
              startDate: e.target.value,
            })
          }
        />
        <input
          typeof="date"
          value={course.endDate}
          className="form-control"
          type="date"
          onChange={(e) =>
            setCourse({
              ...course,
              endDate: e.target.value,
            })
          }
        />
        <button
          onClick={addNewCourse}
          className="wd-dani-btn-red float-end mt-1">
          <FaPlus /> Add
        </button>
        <button
          className="wd-dani-btn-red bg-success float-end mt-1"
          onClick={(event) => {
            event.preventDefault();
            updateCourse();
          }}>
          Update
        </button>
        <div className="row justify-content-center mt-1">
          <div className="row row-cols-1 g-4 ">
            {courses.map((course) => (
              <div key={course._id} className="col" style={{ width: "300px" }}>
                <div className="card">
                  <img
                    src={`./images/${course.image}`}
                    alt={`Course Image is ${course.image.toString()}`}
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
                        event.preventDefault();
                        editCourse(course._id);
                      }}
                      className="btn btn-success ms-1 me-1">
                      Edit
                    </button>
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
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
    );
  }
export default Dashboard;
