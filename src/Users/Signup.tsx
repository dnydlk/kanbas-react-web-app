import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import * as client from "./client"
import axios, { AxiosError } from "axios"

export default function Signup() {
  const [authenticationError, setAuthenticationError] = useState(false)
  const [errorMsg, setErrorMsg] = useState("default error message")

  const [user, setUser] = useState({ username: "", password: "" })

  const navigate = useNavigate()

  const signup = async () => {
    try {
      await client.signup(user)
      navigate("/Kanbas/Account/Profile")
    } catch (error: any) {
      console.error("Error signing up", error)
      if (error.response && error.response.status === 400) {
        console.error("Authentication error")
        setAuthenticationError(true)
        setErrorMsg("Username is taken, please try another.")
      } else {
        console.error("An unknown error occurred:", error)
        setAuthenticationError(true)
        setErrorMsg("An unknown error occurred, contact support.")
      }
    }
  }

  const signin = async () => {
    navigate("/Kanbas/Account/Signin")
  }

  const api = axios.create({
    withCredentials: true,
  })

  return (
    <div id="signup" className="container">
      <h1 className="m-2">Signup</h1>
      {authenticationError && <div className="alert alert-danger m-2">{errorMsg}</div>}
      <input
        value={user.username}
        className="form-control m-2"
        onChange={(e) =>
          setUser({
            ...user,
            username: e.target.value,
          })
        }
      />
      <input
        value={user.password}
        className="form-control m-2"
        onChange={(e) =>
          setUser({
            ...user,
            password: e.target.value,
          })
        }
      />
      <button className="btn btn-primary m-2 mt-1" onClick={signup}>
        Signup
      </button>
      Already have an account? &nbsp;
      <a className="text-primary" style={{ cursor: "pointer" }} onClick={signin}>
        Signin
      </a>
    </div>
  )
}
