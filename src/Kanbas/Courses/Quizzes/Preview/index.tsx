import { useNavigate, useParams } from "react-router"
import * as client from "../client"
import { useEffect, useState } from "react"
import { IoAlertCircleOutline } from "react-icons/io5"
import { IoIosArrowForward } from "react-icons/io"
import PreSingleAnswer from "./PreSingleAnswer"
import { FaCaretRight } from "react-icons/fa6"
import { useDispatch, useSelector } from "react-redux"
import { KanbasState } from "../../../store"
import * as reduxQuizzes from "../quizzesReducer"

interface Quiz {
  _id: string
  course: string
  name: string
  instructions: string
  published: boolean
  graded: boolean
  type: string
  points: number
  group: string
  shuffle: boolean
  hasTimeLimit: boolean
  timeLimit: number
  allowMultipleAttempts: boolean
  multipleAttempts: number
  showAnswers: string
  hasCode: boolean
  code: number
  oneAtATime: boolean
  webCam: boolean
  lockAfter: boolean
  dueDate: string
  availableFromDate: string
  availableUntilDate: string
  questions: Array<{
    id: number
    title: string
    text: string
    points: number
    type: string
    answers: Array<{
      text: string
      isAnswer: boolean
      id: string
    }>
  }>
}

function Preview() {
  const { quizId } = useParams()
  const dispatch = useDispatch()
  // const [quiz, setQuiz] = useState<Quiz | null>(null)
  // const [questionList, setQuestionList] = useState<<Array<Question>>([]);
  // const [currentQuestion, setCurrentQuestion] = useState(questionList ? questionList[0] : null)
  const currentUser = useSelector((state: KanbasState) => state.userReducer.currentUser)
  const navigate = useNavigate()

  const quiz = useSelector((state: KanbasState) => state.quizzesReducer.quiz)
  const [questionList, setQuestionList] = useState(quiz.questions)
  // setQuestionList(quiz.questions)
  console.log("🚀 ~ Preview ~ questionList:", questionList)
  const [currentQuestion, setCurrentQuestion] = useState(questionList[0])
  console.log("🚀 ~ Preview ~ currentQuestion:", currentQuestion)
  const [chosenAnswerId, setChosenAnswerId] = useState("")

  const formatDate = (date: any) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]
    const day = date.getDate()
    const month = months[date.getMonth()]
    const hours = date.getHours()
    const minutes = date.getMinutes().toString().padStart(2, "0")
    const ampm = hours >= 12 ? "PM" : "AM"
    const formattedHour = ((hours + 11) % 12) + 1 // Converts 24-hour time to 12-hour time
    return `${month} ${day} at ${formattedHour}:${minutes} ${ampm}`
  }

  const handleNext = (question: any) => {
    // update question list with user's answer
    const updatedQuestionList = questionList.map((q: any) => {
      try {
        if (q.id === question.id) {
          return {
            ...q,
            records: {
              userId: currentUser._id,
              choice: chosenAnswerId,
            },
          }
        }
        return q
      } catch (error) {}
    })
    setQuestionList(updatedQuestionList)
    // set currentQuestion as the next question in the list
    const currentIndex = questionList.findIndex((q: any) => q.id === question.id)
    if (currentIndex === questionList.length - 1) {
      // if the current question is the last question in the list
      // submit the quiz
      handleSubmitQuiz()
      return
    }
    setCurrentQuestion(questionList[currentIndex + 1])
  }

  const handleSubmitQuiz = () => {
    // update quiz with updated question list
    dispatch(reduxQuizzes.setQuizQuestions(questionList))
    // update the quiz to DB
    client.updateQuiz(quiz)
    navigate(`/Kanbas/Courses/${quiz.course}/Quizzes/${quiz._id}`)
  }

  return (
    <div id="question-preview" className="container">
      <h2>{quiz.name}</h2>
      <div className="alert alert-danger align-items-center d-flex">
        <IoAlertCircleOutline className=" me-1" />
        This is a preview of the published version of the quiz
      </div>
      <div>Started: {formatDate(new Date())}</div>
      <h3 className=" mt-2">Quiz Instructions</h3>
      <div>{quiz.instructions}</div>
      <hr />
      <div className="row">
        <div className="col pe-0">
          <IoIosArrowForward className="ms-5 mt-2" />
        </div>
        <div className="col-10">
          <PreSingleAnswer q={currentQuestion} user={currentUser} setChosenAnswerId={setChosenAnswerId} />
        </div>
        <div className="col"></div>
      </div>
      <div className="row">
        <div className="col"></div>
        <div className="col-10 text-end mt-3 me-4">
          <button className="wd-dani-btn" onClick={() => handleNext(currentQuestion)}>
            Next
            <FaCaretRight />
          </button>
        </div>
        <div className="col"></div>
      </div>
      <div className="row">
        <div className="col"></div>
        <div className="col-10 text-end mt-3 me-4 border pt-2 pb-2">
          <button className="wd-dani-btn" onClick={() => handleNext(currentQuestion)}>
            Submit Quiz
          </button>
        </div>
        <div className="col"></div>
      </div>
      <div className="row">
        <h5 className="col">Questions</h5>
        {questionList.map((q: any, index: any) => (
          <div key={index} className="row">
            <div className="col ms-2" onClick={() => {}}>
              Question {index + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Preview
