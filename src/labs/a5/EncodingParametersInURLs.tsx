import axios from "axios";
import React, { useEffect, useState } from "react";

const EncodingParametersInURLs = () => {
  const [a, setA] = useState(34);
  const [b, setB] = useState(23);

  const [welcome, setWelcome] = useState("");
  const fetchWelcome = async () => {
    const response = await axios.get("http://localhost:4000/a5/welcome");
    setWelcome(response.data);
  };

  const [result, setResult] = useState(0);
  const fetchSum = async (a: number, b: number) => {
    const response = await axios.get(`http://localhost:4000/a5/add/${a}/${b}`);
    setResult(response.data);
  };

  const fetchSubtraction = async (a: number, b: number) => {
    const response = await axios.get(
      `http://localhost:4000/a5/subtract/${a}/${b}`
    );
    setResult(response.data);
  };

  useEffect(() => {
    fetchWelcome();
  }, []);

  return (
    <div id="encoding-parameters-in-urls">
      <h3>Encoding Parameters In URLs</h3>
      <h4>Integrating React with APIs</h4>
      <h5>Fetching Welcome</h5>
      <h6>{welcome}</h6>
      <h4>Calculator</h4>
      <input
        type="number"
        value={a}
        className="form-control m-1"
        onChange={(e) => {
          setA(parseInt(e.target.value));
        }}
      />
      <input
        type="number"
        value={b}
        className="form-control m-1"
        onChange={(e) => {
          setB(parseInt(e.target.value));
        }}
      />
      <input
        readOnly
        type="number"
        value={result}
        className="form-control m-1"
      />
      <h3>Fetch Result</h3>
      <button className="btn btn-primary m-1" onClick={() => fetchSum(a, b)}>
        Fetch Sum of {a} + {b}
      </button>
      <button
        className="btn btn-secondary m-1"
        onClick={() => fetchSubtraction(a, b)}>
        Fetch Sub of {a} - {b}
      </button>

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
      <hr />
    </div>
  );
};
export default EncodingParametersInURLs;
