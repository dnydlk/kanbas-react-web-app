import Arrays from "./Arrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import AddingAndRemovingDataToFromArrays from "./AddingAndRemovingDataToFromArrays";
import ForLoops from "./ForLoops";
import MapFunction from "./MapFunction";
import JsonStringify from "../json/JsonStringify";

function WorkingWithArrays() {
  return (
    <div id="working-with-arrays" className="mt-1">
      <h1>Working With Arrays</h1>
      <Arrays />
      <ArrayIndexAndLength />
      <AddingAndRemovingDataToFromArrays />
      <ForLoops />
      <MapFunction />
      <JsonStringify />
    </div>
  );
}

export default WorkingWithArrays;
