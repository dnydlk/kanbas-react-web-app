let numberArray1 = [1, 2, 4, 5, 6];
let stringArray1 = ["string1", "string3"];
const fourIndex = numberArray1.findIndex((a) => a === 4);
const string3Index = stringArray1.findIndex((a) => a === "string3");

function findIndex() {
  return (
    <div id="find-index" className="mt-1">
      <h2>Find index function</h2>
      fourIndex: {fourIndex} <br />
      string3Index: {string3Index} <br />
    </div>
  );
}

export default findIndex;
