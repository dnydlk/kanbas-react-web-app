import * as client from "./client"
import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setCurrentUser } from "./userReducer"
import CurrentUser from "./CurrentUser"

export default function Profile() {
  const [profile, setProfile] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    role: "",
  })
  const [updateMessage, setUpdateMessage] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const fetchCurrentUserProfile = async () => {
    try {
      const user = await client.profile()
      // console.log("🚀 ~ fetchProfile ~ user:", user)
      setProfile(user)
      dispatch(setCurrentUser(user))
    } catch (error: any) {
      console.error("Error fetching profile", error)
      dispatch(setCurrentUser(null))
      if (error.response && error.response.status === 401) {
        console.error("Authentication error: User not authorized")
        openModal()
      } else {
        console.error("An unknown error occurred:", error)
      }
    }
  }

  const handleSaveProfile = async () => {
    await client.updateUser(profile)
    fetchCurrentUserProfile()
    setUpdateMessage("Profile updated")
  }

  const handleSignout = async () => {
    await client.signout()
    dispatch(setCurrentUser(null))
    navigate("/Kanbas/Account/Signin")
  }

  useEffect(() => {
    fetchCurrentUserProfile()
  }, [])

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false)
  const closeModal = () => {
    setIsModalOpen(false)
  }
  const openModal = () => {
    setIsModalOpen(true)
  }

  return (
    <div id="profile" className="container">
      <div className="d-flex align-items-center justify-content-between">
        <h1 className="m-1">Profile</h1>
      </div>
      <Link to="/Kanbas/Account/Admin/Users" className="btn btn-warning w-100 m-1">
        Users
      </Link>
      {profile && (
        <div className=" d-flex flex-column">
          <label>Username</label>
          <input
            value={profile.username}
            className="form-control m-1"
            onChange={(e) => setProfile({ ...profile, username: e.target.value })}
          />
          <label>Password</label>
          <input
            value={profile.password}
            className="form-control m-1"
            onChange={(e) => setProfile({ ...profile, password: e.target.value })}
          />
          <label>First name</label>
          <input
            value={profile.firstName}
            className="form-control m-1"
            onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
          />
          <label>Last name</label>
          <input
            value={profile.lastName}
            className="form-control m-1"
            onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
          />
          <label>Date of birth</label>
          <input
            value={profile.dob}
            type="date"
            className="form-control m-1"
            onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
          />
          <label>Email</label>
          <input
            value={profile.email}
            className="form-control m-1"
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
          <label>Role</label>
          <select
            className="form-control m-1"
            value={profile.role}
            onChange={(e) => setProfile({ ...profile, role: e.target.value })}>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <button className="btn btn-primary w-100 m-1" onClick={handleSaveProfile}>
            Save
          </button>
          <button className="btn btn-danger w-100 m-1" onClick={handleSignout}>
            Signout
          </button>
          {updateMessage && <div className="alert alert-success w-100 m-1 text-center">{updateMessage}</div>}
        </div>
      )}
      {/* <pre>
        <code>{JSON.stringify(profile, null, 2)}</code>
      </pre> */}
      {/*//- Modal component */}
      {isModalOpen && (
        <div className="modal show d-block" tabIndex={-1} role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Not Signed in yet</h5>
                <button type="button" className="btn fs-3" data-dismiss="modal" aria-label="Close" onClick={closeModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Please sign in</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    navigate("/Kanbas/Account/Signin")
                  }}>
                  Signin
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
