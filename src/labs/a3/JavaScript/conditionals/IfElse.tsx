let true1 = true;
let false1 = false;

function IfElse() {
  return (
    <div id="if-else" className="mt-1">
      <h2>If Else</h2>
      {true1 && <p>true1</p>} {/* This only renders if true1 is true */}
      {!false1 ? <p>!false1</p> : <p>false1</p>}
    </div>
  );
}

export default IfElse;
