import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithObjects from "./WorkingWithObjects";

const API_BASE = process.env.REACT_APP_API_BASE

const Assignment5 = () => {
  return (
    <div id="a5" className="container">
      <h1>Assignment 5</h1>
      <a href={`${API_BASE}/a5/welcome`} className="form-control text-decoration-none mb-2">
        Welcome
      </a>
      <EncodingParametersInURLs />
      <WorkingWithObjects />
      <WorkingWithArrays />
      <hr />
    </div>
  )
};
export default Assignment5;
