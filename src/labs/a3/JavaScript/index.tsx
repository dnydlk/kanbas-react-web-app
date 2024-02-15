import VariablesAndConstants from "./variables/VariablesAndConstants";
import VariableTypes from "./variables/VariableTypes";
import BooleanVariables from "./variables/BooleanVariables";
import IfElse from "./variables/IfElse";
import TernaryOperator from "./variables/TernaryOperator";
import WorkingWithFunctions from "./variables/WorkingWithFunctions";
import WorkingWithArrays from "./variables/WorkingWithArrays";

function JavaScript() {
  console.log("Hello World!");
  return (
    <div>
      <h1>JavaScript</h1>
      <VariablesAndConstants />
      <VariableTypes />
      <BooleanVariables />
      <IfElse />
      <TernaryOperator />
      <WorkingWithFunctions />
      <WorkingWithArrays />
      <br />
      <br />
    </div>
  );
}
export default JavaScript;
