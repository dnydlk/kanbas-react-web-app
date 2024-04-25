import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router"
import { KanbasState } from "../../../store"
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa"
import { AiOutlineStop } from "react-icons/ai"
import * as reduxQuizzes from "../quizzesReducer"
import * as reduxQuestions from "./questionsReducer"
import * as client from "../client"

function EditorDetails() {
  const { courseId, quizId } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // Get quiz from redux store (from clicked quiz in Quiz List Screen)
  const quiz = useSelector((state: KanbasState) => state.quizzesReducer.quiz)
  // Set quiz's question list redux to quiz questions
  dispatch(reduxQuestions.setQuestions(quiz.questions))
  // reset current question redux
  dispatch(reduxQuestions.resetCurrentQuestion())
  // question list that is going to be added to the quiz redux list
  const questionList = useSelector((state: KanbasState) => state.questionsReducer.questions)

  //- U - UpdateQuiz
  const handleSaveQuiz = async () => {
    const updatedQuiz = {
      ...quiz,
      points: await calculatePoints(questionList),
      questions: questionList,
    }
    // Update quiz in redux quiz list
    dispatch(reduxQuizzes.setQuizQuestions(questionList))
    // Update quiz in redux quiz list
    dispatch(reduxQuizzes.updateQuiz(updatedQuiz))
    // test
    dispatch(reduxQuizzes.setQuiz(updatedQuiz))
    // Update quiz in DB
    await client.updateQuiz(updatedQuiz)
    // Navigate to Quiz Detail Screen
    navigate(`/Kanbas/Courses/${courseId}/Quizzes/${quizId}`)
  }

  //- U - UpdateQuiz
  const handleSaveAndPublishQuiz = async () => {
    const updatedQuiz = {
      ...quiz,
      points: await calculatePoints(questionList),
      published: true,
      questions: questionList,
    }
    // Update quiz in redux quiz list
    dispatch(reduxQuizzes.setQuizQuestions(questionList))
    // Update quiz in redux quiz list
    dispatch(reduxQuizzes.updateQuiz(updatedQuiz))
    // test
    dispatch(reduxQuizzes.setQuiz(updatedQuiz))
    // Update quiz in DB
    await client.updateQuiz(updatedQuiz)
    // Navigate back to Quiz List Screen
    navigate(`/Kanbas/Courses/${courseId}/Quizzes`)
  }

  const handleCancelQuiz = () => {
    // Reset question list to initial state
    dispatch(reduxQuestions.emptyQuestionList())
    // Reset current question to initial state
    dispatch(reduxQuestions.resetCurrentQuestion())
    // Navigate to Quiz List Screen
    navigate(`/Kanbas/Courses/${courseId}/Quizzes`)
  }

  const calculatePoints = async (questionList: any) => {
    let points = 0
    questionList.map((question: any) => {
      points += question.points
    })
    return points
  }

  return (
    <>
      <div id="editor-details" className="container p-2">
        <div id="quizzes-buttons" className="row justify-content-end">
          <div className=" container">
            <div className="d-flex align-items-center justify-content-end">
              <div className="fs-4 me-3">Points {quiz.points}</div>
              <div className="">
                {quiz.published ? (
                  <div className=" text-success me-2">
                    <FaCheckCircle className="mb-1 me-2" />
                    Published
                  </div>
                ) : (
                  <div className=" text-secondary me-2">
                    <AiOutlineStop className="mb-1 me-2" />
                    Not published
                  </div>
                )}
              </div>
              <button className="wd-dani-btn">
                <FaEllipsisV className="mb-1" />
              </button>
            </div>
            <hr />
          </div>
        </div>
        {/*//- Tabs */}
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" style={{ cursor: "pointer", color: "#2D3B45" }} aria-current="page">
              Details
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              style={{ cursor: "pointer", color: "#a32424" }}
              onClick={() => {
                navigate(`/Kanbas/Courses/${courseId}/Quizzes/${quiz._id}/EditorQuestions`)
              }}>
              Questions
            </a>
          </li>
        </ul>

        {/*//- Quiz Details Content  */}
        <div>
          <div id="editor-questions" className="container">
            {/*//- Quiz Name */}
            <div className="row">
              <label htmlFor="quiz-name" className="form-label mt-2">
                Quiz Name
              </label>
            </div>
            <div className="row">
              <input
                type="text"
                id="quiz-name"
                value={quiz.name}
                className="form-control"
                onChange={(e) => {
                  dispatch(reduxQuizzes.setQuiz({ ...quiz, name: e.target.value }))
                }}
              />
            </div>
            {/*//- Quiz Instruction */}
            <div className="row">
              <label htmlFor="quiz-instruction" className="form-label mt-2">
                Quiz Instruction
              </label>
            </div>
            <div className="row">
              <textarea
                id="quiz-instruction"
                value={quiz.instructions}
                className="form-control"
                rows={4}
                onChange={(e) => {
                  dispatch(reduxQuizzes.setQuiz({ ...quiz, instructions: e.target.value }))
                }}
              />
            </div>
            {/*//- Quiz Type */}
            <div className="row mt-3">
              <div className="col-4 text-end pe-4 text-end pe-4">
                <label htmlFor="quiz-type" className="form-label mt-2">
                  Quiz Type
                </label>
              </div>
              <div className="col p-0">
                <select
                  id="quiz-type"
                  className="form-control"
                  value={quiz.graded ? (quiz.type === "QUIZ" ? 1 : 3) : quiz.type === "QUIZ" ? 2 : 4}
                  onChange={(e) => {
                    if (e.target.value === "1") {
                      dispatch(reduxQuizzes.setQuiz({ ...quiz, graded: true, type: "QUIZ" }))
                    } else if (e.target.value === "2") {
                      dispatch(reduxQuizzes.setQuiz({ ...quiz, graded: false, type: "QUIZ" }))
                    } else if (e.target.value === "3") {
                      dispatch(reduxQuizzes.setQuiz({ ...quiz, graded: true, type: "SURVEY" }))
                    } else {
                      dispatch(reduxQuizzes.setQuiz({ ...quiz, graded: false, type: "SURVEY" }))
                    }
                  }}>
                  <option value={1}>Graded Quiz</option>
                  <option value={2}>Practice Quiz</option>
                  <option value={3}>Graded Survey</option>
                  <option value={4}>Ungraded Survey</option>
                </select>
              </div>
            </div>
            {/*//- Assignment Group */}
            <div className="row mt-3">
              <div className="col-4 text-end pe-4">
                <label htmlFor="assignment-group" className="form-label mt-2">
                  Assignment Group
                </label>
              </div>
              <div className="col p-0">
                <select
                  id="assignment-group"
                  className="form-control"
                  value={quiz.group}
                  onChange={(e) => {
                    dispatch(reduxQuizzes.setQuiz({ ...quiz, group: e.target.value }))
                  }}>
                  <option value={"QUIZZES"}>Quizzes</option>
                  <option value={"EXAMS"}>Exams</option>
                  <option value={"ASSIGNMENTS"}>Assignments</option>
                  <option value={"PROJECT"}>Projects</option>
                </select>
              </div>
            </div>
            {/*//- Points */}
            <div className="row mt-3">
              <div className="col-4 text-end pe-4">
                <label htmlFor="points" className="form-label mt-2">
                  Points
                </label>
              </div>
              <div className="col p-0 d-flex align-items-center">
                <input
                  id="points"
                  type="number"
                  className="form-control"
                  value={quiz.points}
                  onChange={(e) => {
                    dispatch(reduxQuizzes.setQuiz({ ...quiz, points: parseInt(e.target.value) }))
                  }}
                />
              </div>
            </div>
            {/*//- Shuffle Answers */}
            <div className="row mt-3">
              <div className="col-4 text-end pe-4">
                <label htmlFor="shuffle-answers" className="form-label mt-2">
                  Shuffle Answers
                </label>
              </div>
              <div className="col p-0 align-items-center d-flex">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={quiz.shuffle}
                  onChange={(e) => {
                    dispatch(reduxQuizzes.setQuiz({ ...quiz, shuffle: !quiz.shuffle }))
                  }}
                />
              </div>
            </div>
            {/*//- Time Limit */}
            <div className="row mt-3">
              <div className="col-4 text-end pe-4">
                <label htmlFor="time-limit" className="form-label mt-2">
                  Time Limit
                </label>
              </div>
              <div className="col p-0 d-flex align-items-center">
                <input
                  type="checkbox"
                  className="form-check-input me-3"
                  checked={quiz.hasTimeLimit}
                  onChange={(e) => {
                    dispatch(reduxQuizzes.setQuiz({ ...quiz, hasTimeLimit: !quiz.hasTimeLimit }))
                    if (e.target.value === "false") {
                      dispatch(reduxQuizzes.setQuiz({ ...quiz, timeLimit: 0 }))
                    }
                  }}
                />
                <input
                  type="number"
                  id="time-limit"
                  className="form-control"
                  value={quiz.timeLimit}
                  min={0}
                  max={240}
                  onChange={(e) => {
                    dispatch(reduxQuizzes.setQuiz({ ...quiz, timeLimit: e.target.value }))
                  }}
                />
              </div>
            </div>
            {/*//- Multiple Attempts */}
            <div className="row mt-3">
              <div className="col-4 text-end pe-4">
                <label htmlFor="multiple-attempts" className="form-label mt-2">
                  Multiple Attempts
                </label>
              </div>
              <div className="col p-0 d-flex align-items-center">
                <input
                  type="checkbox"
                  className="form-check-input me-3"
                  checked={quiz.allowMultipleAttempts}
                  onChange={(e) => {
                    dispatch(reduxQuizzes.setQuiz({ ...quiz, allowMultipleAttempts: !quiz.allowMultipleAttempts }))
                  }}
                />
                <input
                  type="number"
                  id="time-limit"
                  className="form-control"
                  value={quiz.multipleAttempts}
                  min={0}
                  max={240}
                  onChange={(e) => {
                    dispatch(reduxQuizzes.setQuiz({ ...quiz, multipleAttempts: e.target.value }))
                  }}
                />
              </div>
            </div>
            {/*//- Show Correct Answer */}
            <div className="row mt-3">
              <div className="col-4 text-end pe-4">
                <label htmlFor="show-correct-answer" className="form-label mt-2">
                  Show Correct Answer
                </label>
              </div>
              <div className="col p-0">
                <select
                  id="show-correct-answer"
                  className="form-control"
                  value={quiz.showAnswers}
                  onChange={(e) => {
                    dispatch(reduxQuizzes.setQuiz({ ...quiz, showAnswers: e.target.value }))
                  }}>
                  <option value={"IMMEDIATELY"}>Immediately</option>
                  <option value={"AFTER DUE DATE"}>After Due Date</option>
                  <option value={"NEVER"}>Never</option>
                </select>
              </div>
            </div>
            {/*//- Access Code */}
            <div className="row mt-3">
              <div className="col-4 text-end pe-4">
                <label htmlFor="access-code" className="form-label mt-2">
                  Access Code
                </label>
              </div>
              <div className="col p-0 d-flex align-items-center">
                <input
                  type="checkbox"
                  className="form-check-input me-3"
                  checked={quiz.hasCode}
                  onChange={(e) => {
                    dispatch(reduxQuizzes.setQuiz({ ...quiz, hasCode: !quiz.hasCode }))
                  }}
                />
                <input
                  id="access-code"
                  type="number"
                  className="form-control"
                  value={quiz.code}
                  onChange={(e) => {
                    dispatch(reduxQuizzes.setQuiz({ ...quiz, code: parseInt(e.target.value) }))
                  }}
                />
              </div>
            </div>
            {/*//- One Question at a Time */}
            <div className="row mt-3">
              <div className="col-4 text-end pe-4">
                <label htmlFor="one-question-at-a-time" className="form-label mt-2">
                  One Question at a Time
                </label>
              </div>
              <div className="col p-0 d-flex align-items-center">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={quiz.oneAtATime}
                  onChange={(e) => {
                    dispatch(reduxQuizzes.setQuiz({ ...quiz, oneAtATime: !quiz.oneAtATime }))
                  }}
                />
              </div>
            </div>
            {/*//- Webcam Required */}
            <div className="row mt-3">
              <div className="col-4 text-end pe-4">
                <label htmlFor="webcam-required" className="form-label mt-2">
                  Webcam Required
                </label>
              </div>
              <div className="col p-0 d-flex align-items-center">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={quiz.webCam}
                  onChange={(e) => {
                    dispatch(reduxQuizzes.setQuiz({ ...quiz, webCam: !quiz.webCam }))
                  }}
                />
              </div>
            </div>
            {/*//- Lock Questions After Answering */}
            <div className="row mt-3">
              <div className="col-4 text-end pe-4">
                <label htmlFor="lock-questions-after-answering" className="form-label mt-2">
                  Lock Questions After Answering
                </label>
              </div>
              <div className="col p-0 d-flex align-items-center">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={quiz.lockAfter}
                  onChange={(e) => {
                    dispatch(reduxQuizzes.setQuiz({ ...quiz, lockAfter: !quiz.lockAfter }))
                  }}
                />
              </div>
            </div>
            {/*//- Due Date */}
            <div className="row mt-3">
              <div className="col-4 text-end pe-4">
                <label htmlFor="due-date" className="form-label mt-2">
                  Due Date
                </label>
              </div>
              <div className="col p-0">
                <input
                  type="date"
                  id="due-date"
                  className="form-control"
                  value={quiz.dueDate}
                  onChange={(e) => {
                    dispatch(reduxQuizzes.setQuiz({ ...quiz, dueDate: e.target.value }))
                  }}
                />
              </div>
            </div>
            {/*//- Available From */}
            <div className="row mt-3">
              <div className="col-4 text-end pe-4">
                <label htmlFor="available-from" className="form-label mt-2">
                  Available From
                </label>
              </div>
              <div className="col p-0">
                <input
                  type="date"
                  id="available-from"
                  className="form-control"
                  value={quiz.availableFromDate}
                  onChange={(e) => {
                    dispatch(reduxQuizzes.setQuiz({ ...quiz, availableFromDate: e.target.value }))
                  }}
                />
              </div>
            </div>
            {/*//- Available Until */}
            <div className="row mt-3">
              <div className="col-4 text-end pe-4">
                <label htmlFor="available-until" className="form-label mt-2">
                  Available Until
                </label>
              </div>
              <div className="col p-0">
                <input
                  type="date"
                  id="available-until"
                  className="form-control"
                  value={quiz.availableUntilDate}
                  onChange={(e) => {
                    dispatch(reduxQuizzes.setQuiz({ ...quiz, availableUntilDate: e.target.value }))
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/*//- Cancel, Save & Publish, Save Buttons */}
        <hr />
        <div className="d-flex justify-content-end">
          <button className="wd-dani-btn me-2" onClick={() => handleCancelQuiz()}>
            Cancel
          </button>
          <button
            className="wd-dani-btn me-2"
            onClick={() => {
              handleSaveQuiz()
            }}>
            Save
          </button>
          <button
            className="wd-dani-btn-red"
            onClick={() => {
              handleSaveAndPublishQuiz()
            }}>
            Save & Publish
          </button>
        </div>
      </div>
    </>
  )
}
export default EditorDetails
