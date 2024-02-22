import Nav from "../Nav";
import Assignment3 from "./a3";
import { HashRouter, Link } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import Assignment4 from "./a4";
import NavLab from "../NavLab";

function Labs() {
  return (
    <div id="labs">
      <Nav />
      <h1>Labs</h1>
      <NavLab />
      <Routes>
        <Route path="a3" element={<Assignment3 />} />
        <Route path="a4" element={<Assignment4 />} />
      </Routes>
    </div>
  );
}
export default Labs;
