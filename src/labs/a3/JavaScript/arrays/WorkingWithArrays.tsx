import Arrays from "./Arrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import AddingAndRemovingDataToFromArrays from "./AddingAndRemovingDataToFromArrays";
import ForLoops from "./ForLoops";
import MapFunction from "./MapFunction";
import JsonStringify from "../json/JsonStringify";
import FindFunction from "./FindFunction";
import FindIndex from "./FindIndex";
import FilterFunction from "./FilterFunction";
import TemplateLiterals from "../string/TemplateLiterals";
import House from "../json/House";
import Spreading from "../json/Spreading";
import Destructing from "../json/Destructing";

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
      <FindFunction />
      <FindIndex />
      <FilterFunction />
      <TemplateLiterals />
      <House />
      <Spreading />
      <Destructing />
    </div>
  );
}

export default WorkingWithArrays;
