import { useSelector } from "react-redux"
import { KanbasState } from "./store"
import { Navigate } from "react-router"

function ProtectRoute({ children }: any) {
  const { currentUser } = useSelector((state: KanbasState) => state.userReducer)
  return currentUser ? children : <Navigate to={"/Kanbas/Account"} />
}
export default ProtectRoute
