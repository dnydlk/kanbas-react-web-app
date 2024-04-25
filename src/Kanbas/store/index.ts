import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "../Dashboard/coursesReducer"
import modulesReducer from "../Courses/Modules/modulesReducer"
import assignmentsReducer from "../Courses/Assignments/assignmentsReducer"
import userReducer from "../../Users/userReducer"
import quizzesReducer from "../Courses/Quizzes/quizzesReducer"
import questionsReducer from "../Courses/Quizzes/Editor/questionsReducer"
import pagesReducer from "../Courses/Quizzes/Editor/pagesReducer"
export interface KanbasState {
  coursesReducer: { courses: any[]; course: any }
  modulesReducer: { modules: any[]; module: any }
  assignmentsReducer: { assignments: any[]; assignment: any }
  userReducer: { currentUser: any }
  quizzesReducer: { quizzes: any[]; quiz: any }
  questionsReducer: { questions: any[]; question: any }
  pagesReducer: { page: string }
}
const store = configureStore({
  reducer: {
    coursesReducer,
    modulesReducer,
    assignmentsReducer,
    userReducer,
    quizzesReducer,
    questionsReducer,
    pagesReducer,
  },
})
export default store;
