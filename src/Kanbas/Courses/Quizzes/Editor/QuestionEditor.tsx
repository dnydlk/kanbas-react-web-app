import { useDispatch, useSelector } from "react-redux"
import * as reduxQuestions from "./questionsReducer"
import { useNavigate, useParams } from "react-router"
import { KanbasState } from "../../../store"

function QuestionEditor() {
  const { courseId, quizId } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // Get Current Question from redux store
  const CurrentQuestion = useSelector((state: KanbasState) => state.questionsReducer.question)

  const handleSave = async () => {
    // Update current question to redux question list
    dispatch(reduxQuestions.updateQuestionsInList(CurrentQuestion))
    // Navigate Back to Quiz Editor
    navigate(`/Kanbas/Courses/${courseId}/Quizzes/${quizId}/EditorQuestions`)
  }

  const handleDelete = async () => {
    // Remove question from redux question list
    dispatch(reduxQuestions.deleteQuestionFromList(CurrentQuestion.id))
    // Navigate Back to Quiz Editor
    navigate(`/Kanbas/Courses/${courseId}/Quizzes/${quizId}/EditorQuestions`)
  }

  const handleCancel = async () => {
    // Reset question to initial state
    dispatch(reduxQuestions.resetCurrentQuestion(CurrentQuestion))
    // Navigate Back to Quiz Editor
    navigate(`/Kanbas/Courses/${courseId}/Quizzes/${quizId}/EditorQuestions`)
  }

  return (
    <div className="w-75">
      {/*//- Question Type */}
      <div className="row mt-3 align-items-center">
        <div className="col-4 text-end pe-4">
          <label htmlFor="question-type" className="form-label mt-2">
            Question Type
          </label>
        </div>
        <div className="col p-0">
          <select
            id="question-type"
            className="form-control"
            value={CurrentQuestion.type}
            onChange={(e) => {
              dispatch(reduxQuestions.setCurrentQuestion({ ...CurrentQuestion, type: e.target.value }))
              if (e.target.value === "TRUE OR FALSE") {
                dispatch(reduxQuestions.trueOrFalse())
              } else if (e.target.value === "FILL IN THE BLANK") {
                dispatch(reduxQuestions.fillInTheBlank())
              } else if (e.target.value === "MULTIPLE CHOICE") {
                dispatch(reduxQuestions.multipleChoice())
              }
            }}>
            <option value={"MULTIPLE CHOICE"}>Multiple Choice</option>
            <option value={"TRUE OR FALSE"}>True/False</option>
            <option value={"FILL IN THE BLANK"}>Fill in the Blank</option>
          </select>
        </div>
      </div>
      {/*//- Question Title */}
      <div className="row mt-3 align-items-center">
        <div className="col-4 text-end align-content-center pe-4">
          <label htmlFor="question-title">Question Title</label>
        </div>
        <div className="col p-0">
          <input
            type="text"
            id="question-title"
            value={CurrentQuestion.title}
            className=" form-control"
            onChange={(e) => {
              dispatch(reduxQuestions.setCurrentQuestion({ ...CurrentQuestion, title: e.target.value }))
            }}
          />
        </div>
      </div>
      {/*//- Question Text */}
      <div className="row mt-3">
        <div className="col-4 text-end  pe-4">
          <label>Question Text</label>
        </div>
        <div className="col p-0">
          <textarea
            id="question-text"
            value={CurrentQuestion.text}
            className=" form-control"
            rows={3}
            onChange={(e) => {
              dispatch(reduxQuestions.setCurrentQuestion({ ...CurrentQuestion, text: e.target.value }))
            }}
          />
        </div>
      </div>
      {/*//- Point */}
      <div className="row mt-3">
        <div className="col-4 text-end  pe-4">
          <label htmlFor="question-points">Question Point</label>
        </div>
        <div className="col p-0">
          <input
            type="number"
            id="question-points"
            value={CurrentQuestion.points}
            className=" form-control"
            min={1}
            onChange={(e) => {
              dispatch(reduxQuestions.setCurrentQuestion({ ...CurrentQuestion, points: parseInt(e.target.value) }))
            }}
          />
        </div>
      </div>
      {/*//- Answers */}
      {CurrentQuestion.answers &&
        CurrentQuestion.answers.length > 0 &&
        CurrentQuestion.answers.map((answer: any, index: any) => (
          <div className="row mt-3 align-items-center" key={index}>
            <div className="col-1 text-end align-content-center pe-0"></div>
            <div className="col-3 text-end align-content-center pe-4 d-flex align-items-center">
              {(CurrentQuestion.type === "MULTIPLE CHOICE" || CurrentQuestion.type === "FILL IN THE BLANK") && (
                <button
                  className="wd-dani-btn-red fs-6 ms-auto"
                  onClick={() => {
                    dispatch(reduxQuestions.removeAnswerFromCurrentQ(answer.id))
                  }}>
                  x
                </button>
              )}
              <label
                className={`ms-3 ${answer.isAnswer ? "text-success" : ""} ${
                  CurrentQuestion.type === "TRUE OR FALSE" ? "ms-auto" : ""
                }`}>
                Possible Answer:
              </label>
            </div>
            <div className="col p-0 d-flex">
              <div className="col">
                <input
                  type="text"
                  value={answer.text}
                  className={`form-control ${answer.isAnswer ? "border-success text-success" : ""} `}
                  onChange={(e) => {
                    CurrentQuestion.type === "FILL IN THE BLANK"
                      ? dispatch(
                          reduxQuestions.updateAnswerInCurrentQ({ ...answer, text: e.target.value.toLowerCase() })
                        )
                      : dispatch(reduxQuestions.updateAnswerInCurrentQ({ ...answer, text: e.target.value }))
                  }}
                />
              </div>
              <div className="col-2 align-items-center d-flex">
                {CurrentQuestion.type === "FILL IN THE BLANK" ? (
                  ""
                ) : (
                  <input
                    type="radio"
                    checked={answer.isAnswer}
                    name={`correct-answer-${CurrentQuestion._id}`}
                    className="ms-2"
                    onChange={() => {
                      dispatch(reduxQuestions.setCorrectAnswer(answer.id))
                    }}
                  />
                )}
                {CurrentQuestion.type === "FILL IN THE BLANK" ? (
                  ""
                ) : (
                  <div className="ms-1 text-success">{answer.isAnswer && " Correct"}</div>
                )}
              </div>
            </div>
          </div>
        ))}
      {/*//- + Answer Button */}
      <div className="row mt-3 align-items-center">
        <div className=" d-flex">
          <div className="col"></div>
          <div className="col"></div>
          <div className="col-4">
            {CurrentQuestion.type === "TRUE OR FALSE" ? (
              ""
            ) : (
              <button
                className="wd-dani-btn fs-6"
                onClick={() => {
                  CurrentQuestion.type === "FILL IN THE BLANK"
                    ? dispatch(reduxQuestions.addAnswerToCurrentQ(true))
                    : dispatch(reduxQuestions.addAnswerToCurrentQ(false))
                }}>
                + Add Another Answer
              </button>
            )}
            {/* <button
              className="wd-dani-btn fs-6"
              onClick={() => {
                CurrentQuestion.type === "FILL IN THE BLANK"
                  ? dispatch(reduxQuestions.addAnswerToCurrentQ(true))
                  : dispatch(reduxQuestions.addAnswerToCurrentQ(false))
              }}>
              + Add Another Answer
            </button> */}
          </div>
        </div>
      </div>

      {/*//- Buttons */}
      <br />
      <div className="row mt-3 align-items-center">
        <div className=" d-flex">
          <div className="col-2"></div>
          <div className="col-8">
            <button
              className="wd-dani-btn"
              onClick={() => {
                handleCancel()
              }}>
              Cancel
            </button>
          </div>
          <div className="col d-flex">
            <button
              className="wd-dani-btn-red"
              onClick={() => {
                handleDelete()
              }}>
              Delete
            </button>
            <button
              className="wd-dani-btn-green"
              onClick={() => {
                handleSave()
              }}>
              Save
            </button>
          </div>
        </div>
      </div>
      <pre>
        <code>{JSON.stringify(CurrentQuestion, null, 2)}</code>
      </pre>
    </div>
  )
}

export default QuestionEditor
