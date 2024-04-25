import { useEffect } from "react"
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa"
import { useNavigate, useParams } from "react-router"
import { IoRocketOutline } from "react-icons/io5"
import { AiOutlineStop } from "react-icons/ai"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { KanbasState } from "../../store"
import * as reduxQuizzes from "./quizzesReducer"
import * as reduxQuestions from "./Editor/questionsReducer"
import * as client from "./client"

function Quizzes() {
  const { courseId } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const quizList = useSelector((state: KanbasState) => state.quizzesReducer.quizzes)
  const quiz = useSelector((state: KanbasState) => state.quizzesReducer.quiz)

  const setAvailability = (availableFromDate: any, availableUntilDate: any, dueDate: any) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const availableFrom = new Date(availableFromDate)
    const due = new Date(availableUntilDate)
    if (today > due) {
      return "Closed"
    } else if (today >= availableFrom && today <= due) {
      return "Available"
    } else if (today < availableFrom) {
      return `Not available until ${availableFromDate}`
    }
  }

  //- C - Create Quiz
  const handleAddQuiz = async () => {
    try {
      // Reset quiz to initial state
      dispatch(reduxQuizzes.resetCurrentQuiz(courseId))
      // Create quiz in DB
      const newQuiz = await client.createQuiz(courseId, quiz)
      // Add quiz to redux quiz list
      dispatch(reduxQuizzes.addQuiz(newQuiz))
      // Navigate to Quiz Detail Screen
      navigate(`/Kanbas/Courses/${courseId}/Quizzes/${newQuiz._id}`)
    } catch (error) {
      console.log("Failed to create quiz", error)
    }
  }

  //- R - Fetch Quizzes from DB
  const fetchQuizzes = async () => {
    const quizzes = await client.findQuizzesForCourse(courseId || "")
    // Add quizzes to redux quiz list
    dispatch(reduxQuizzes.setQuizzes(quizzes))
  }

  //- U - UpdateQuiz (for Publish/Unpublish)
  const handleUpdateQuiz = async (quiz: any) => {
    try {
      // Update clicked quiz in DB
      await client.updateQuiz(quiz)
      // Update clicked quiz in redux quiz list
      dispatch(reduxQuizzes.updateQuiz(quiz))
    } catch (error) {
      console.log("Failed to update quiz", error)
    }
  }

  //- D - DeleteQuiz
  const handleDeleteQuiz = async (quizId: any) => {
    try {
      // Delete quiz from DB
      client.deleteQuiz(quizId).then((status) => {
        // Delete quiz from redux quiz list
        dispatch(reduxQuizzes.deleteQuiz(quizId))
      })
    } catch (error) {
      console.log("Failed to delete quiz", error)
    }
  }

  useEffect(() => {
    // Reset quiz to initial state
    dispatch(reduxQuizzes.resetCurrentQuiz(courseId))
    // Fetch quizzes from DB
    fetchQuizzes()
  }, [courseId])

  return (
    <>
      <div id="quizzes-list" className="container p-2">
        <div id="quizzes-buttons" className="row justify-content-end">
          <div className=" container">
            <div className=" d-flex">
              <input type="text" className=" form-control w-25 float-start" placeholder="Search for Quiz" />
              {/* courseId: {courseId} <br />
              quiz in redux store: {quiz.name} */}
              <div className="col">
                <div className=" float-end">
                  <button
                    className="wd-dani-btn-red"
                    style={{ textDecoration: "none", color: "white" }}
                    onClick={() => {
                      handleAddQuiz()
                    }}>
                    +Quiz
                  </button>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
        {/*  */}
        <ul className="list-group wd-modules">
          <li className="list-group-item rounded-1 m-1 p-0">
            <div className="d-flex align-items-center pt-3 pb-3">
              <FaEllipsisV className="ms-2 me-2 fs-5" />
              <div className="row ms-0 me-auto wd-dani-modules-module-heading" style={{ cursor: "pointer" }}>
                Assignment Quizzes
              </div>
            </div>
            <ul className="list-group rounded-0">
              {/*//- Map from here */}
              {quizList.map((quiz) => (
                <li key={quiz._id} className="list-group-item d-flex align-items-center">
                  <IoRocketOutline className=" me-3 ms-3 fs-4 text-success" />
                  <div className="d-flex flex-column w-100">
                    <Link
                      to={`/Kanbas/Courses/${courseId}/Quizzes/${quiz._id}`}
                      style={{
                        color: "#28343c",
                      }}
                      className="text-decoration-none fw-bold"
                      onClick={() => {
                        // Set clicked quiz as current quiz in redux store
                        dispatch(reduxQuizzes.setQuiz(quiz))
                        dispatch(reduxQuestions.setQuestions(quiz.questions))
                      }}>
                      {quiz.name}
                    </Link>
                    <div className="container-fluid">
                      <div className="d-flex text-secondary">
                        {
                          <p className="fw-bold">
                            {setAvailability(quiz.availableFromDate, quiz.availableUntilDate, quiz.dueDate)}
                          </p>
                        }
                        &nbsp;|&nbsp;
                        <p className="fw-bold">Due&nbsp;</p> {quiz.dueDate}
                        {/* fixme: */}
                        &nbsp;|&nbsp; {quiz.points}&nbsp;pts &nbsp;|&nbsp; {quiz.questions.length}&nbsp;
                        {quiz.questions.length > 1 ? "Questions" : "questions"}
                      </div>
                    </div>
                  </div>
                  <span className=" float-end">
                    {quiz.published ? (
                      <FaCheckCircle
                        className=" text-success fs-3"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          handleUpdateQuiz({ ...quiz, published: !quiz.published })
                        }}
                      />
                    ) : (
                      <AiOutlineStop
                        className=" text-secondary fs-3"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          handleUpdateQuiz({ ...quiz, published: !quiz.published })
                        }}
                      />
                    )}
                  </span>
                  {/*//- Each Quizzes' Dropdown option  */}
                  <div className="dropdown">
                    <button
                      className="btn dropdown-toggle ms-4 me-3 rounded-1"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">
                      <FaEllipsisV className=" fs-4" />
                    </button>
                    <ul className="dropdown-menu border">
                      <li>
                        <Link
                          to={`/Kanbas/Courses/${courseId}/Quizzes/${quiz._id}/Editor`}
                          style={{
                            color: "#28343c",
                          }}
                          className="text-decoration-none fw-bold"
                          onClick={() => {
                            dispatch(reduxQuizzes.setQuiz(quiz))
                          }}>
                          <button className="dropdown-item text-end border" style={{ fontSize: "18px" }}>
                            Edit
                          </button>
                        </Link>
                      </li>
                      <li>
                        <button
                          className="dropdown-item text-end border"
                          style={{ fontSize: "18px" }}
                          onClick={() => handleDeleteQuiz(quiz._id)}>
                          Delete
                        </button>
                      </li>
                      <li>
                        <button
                          className="dropdown-item text-end border"
                          style={{ fontSize: "18px" }}
                          onClick={() => handleUpdateQuiz({ ...quiz, published: !quiz.published })}>
                          {quiz.published ? "Unpublish" : "Publish"}
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item text-end border" style={{ fontSize: "18px" }}>
                          Copy
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item text-end border" style={{ fontSize: "18px" }}>
                          Sort
                        </button>
                      </li>
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </>
  )
}
export default Quizzes
