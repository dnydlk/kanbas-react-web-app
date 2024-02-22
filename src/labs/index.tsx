import Assignment3 from "./a3";
import { Link } from "react-router-dom";

function Labs() {
  return (
    <div id="labs">
      <Link to="/labs/a3">A3</Link>
      <Link to="/kanbas">Kanbas</Link>
      <Link to="/hello">Hello</Link>
      <Assignment3 />
    </div>
  );
}
export default Labs;
