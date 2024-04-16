import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { User } from "./client"
import * as client from "./client"

export default function Signin() {
  const [authenticationError, setAuthenticationError] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")
  const [credentials, setCredentials] = useState<User>({
    _id: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    role: "USER",
  })

  const navigate = useNavigate()

  const signin = async () => {
    try {
      await client.signin(credentials)
      console.log("🚀 ~ signin ~ credentials:", credentials)
      navigate("/Kanbas/Account/Profile")
    } catch (error: any) {
      console.error("Error signing in", error)
      if (error.response && error.response.status === 401) {
        console.error("Authentication error")
        setAuthenticationError(true)
        setErrorMsg("Username or password is incorrect. Please try again.")
      } else {
        console.error("An unknown error occurred:", error)
      }
    }
  }

  const signup = () => {
    navigate("/Kanbas/Account/Signup")
  }

  return (
    <div id="signin" className="container">
      <h1 className="m-2">Signin</h1>
      <input
        value={credentials.username}
        className="form-control m-2"
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
      />
      <input
        value={credentials.password}
        className="form-control m-2"
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />
      <button className="btn btn-primary m-2 mt-1" onClick={signin}>
        Signin
      </button>
      Don't have an account? &nbsp;
      <a className="text-primary" style={{ cursor: "pointer" }} onClick={signup}>
        Signup
      </a>
      {authenticationError && (
        <div className="alert alert-danger m-2">Username or password is incorrect. Please try again.</div>
      )}
    </div>
  )
}
