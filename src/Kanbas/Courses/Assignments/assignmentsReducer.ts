import { createSlice } from "@reduxjs/toolkit";
// import { assignments } from "../../Database";

interface Assignment {
  _id?: string
  name: string
  description: string
  points: string
  dueDate: string
  availableFromDate: string
  availableUntilDate: string
  course: string
}

const initialState = {
  assignments: [] as Assignment[],
  assignment: {
    _id: "0",
    name: "New Assignment",
    description: "New Description",
    points: "100",
    dueDate: "2024-01-01",
    availableFromDate: "2024-01-01",
    availableUntilDate: "2024-01-01",
    course: "",
  },
}

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload
    },
    addAssignment: (state, action) => {
      state.assignments = [
        {
          ...action.payload,
          _id: new Date().getTime().toString(),
        },
        ...state.assignments,
      ]
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter((assignment) => assignment._id !== action.payload)
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment) =>
        assignment._id === action.payload._id ? { ...assignment, ...action.payload } : assignment
      )
    },
    setAssignment: (state, action) => {
      state.assignment = action.payload
    },
    setAssignmentCourse: (state, action) => {
      state.assignment.course = action.payload
    },
    resetToInitialState: (state, action) => {
      const courseId = action.payload
      state.assignment = {
        ...initialState.assignment,
        course: courseId,
      }
    },
  },
})

export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
  setAssignmentCourse,
  resetToInitialState,
  setAssignments,
} = assignmentsSlice.actions
export default assignmentsSlice.reducer;
