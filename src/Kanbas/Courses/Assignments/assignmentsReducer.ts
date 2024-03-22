import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
  assignments: assignments,
  assignment: {
    _id: "0",
    name: "New Assignment",
    description: "New Description",
    points: "100",
    dueDate: "2024-01-01",
    availableFromDate: "2024-01-01",
    availableUntilDate: "2024-01-01",
    course: "C00",
  },
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      state.assignments = [
        {
          ...action.payload,
          _id: new Date().getTime().toString(),
        },
        ...state.assignments,
      ];
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment) =>
        assignment._id === action.payload._id
          ? { ...assignment, ...action.payload }
          : assignment
      );
    },
    setAssignment: (state, action) => {
      state.assignment = action.payload;
    },
    setAssignmentCourse: (state, action) => {
      state.assignment.course = action.payload;
    },
    resetToInitialState: (state, action) => {
      const courseId = action.payload;
      state.assignment = {
        ...initialState.assignment,
        course: courseId,
      };
    },
  },
});

export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
  setAssignmentCourse,
  resetToInitialState,
} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
