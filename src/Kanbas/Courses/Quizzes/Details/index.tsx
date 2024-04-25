import { FaCheckCircle, FaEllipsisV } from "react-icons/fa"
import { useNavigate, useParams } from "react-router"
import { GoPencil } from "react-icons/go"
import { useEffect } from "react"
import { AiOutlineStop } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux"
import { KanbasState } from "../../../store"
import { addQuiz, updateQuiz, setQuiz } from "../quizzesReducer"
import * as client from "../client"
import * as reduxQuestions from "../Editor/questionsReducer"

function Details() {
  const { courseId, quizId } = useParams()
  const quiz = useSelector((state: KanbasState) => state.quizzesReducer.quiz)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // test question list redux
  const questionList = useSelector((state: KanbasState) => state.questionsReducer.questions)

  //- updateQuiz (for Publish/Unpublish)
  const handleUpdateQuiz = async (quiz: any) => {
    dispatch(setQuiz(quiz))
    await client.updateQuiz(quiz)
    dispatch(updateQuiz(quiz))
  }

  //- Find Quiz by QuizId
  const findQuizById = async (quizId: any) => {
    const quiz = await client.findQuizById(quizId)
    // Set fetched quiz to quiz redux store
    dispatch(setQuiz(quiz))
    // Set fetched quiz's questions to questions redux store
    dispatch(reduxQuestions.setQuestions(quiz.questions))
  }

  const handlePreview = () => {
    navigate(`/Kanbas/Courses/${courseId}/Quizzes/${quizId}/Preview`)
  }

  useEffect(() => {
    findQuizById(quizId)
  }, [])

  return (
    <>
      <div id="quiz-details" className=" container p-2">
        <div id="quiz-details-buttons" className="row justify-content-end">
          <div className=" container">
            <div className=" d-flex">
              {/* courseId: {courseId}
              <br />
              quizId: {quizId} */}
              <div className="col">
                <div className=" float-end">
                  {quiz.published ? (
                    <button
                      className=" wd-dani-btn-red"
                      onClick={() => handleUpdateQuiz({ ...quiz, published: !quiz.published })}>
                      <AiOutlineStop className=" mb-1" />
                      &nbsp; Unpublish
                    </button>
                  ) : (
                    <button
                      className="wd-dani-btn-green"
                      onClick={() => handleUpdateQuiz({ ...quiz, published: !quiz.published })}>
                      <FaCheckCircle className=" mb-1" />
                      &nbsp; Publish
                    </button>
                  )}
                  <button
                    className=" wd-dani-btn"
                    onClick={() => {
                      handlePreview()
                    }}>
                    Preview
                  </button>
                  <button
                    className=" wd-dani-btn"
                    onClick={() => {
                      navigate(`/Kanbas/Courses/${courseId}/Quizzes/${quiz._id}/EditorDetails`)
                    }}>
                    <GoPencil className=" wd-dani-icon-flipped mb-1" />
                    &nbsp; Edit
                  </button>
                  <button className="wd-dani-btn">
                    <FaEllipsisV className="mb-1" />
                  </button>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
        {/*//-  */}
        <h2>{quiz.name}</h2>
        <div className="container text-center">
          <div className="row">
            <div className="col me-2 text-end fs-5 fw-bold">Quiz Type</div>
            <div className="col me-2 text-start fs-5">
              {quiz.graded
                ? "Graded"
                : "Ungraded" + " " + quiz.type.slice(0, 1) + quiz.type.slice(1).toLocaleLowerCase()}
            </div>
          </div>
          <div className="row">
            <div className="col me-2 text-end fs-5 fw-bold">Points</div>
            <div className="col me-2 text-start fs-5">{quiz.points}</div>
          </div>
          <div className="row">
            <div className="col me-2 text-end fs-5 fw-bold">Assignment Group</div>
            <div className="col me-2 text-start fs-5">{quiz.group}</div>
          </div>
          <div className="row">
            <div className="col me-2 text-end fs-5 fw-bold">Shuffle Answers</div>
            <div className="col me-2 text-start fs-5">{quiz.shuffle ? "Yes" : "No"}</div>
          </div>
          <div className="row">
            <div className="col me-2 text-end fs-5 fw-bold">Time Limit</div>
            {quiz.hasTimeLimit ? (
              <div className="col me-2 text-start fs-5">{quiz.timeLimit} Minutes</div>
            ) : (
              <div className="col me-2 text-start fs-5">No</div>
            )}
          </div>
          <div className="row">
            <div className="col me-2 text-end fs-5 fw-bold">Multiple Attempts</div>
            {quiz.allowMultipleAttempts ? (
              <div className="col me-2 text-start fs-5">{quiz.multipleAttempts} Times</div>
            ) : (
              <div className="col me-2 text-start fs-5">No</div>
            )}
          </div>
          <div className="row">
            <div className="col me-2 text-end fs-5 fw-bold">Show Correct Answers</div>
            <div className="col me-2 text-start fs-5">
              {quiz.showAnswers.slice(0, 1).toLocaleUpperCase() + quiz.showAnswers.toLocaleLowerCase()}
            </div>
          </div>
          <div className="row">
            <div className="col me-2 text-end fs-5 fw-bold">Access Code</div>
            {quiz.hasCode ? (
              <div className="col me-2 text-start fs-5">{quiz.code}</div>
            ) : (
              <div className="col me-2 text-start fs-5">None</div>
            )}
          </div>
          <div className="row">
            <div className="col me-2 text-end fs-5 fw-bold">One Question at a Time</div>
            <div className="col me-2 text-start fs-5">{quiz.oneAtATime ? "Yes" : "No"}</div>
          </div>
          <div className="row">
            <div className="col me-2 text-end fs-5 fw-bold">Webcam Required</div>
            <div className="col me-2 text-start fs-5">{quiz.webCam ? "Yes" : "No"}</div>
          </div>
          <div className="row">
            <div className="col me-2 text-end fs-5 fw-bold">Lock Questions After Answering</div>
            <div className="col me-2 text-start fs-5">{quiz.lockAfter ? "Yes" : "No"}</div>
          </div>
          <hr className="mt-4 mb-4" />
          <div className="row">
            <div className="col fs-5 fw-bold">Due</div>
            <div className="col fs-5 fw-bold">Available from</div>
            <div className="col fs-5 fw-bold">Until</div>
          </div>
          <div className="row">
            <div className="col fs-5">{quiz.dueDate}</div>
            <div className="col fs-5">{quiz.availableFromDate}</div>
            <div className="col fs-5">{quiz.dueDate}</div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Details
