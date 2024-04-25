import { v4 as uuidv4 } from "uuid"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router"
import * as reduxQuestions from "./questionsReducer"

function SingleQuestion({ question }: any) {
  const { courseId, quizId } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // Set the inputted question as the current question in redux store
  dispatch(reduxQuestions.setCurrentQuestion(question))

  return (
    <>
      {/*//- Question Type */}
      <div className="row mt-2 align-items-center">
        <div className="col-1 p-0"></div>
        <div className="col-3 text-end pe-4">
          <label htmlFor="question-type" className="form-label mt-2">
            Question Type
          </label>
        </div>
        <div className="col p-0">
          <p style={{ margin: "0" }}>{question.type}</p>
        </div>
        <div className="col-3">
          <button
            className="wd-dani-btn ms-auto me-auto"
            onClick={() => {
              dispatch(reduxQuestions.setCurrentQuestion(question))
              navigate(`/Kanbas/Courses/${courseId}/Quizzes/${quizId}/Editor/QuestionEditor`)
            }}>
            Edit Question
          </button>
        </div>
      </div>
      {/*//- Question Title */}
      <div className="row mt-0 align-items-center">
        <div className="col-4 text-end align-content-center pe-4">
          <label htmlFor="question-title">Question Title</label>
        </div>
        <div className="col p-0">
          <p style={{ margin: "0" }}>{question.title}</p>
        </div>
        <div className="col p-0 text-center">
          <label htmlFor="question-type" className="form-label mt-2">
            Pts: {question.points}
          </label>
        </div>
      </div>
      {/*//- Question Text */}
      <div className="row mt-2">
        <div className="col-4 text-end  pe-4">
          <label htmlFor="question-text">Question Text</label>
        </div>
        <div className="col p-0">
          <p style={{ margin: "0" }}>{question.text}</p>
        </div>
      </div>
      {/*//- Answer */}
      {/*//- Answer mapping for more */}
      {question.answers.map((answer: any, index: any) => (
        <div className="row mt-2 align-items-center" key={index}>
          <div className="col-1 text-end align-content-center pe-0"></div>
          <div className="col-3 text-end align-content-center pe-4">
            <label htmlFor="question-title">Possible Answer:</label>
          </div>
          <div className="col p-0 d-flex">
            <div className={`col ${answer.isAnswer ? "text-success fw-bold" : ""}`}>
              <p style={{ margin: "0" }}>{answer.text}</p>
            </div>
            <div className="col-5 align-items-center d-flex"></div>
          </div>
        </div>
      ))}
      <hr className=" mt-5 mb-5" />
    </>
  )
}

export default SingleQuestion
