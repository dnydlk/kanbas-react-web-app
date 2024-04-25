import { createSlice } from "@reduxjs/toolkit"
import mongoose from "mongoose"
import { v4 as uuidv4 } from "uuid"

interface Question {
  id: string
  title: string
  text: string
  points: number
  type: string
  answers: []
  records: []
}

const initialState = {
  questions: [] as Question[],
  question: {
    // id: uuidv4().replace(/-/g, "").substring(0, 24),
    id: uuidv4().replace(/-/g, "").substring(0, 24),
    title: "New Question",
    text: "Question Description",
    points: 1,
    type: "MULTIPLE CHOICE",
    answers: [
      { text: "Answer 1", isAnswer: false, id: uuidv4().replace(/-/g, "").substring(0, 24) },
      { text: "Answer 2", isAnswer: false, id: uuidv4().replace(/-/g, "").substring(0, 24) },
      { text: "Answer 3", isAnswer: false, id: uuidv4().replace(/-/g, "").substring(0, 24) },
      { text: "Answer 4", isAnswer: false, id: uuidv4().replace(/-/g, "").substring(0, 24) },
    ],
    records: [],
  },
}

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setQuestions: (state, action) => {
      state.questions = action.payload
    },
    addQuestionToList: (state, action) => {
      state.questions = [
        ...state.questions,
        {
          ...action.payload,
        },
      ]
    },
    // Delete question By ID
    deleteQuestionFromList: (state, action) => {
      state.questions = state.questions.filter((question) => question.id !== action.payload)
    },
    updateQuestionsInList: (state, action) => {
      state.questions = state.questions.map((question) =>
        question.id === action.payload.id ? action.payload : question
      )
    },
    setCurrentQuestion: (state, action) => {
      state.question = action.payload
    },
    resetCurrentQuestion: (state) => {
      state.question = initialState.question
    },
    emptyQuestionList: (state) => {
      state.questions = []
    },
    addAnswerToCurrentQ: (state, action) => {
      state.question.answers = [
        ...state.question.answers,
        { text: "New Answer", isAnswer: action.payload, id: uuidv4().replace(/-/g, "").substring(0, 24) },
      ]
    },
    // Remove Answer By Id
    removeAnswerFromCurrentQ: (state, action) => {
      state.question.answers = state.question.answers.filter((answer) => answer.id !== action.payload)
    },
    updateAnswerInCurrentQ: (state, action) => {
      state.question.answers = state.question.answers.map((answer) =>
        answer.id === action.payload.id ? action.payload : answer
      )
    },
    setCorrectAnswer: (state, action) => {
      state.question.answers = state.question.answers.map((answer, index) => {
        if (answer.id === action.payload) {
          return { ...answer, isAnswer: true }
        }
        return { ...answer, isAnswer: false }
      })
    },
    setAnswerText: (state, action) => {
      state.question.answers = state.question.answers.map((answer, index) => {
        if (index === action.payload.index) {
          return { ...answer, text: action.payload.text }
        }
        return answer
      })
    },
    // set Current question as true or false
    trueOrFalse: (state) => {
      state.question.answers = [
        { text: "True", isAnswer: true, id: uuidv4().replace(/-/g, "").substring(0, 24) },
        { text: "False", isAnswer: false, id: uuidv4().replace(/-/g, "").substring(0, 24) },
      ]
    },
    // set Current question as multiple choice
    multipleChoice: (state) => {
      state.question.answers = [
        { text: "Answer 1", isAnswer: true, id: uuidv4().replace(/-/g, "").substring(0, 24) },
        { text: "Answer 2", isAnswer: false, id: uuidv4().replace(/-/g, "").substring(0, 24) },
        { text: "Answer 3", isAnswer: false, id: uuidv4().replace(/-/g, "").substring(0, 24) },
        { text: "Answer 4", isAnswer: false, id: uuidv4().replace(/-/g, "").substring(0, 24) },
      ]
    },
    // set Current question as fill in the blanks
    fillInTheBlank: (state) => {
      state.question.answers = [{ text: "Answer 1", isAnswer: true, id: uuidv4().replace(/-/g, "").substring(0, 24) }]
    },
  },
})

export const {
  setQuestions,
  addQuestionToList,
  updateQuestionsInList,
  deleteQuestionFromList,
  emptyQuestionList,
  setCurrentQuestion,
  resetCurrentQuestion,
  setCorrectAnswer,
  setAnswerText,
  addAnswerToCurrentQ,
  removeAnswerFromCurrentQ,
  updateAnswerInCurrentQ,
  trueOrFalse,
  multipleChoice,
  fillInTheBlank,
} = questionsSlice.actions
export default questionsSlice.reducer
