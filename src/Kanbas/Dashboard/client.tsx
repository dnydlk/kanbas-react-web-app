import axios from "axios"
const API_BASE = process.env.REACT_APP_API_BASE
const COURSES_API = `${API_BASE}/api/courses`

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

const api = axios.create({
  withCredentials: true,
})

//- findAllCourses
export const getAllCourses = async () => {
  const response = await api.get(COURSES_API)
  return response.data
}

//- findAllCourses by author
export const getAllCoursesByAuthor = async () => {
  const response = await api.get(`${COURSES_API}/author`)
  return response.data
}

//- findAllCourses by student
export const getAllCoursesByStudent = async () => {
  const response = await api.get(`${COURSES_API}/student`)
  return response.data
}

//- addNewCourse
export const addNewCourse = async (course: any) => {
  const response = await api.post(COURSES_API, course)
  return response.data
}

//- addNewCourse by author
export const addNewCourseByAuthor = async (course: any) => {
  const response = await api.post(COURSES_API, course)
  return response.data
}
//- deleteCourse
export const deleteCourse = async (courseId: string) => {
  const response = await api.delete(`${COURSES_API}/${courseId}`)
  return response.data
}

//- updateCourse
export const updateCourse = async (course: Course) => {
  const response = await api.put(`${COURSES_API}/${course._id}`, course)
  return response.data
}
