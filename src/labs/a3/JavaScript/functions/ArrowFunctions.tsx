const subtract = (a: number, b: number) => {
  return a - b;
};
const threeMinusOne = subtract(3, 1);
console.log(threeMinusOne);

function ArrowFunctions() {
  return (
    <div id="arrow-functions" className="mt-1">
      <h3>New ES6 Arrow Functions</h3>
      threeMinusOne = {threeMinusOne} <br />
      subtract(3, 1) = {subtract(3, 1)} <br />
    </div>
  );
}

export default ArrowFunctions;
