import Assignment3 from "./a3";
import Assignment4 from "./a4";
import Assignment5 from "./a5";
import LabNav from "./LabNav";
import Nav from "../Nav";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router";
import store from "./store";

function Labs() {
  return (
    <Provider store={store}>
      <div id="labs" className="container m-0">
        <Nav />
        <h1>Labs</h1>
        <LabNav />
        <Routes>
          <Route path="a3/*" element={<Assignment3 />} />
          <Route path="a4/*" element={<Assignment4 />} />
          <Route path="a5/*" element={<Assignment5 />} />
        </Routes>
      </div>
    </Provider>
  );
}
export default Labs;
