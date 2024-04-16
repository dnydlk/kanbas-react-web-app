import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "../Dashboard/coursesReducer"
import modulesReducer from "../Courses/Modules/modulesReducer"
import assignmentsReducer from "../Courses/Assignments/assignmentsReducer"
export interface KanbasState {
  coursesReducer: { courses: any[]; course: any }
  modulesReducer: { modules: any[]; module: any }
  assignmentsReducer: { assignments: any[]; assignment: any }
}
const store = configureStore({
  reducer: { coursesReducer, modulesReducer, assignmentsReducer },
})
export default store;
