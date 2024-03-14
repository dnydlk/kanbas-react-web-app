import { useSelector, useDispatch } from "react-redux";
import { LabState } from "../../../store";
import { increment, decrement, reset } from "./counterReducer";

function CounterRedux() {
  const { count } = useSelector((state: LabState) => state.counterReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Counter Redux</h3>
      <h4>{count}</h4>
      <button onClick={() => dispatch(increment())} className="btn btn-success">
        Increment
      </button>
      <button
        onClick={() => dispatch(decrement())}
        className="btn btn-danger ms-1">
        Decrement
      </button>
      <button
        onClick={() => dispatch(reset())}
        className="btn btn-secondary ms-1">
        Reset
      </button>
      <hr />
    </div>
  );
}
export default CounterRedux;
