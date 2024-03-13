import { useSelector, useDispatch } from "react-redux";
import { LabState } from "../../../store";
import { increment, decrement } from "./counterReducer";

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
      <hr />
    </div>
  );
}
export default CounterRedux;
