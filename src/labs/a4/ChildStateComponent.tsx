function ChildStateComponent({
  counter,
  setCounter,
}: {
  counter: number;
  setCounter: (counter: number) => void;
}) {
  return (
    <div>
      <h3>Child Counter {counter}</h3>
      <button
        onClick={() => setCounter(counter + 1)}
        className="btn btn-success">
        Child: Increment
      </button>
      <button
        onClick={() => setCounter(counter - 1)}
        className="btn btn-danger ms-1">
        Child: Decrement
      </button>
    </div>
  );
}
export default ChildStateComponent;
