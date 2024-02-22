import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";
import "../styles.css";
function Dashboard() {
  return (
    <div id="dashboard">
      <h1>Dashboard</h1> <hr />
      <h2>Published Courses ({courses.length})</h2> <hr />
      <div className="row justify-content-center">
        <div className="row row-cols-1 g-4 ">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: "300px" }}>
              <div className="card">
                <img
                  src={`./images/${course.image}`}
                  className="card-img-top"
                  style={{ height: "150px" }}
                />
                <div className="card-body">
                  <Link
                    className="card-title"
                    to={`/Kanbas/Courses/${course._id}`} //? to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{
                      textDecoration: "none",
                      color: "navy",
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
