import { Routes, Route, Navigate } from "react-router"
import Dashboard from "./Dashboard"
import KanbasNavigation from "./Navigation"
import "./styles.css"
import Courses from "./Courses"
import { Provider } from "react-redux"
import store from "./store"
import TopNav from "./Navigation/TopNav"
import Account from "./Account"

const API_BASE = process.env.REACT_APP_API_BASE

function Kanbas() {
  return (
    <Provider store={store}>
      <div id="kanbas" className="d-flex">
        <KanbasNavigation />
        <div className="main-content m-0 p-0" style={{ flexGrow: 1 }}>
          <TopNav />
          <div className="m-2 p-2">
            <Routes>
              <Route path="/" element={<Navigate to="Dashboard" />} />
              <Route path="Account/*" element={<Account />} />
              <Route path="Dashboard" element={<Dashboard />} />
              <Route path="Courses/:courseId/*" element={<Courses />} />
            </Routes>
          </div>
        </div>
      </div>
    </Provider>
  )
}
export default Kanbas

//* since the Kanbas component consists of an entire application with lots of screens each implemented in several files, we've decided to use an entire folder to implement the component. It is common use the same name for the folder and component name, but it is not required.
