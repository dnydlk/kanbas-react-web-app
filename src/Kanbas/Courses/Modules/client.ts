import axios from "axios"
const COURSES_API = "http://localhost:4000/api/courses"
const MODULES_API = "http://localhost:4000/api/modules"

//- updateModule
export const updateModule = async (module: any) => {
  const response = await axios.put(`${MODULES_API}/${module._id}`, module)
  return response.data
}

//- deleteModule
export const deleteModule = async (moduleId: any) => {
  const response = await axios.delete(`${MODULES_API}/${moduleId}`)
  return response.data
}

//- createModule
export const createModule = async (courseId: any, module: any) => {
  const response = await axios.post(`${COURSES_API}/${courseId}/modules`, module)
  return response.data
}

//- findModulesForCourse
export const findModulesForCourse = async (courseId: string) => {
  const response = await axios.get(`${COURSES_API}/${courseId}/modules`)
  return response.data
}
