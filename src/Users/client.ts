import axios from "axios"
export const BASE_API = process.env.REACT_APP_API_BASE
export const USERS_API = `${BASE_API}/api/users`
export interface User {
  _id: string
  username: string
  password: string
  firstName: string
  lastName: string
  role: string
}

const api = axios.create({
  withCredentials: true,
})

//- Signin with credentials object (username, password)
export const signin = async (credentials: User) => {
  try {
    const response = await api.post(`${USERS_API}/signin`, credentials)
    return response.data
  } catch (error) {
    throw error
  }
}

//- Profile
export const profile = async () => {
  try {
    const response = await api.post(`${USERS_API}/profile`)
    console.log("🚀 ~ profile ~ response.data:", response.data)
    return response.data
  } catch (error) {
    throw error
  }
}

//- Update profile with user object
export const updateUser = async (user: any) => {
  const response = await api.put(`${USERS_API}/${user._id}`, user)
  return response.data
}

//- Find all users
export const findAllUsers = async () => {
  const response = await api.get(`${USERS_API}`)
  return response.data
}

//- Create user with user object
export const createUser = async (user: any) => {
  const response = await api.post(`${USERS_API}`, user)
  return response.data
}

//- Delete user with user id
export const deleteUser = async (user: any) => {
  const response = await api.delete(`${USERS_API}/${user._id}`)
  return response.data
}

//- Find user by id
export const findUserById = async (id: any) => {
  const response = await api.get(`${USERS_API}/${id}`)
  return response.data
}

//- Find users by role
export const findUsersByRole = async (role: any) => {
  const response = await api.get(`${USERS_API}?role=${role}`)
  return response.data
}

//- Signup with user object
export const signup = async (user: any) => {
  try {
    const response = await api.post(`${USERS_API}/signup`, user)
    return response.data
  } catch (error) {
    throw error
  }
}

//- Signout
export const signout = async () => {
  try {
    const response = await api.post(`${USERS_API}/signout`)
    return response.data
  } catch (error) {
    throw error
  }
}
