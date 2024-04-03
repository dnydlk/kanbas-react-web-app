import React, { useState } from "react";

const EncodingParametersInURLs = () => {
  const [a, setA] = useState(34);
  const [b, setB] = useState(23);
  return (
    <div>
      <h3>Encoding Parameters In URLs</h3>
      <h4>Calculator</h4>
      <input
        type="number"
        value={a}
        className="form-control mb-2"
        onChange={(e) => {
          setA(parseInt(e.target.value));
        }}
      />
      <input
        type="number"
        value={b}
        className="form-control"
        onChange={(e) => {
          setB(parseInt(e.target.value));
        }}
      />
      <h3>Path Parameters</h3>
      <a
        href={`http://localhost:4000/a5/add/${a}/${b}`}
        className="btn btn-primary m-1">
        Add {a} + {b}
      </a>
      <a
        href={`http://localhost:4000/a5/subtract/${a}/${b}`}
        className="btn btn-secondary m-1">
        Subtract {a} - {b}
      </a>
      <a
        href={`http://localhost:4000/a5/multiple/${a}/${b}`}
        className="btn btn-success m-1">
        Multiple {a} * {b}
      </a>
      <a
        href={`http://localhost:4000/a5/divide/${a}/${b}`}
        className="btn btn-danger m-1">
        Divide {a} / {b}
      </a>
      <h3>Query Parameters</h3>
      <a
        href={`http://localhost:4000/a5/calculator?a=${a}&b=${b}&operation=add`}
        className="btn btn-primary m-1">
        Add {a} + {b}
      </a>
      <a
        href={`http://localhost:4000/a5/calculator?a=${a}&b=${b}&operation=subtract`}
        className="btn btn-secondary m-1">
        Subtract {a} - {b}
      </a>
      <a
        href={`http://localhost:4000/a5/calculator?a=${a}&b=${b}&operation=multiple`}
        className="btn btn-success m-1">
        Multiple {a} * {b}
      </a>
      <a
        href={`http://localhost:4000/a5/calculator?a=${a}&b=${b}&operation=divide`}
        className="btn btn-danger m-1">
        Divide {a} {b}
      </a>
    </div>
  );
};
export default EncodingParametersInURLs;
