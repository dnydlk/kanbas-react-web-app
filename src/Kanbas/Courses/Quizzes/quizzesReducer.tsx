import { createSlice } from "@reduxjs/toolkit"

interface Quiz {
  _id: string
  name: string
  instructions: string
  published: boolean
  graded: boolean
  type: string
  points: number
  group: string
  shuffle: boolean
  hasTimeLimit: boolean
  timeLimit: 20
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
  question: []
  course: string
}

const initialState = {
  quizzes: [] as Quiz[],
  quiz: {
    _id: "",
    name: "New Quiz",
    instructions: "Quiz Instructions",
    published: false,
    graded: true,
    type: "QUIZ",
    points: 0,
    group: "QUIZZES",
    shuffle: true,
    hasTimeLimit: true,
    timeLimit: 20,
    allowMultipleAttempts: false,
    multipleAttempts: 0,
    showAnswers: "IMMEDIATELY",
    hasCode: false,
    code: 0,
    oneAtATime: true,
    webCam: false,
    lockAfter: false,
    dueDate: "2025-04-21",
    availableFromDate: "2024-01-01",
    availableUntilDate: "2025-04-21",
    questions: [],
    course: "",
  },
}

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    setQuizzes: (state, action) => {
      state.quizzes = action.payload
    },
    addQuiz: (state, action) => {
      state.quizzes = [
        ...state.quizzes,
        {
          ...action.payload,
        },
      ]
    },
    // Delete Quiz by ID
    deleteQuiz: (state, action) => {
      state.quizzes = state.quizzes.filter((quiz) => quiz._id !== action.payload)
    },
    // Update Quiz by quiz object
    updateQuiz: (state, action) => {
      state.quizzes = state.quizzes.map((quiz) =>
        quiz._id === action.payload._id ? { ...quiz, ...action.payload } : quiz
      )
    },
    setQuiz: (state, action) => {
      state.quiz = action.payload
    },
    resetCurrentQuiz: (state, action) => {
      const courseId = action.payload
      state.quiz = {
        ...initialState.quiz,
        course: courseId,
      }
    },
    setQuizQuestions: (state, action) => {
      // state.quiz.questions = action.payload
      state.quiz = {
        ...state.quiz,
        questions: action.payload,
      }
    },
  },
})

export const { setQuizzes, addQuiz, deleteQuiz, updateQuiz, setQuiz, resetCurrentQuiz, setQuizQuestions } =
  quizzesSlice.actions
export default quizzesSlice.reducer
