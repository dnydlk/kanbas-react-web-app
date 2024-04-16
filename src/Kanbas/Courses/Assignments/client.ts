import axios from "axios"
const API_BASE = process.env.REACT_APP_API_BASE
const COURSES_API = `${API_BASE}/api/courses`
const ASSIGNMENTS_API = `${API_BASE}/api/assignments`

//- updateAssignment
export const updateAssignment = async (assignment: any) => {
  console.log("🚀 ~ client side updateAssignment is called")
  console.log("🚀 ~ updateAssignment ~ ASSIGNMENTS_API:", ASSIGNMENTS_API)
  try {
    const response = await axios.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment)
    return response.data
  } catch (error) {
    console.error("Failed to update assignment", error)
  }
}

//- deleteAssignments
export const deleteAssignment = async (assignmentId: any) => {
  const response = await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`)
  return response.data
}

//- createAssignments
export const createAssignments = async (courseId: any, assignment: any) => {
  const response = await axios.post(`${COURSES_API}/${courseId}/assignments`, assignment)
  return response.data
}

//- findAssignmentsForCourse
export const findAssignmentsForCourse = async (courseId: string) => {
  const response = await axios.get(`${COURSES_API}/${courseId}/assignments`)
  return response.data
}
