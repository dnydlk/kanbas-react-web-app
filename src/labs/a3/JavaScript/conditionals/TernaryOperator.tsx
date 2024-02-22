let loggedIn = true;

function TernaryOperator() {
  return (
    <div id="ternary-operator" className="mt-1">
      <h2>Ternary Operator</h2>
      {loggedIn ? <p>Welcome</p> : <p>Please login</p>}
    </div>
  );
}

export default TernaryOperator;
