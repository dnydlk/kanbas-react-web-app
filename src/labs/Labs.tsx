import Nav from "../Nav";
import Assignment3 from "./a3";
import { Routes, Route } from "react-router";
import Assignment4 from "./a4";
import LabNav from "./LabNav";

function Labs() {
  return (
    <div id="labs" className="container m-0">
      <Nav />
      <h1>Labs</h1>
      <LabNav />
      <Routes>
        <Route path="a3/*" element={<Assignment3 />} />
        <Route path="a4/*" element={<Assignment4 />} />
      </Routes>
    </div>
  );
}
export default Labs;
