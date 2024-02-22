let loggedIn = true;

function TernaryOperator() {
  return (
    <div id="ternary-operator">
      <h2>Ternary Operator</h2>
      {loggedIn ? <p>Welcome</p> : <p>Please login</p>}
    </div>
  );
}

export default TernaryOperator;
