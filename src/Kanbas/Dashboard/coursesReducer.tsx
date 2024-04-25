import { createSlice } from "@reduxjs/toolkit"

interface Course {
  _id: string
  name: string
  number: string
  startDate: string
  endDate: string
  credit: number
  description: string
  image: string
}

const initialState = {
  courses: [] as Course[],
  course: {
    _id: "",
    name: "Course Name",
    number: "HP0001",
    startDate: "2024-09-10",
    endDate: "2024-12-15",
    credit: 4,
    description: "Course Description",
    author: "Author",
    image: "C00.jpg",
  },
}

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses: (state, action) => {
      state.courses = action.payload
    },
    addCourse: (state, action) => {
      state.courses = [
        ...state.courses,
        {
          ...action.payload,
        },
      ]
    },
    deleteCourse: (state, action) => {
      state.courses = state.courses.filter((course) => course._id !== action.payload)
    },
    updateCourse: (state, action) => {
      state.courses = state.courses.map((course) =>
        course._id === action.payload._id ? { ...course, ...action.payload } : course
      )
    },
    setCourse: (state, action) => {
      state.course = action.payload
    },
  },
})

export const { addCourse, deleteCourse, updateCourse, setCourse, setCourses } = coursesSlice.actions
export default coursesSlice.reducer
