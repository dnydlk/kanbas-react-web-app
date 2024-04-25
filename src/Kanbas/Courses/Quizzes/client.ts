import axios from "axios"
const API_BASE = process.env.REACT_APP_API_BASE
const COURSES_API = `${API_BASE}/api/courses`
const QUIZZES_API = `${API_BASE}/api/quizzes`

const api = axios.create({
  withCredentials: true,
})

//- updateQuiz
export const updateQuiz = async (quiz: any) => {
  const response = await api.put(`${QUIZZES_API}/${quiz._id}`, quiz)
  return response.data
}

//- deleteQuiz
export const deleteQuiz = async (quizId: any) => {
  const response = await api.delete(`${QUIZZES_API}/${quizId}`)
  return response.data
}

//- createQuiz
export const createQuiz = async (courseId: any, quiz: any) => {
  const response = await api.post(`${COURSES_API}/${courseId}/quizzes`, quiz)
  return response.data
}

//- findQuizzesForCourse
export const findQuizzesForCourse = async (courseId: string) => {
  const response = await api.get(`${COURSES_API}/${courseId}/quizzes`)
  return response.data
}

//- findQuizById
export const findQuizById = async (quizId: string) => {
  const response = await api.get(`${QUIZZES_API}/${quizId}`)
  return response.data
}
