const square = (a: number) => a * a;
const plusOne = (a: number) => a + 1;
const twoSquared = square(2);
const threePlusOne = plusOne(3);

function FunctionParenthesisAndParameters() {
  return (
    <div id="function-parenthesis-and-parameters" className="mt-1">
      <h3>Parenthesis and Parameters</h3>
      twoSquared = {twoSquared} <br />
      square(2) = {square(2)} <br />
      threePlusOne = {threePlusOne} <br />
      plusOne(3) = {plusOne(3)} <br />
    </div>
  );
}

export default FunctionParenthesisAndParameters;
