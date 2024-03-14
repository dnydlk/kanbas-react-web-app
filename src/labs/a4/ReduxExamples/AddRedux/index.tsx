import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { add } from "./addReducer";
import { LabState } from "../../../store";

function AddRedux() {
  const [a, setA] = useState(12);
  const [b, setB] = useState(23);
  const { sum } = useSelector((state: LabState) => state.addReducer);
  const dispatch = useDispatch();

  return (
    <div className="w-25">
      <h2>Add Redux</h2>
      <h3>
        {a} + {b} = {sum}
      </h3>
      <input
        type="number"
        value={a}
        onChange={(e) => setA(parseInt(e.target.value))}
        className="form-control mb-2"></input>
      <input
        type="number"
        value={b}
        onChange={(e) => setB(parseInt(e.target.value))}
        className="form-control mb-2"></input>
      <button
        onClick={() => dispatch(add({ a, b }))}
        className="btn btn-primary mb-2">
        Add Redux
      </button>
    </div>
  );
}

export default AddRedux;
