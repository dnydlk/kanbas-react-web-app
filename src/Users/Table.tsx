import React, { useState, useEffect } from "react"
import * as client from "./client"
import { User } from "./client"
import { BsPlusCircleFill, BsTrash3Fill, BsFillCheckCircleFill, BsPencil } from "react-icons/bs"

export default function UserTable() {
  const [users, setUsers] = useState<User[]>([])

  const [user, setUser] = useState<User>({
    _id: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    role: "USER",
  })

  const [role, setRole] = useState("ALL")

  const createUser = async () => {
    try {
      const newUser = await client.createUser(user)
      setUsers([newUser, ...users])
    } catch (err) {
      console.log(err)
    }
  }

  const deleteUser = async (user: User) => {
    try {
      await client.deleteUser(user)
      setUsers(users.filter((u) => u._id !== user._id))
    } catch (err) {
      console.log(err)
    }
  }

  const selectUser = async (user: User) => {
    console.log("🚀 ~ selectUser ~ user._id:", user._id)
    try {
      const u = await client.findUserById(user._id)
      setUser(u)
    } catch (err) {
      console.log(err)
    }
  }

  const updateUser = async () => {
    try {
      const status = await client.updateUser(user)
      setUsers(users.map((u) => (u._id === user._id ? user : u)))
    } catch (err) {
      console.log(err)
    }
  }

  const fetchUsers = async () => {
    const users = await client.findAllUsers()
    console.log("🚀 ~ fetchUsers ~ users:", users)
    setUsers(users)
    console.log("🚀 ~ fetchUsers ~ users fetched")
  }

  const fetchUsersByRole = async (role: string) => {
    const users = await client.findUsersByRole(role)
    setRole(role)
    setUsers(users)
  }

  useEffect(() => {
    fetchUsers()
  }, [])
  return (
    <div id="users" className="container">
      <div className="d-flex align-items-center justify-content-between">
        <h1>User Table</h1>
        <select value={role || "ALL"} className="form-control w-25" onChange={(e) => fetchUsersByRole(e.target.value)}>
          <option value="ALL">All</option>
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </select>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Role</th>
            <th>&nbsp;</th>
          </tr>
          <tr>
            <td>
              <div className=" d-flex">
                <input
                  value={user.username}
                  className="form-control"
                  onChange={(e) => setUser({ ...user, username: e.target.value })}
                />
                <input
                  value={user.password}
                  className="form-control me-1"
                  onChange={(e) => setUser({ ...user, password: e.target.value })}
                />
              </div>
            </td>
            <td>
              <input
                value={user.firstName}
                className="form-control"
                onChange={(e) => setUser({ ...user, firstName: e.target.value })}
              />
            </td>
            <td>
              <input
                value={user.lastName}
                className="form-control"
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              />
            </td>
            <td>
              <select
                value={user.role}
                className="form-control"
                onChange={(e) => setUser({ ...user, role: e.target.value })}>
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
              </select>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <BsFillCheckCircleFill
                  onClick={updateUser}
                  className="fs-1 text-success me-1"
                  style={{ cursor: "pointer" }}
                />
                <BsPlusCircleFill
                  onClick={createUser}
                  className="fs-1 text-success ms-2 me-1"
                  style={{ cursor: "pointer" }}
                />
              </div>
            </td>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr key={user._id + user.username}>
              <td>{user.username}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.role}</td>
              <td>
                <button onClick={() => deleteUser(user)} className="btn btn-danger me-2">
                  <BsTrash3Fill />
                </button>
                <button onClick={() => selectUser(user)} className="btn btn-warning me-2">
                  <BsPencil />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
