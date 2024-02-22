import ES5Functions from "./ES5Functions";
import ArrowFunctions from "./ArrowFunctions";
import ImpliedReturn from "./ImpliedReturn";
import FunctionParenthesisAndParameters from "./FunctionParenthesisAndParameters";

function WorkingWithFunctions() {
  return (
    <div id="working-with-functions" className="mt-1">
      <h1>Working With Functions</h1>
      <ES5Functions />
      <ArrowFunctions />
      <ImpliedReturn />
      <FunctionParenthesisAndParameters />
    </div>
  );
}

export default WorkingWithFunctions;
