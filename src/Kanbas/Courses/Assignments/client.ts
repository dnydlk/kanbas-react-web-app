import axios from "axios"
const COURSES_API = "http://localhost:4000/api/courses"
const ASSIGNMENTS_API = "http://localhost:4000/api/assignments"
//- updateAssignment
export const updateAssignment = async (assignment: any) => {
  const response = await axios.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment)
  return response.data
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
