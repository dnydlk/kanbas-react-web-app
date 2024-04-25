import { GoPlus } from "react-icons/go"
import { HiMagnifyingGlass } from "react-icons/hi2"
import SingleQuestion from "./SingleQuestion"
import { useDispatch, useSelector } from "react-redux"
import { KanbasState } from "../../../store"
import { useNavigate, useParams } from "react-router"
import * as reduxQuestions from "./questionsReducer"
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa"
import { AiOutlineStop } from "react-icons/ai"
import * as reduxQuizzes from "../quizzesReducer"
import * as client from "../client"
import { v4 as uuidv4 } from "uuid"

function EditorQuestions() {
  const { courseId, quizId } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // Get question list from redux store
  const questionList = useSelector((state: KanbasState) => state.questionsReducer.questions)
  console.log("🚀 ~ EditorQuestions ~ questionList:", questionList)
  // Get current question from redux store
  const question = useSelector((state: KanbasState) => state.questionsReducer.question)
  console.log("🚀 ~ Questions ~ question:", question)
  const quiz = useSelector((state: KanbasState) => state.quizzesReducer.quiz)
  // default question
  const newQuestion = {
    id: new Date().getTime(),
    title: "Question Title",
    text: "Question Description",
    points: 1,
    type: "MULTIPLE CHOICE",
    answers: [
      { text: "Answer 1", isAnswer: true, id: uuidv4().replace(/-/g, "").substring(0, 24) },
      { text: "Answer 2", isAnswer: false, id: uuidv4().replace(/-/g, "").substring(0, 24) },
      { text: "Answer 3", isAnswer: false, id: uuidv4().replace(/-/g, "").substring(0, 24) },
      { text: "Answer 4", isAnswer: false, id: uuidv4().replace(/-/g, "").substring(0, 24) },
    ],
    records: [],
  }

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

  const calculateCurrentPoints = (questionList: any) => {
    let points = 0
    questionList.map((question: any) => {
      points += question.points
    })
    return points
  }

  const handleAddQuestion = async () => {
    // Add a question to redux question list
    dispatch(reduxQuestions.addQuestionToList(newQuestion))
  }

  return (
    <div className=" container p-2">
      <div id="quizzes-buttons" className="row justify-content-end">
        <div className=" container">
          <div className="d-flex align-items-center justify-content-end">
            <div className="fs-4 me-3">Points {calculateCurrentPoints(questionList)}</div>
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
          <a
            className="nav-link "
            style={{ cursor: "pointer", color: "#a32424" }}
            aria-current="page"
            onClick={() => {
              navigate(`/Kanbas/Courses/${courseId}/Quizzes/${quiz._id}/EditorDetails`)
            }}>
            Details
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link active"
            style={{ cursor: "pointer", color: "#2D3B45" }}
            onClick={() => {
              navigate(`/Kanbas/Courses/${courseId}/Quizzes/${quiz._id}/EditorQuestions`)
            }}>
            Questions
          </a>
        </li>
      </ul>

      <div id="editor-questions" className="container">
        <div className="container border ps-5 pe-5">
          {questionList.map((q: any, index: any) => (
            <SingleQuestion key={index} question={q} />
          ))}
        </div>
        {/*//- Buttons */}
        <br />
        <div className="d-flex align-items-center justify-content-center mt-3">
          <button
            className=" wd-dani-btn m-3"
            onClick={() => {
              handleAddQuestion()
            }}>
            <GoPlus className="mb-1" />
            New Question
          </button>
          <button className=" wd-dani-btn m-3">
            <GoPlus className="mb-1" />
            New Question Group
          </button>
          <button className=" wd-dani-btn m-3">
            <HiMagnifyingGlass className="mb-1" />
            Find Question
          </button>
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
  )
}
export default EditorQuestions
