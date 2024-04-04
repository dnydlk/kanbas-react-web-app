import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithObjects from "./WorkingWithObjects";

const Assignment5 = () => {
  return (
    <div id="a5" className="container">
      <h1>Assignment 5</h1>
      <a
        href="http://localhost:4000/a5/welcome"
        className="form-control text-decoration-none mb-2">
        Welcome
      </a>
      <EncodingParametersInURLs />
      <WorkingWithObjects />
      <WorkingWithArrays />
      <hr />
    </div>
  );
};
export default Assignment5;
