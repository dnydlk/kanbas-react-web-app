import Classes from "./Classes";
import ConditionalOutput from "./ConditionalOutput";
import JavaScript from "./JavaScript";
import PathParameters from "./routing/PathParameters";
import Styles from "./Styles";
function Assignment3() {
  return (
    //* "container" is a Bootstrap class.
    //* The library was imported in src/index.tsx and the classes are available to all components without needing to import it again. You can also create additional CSS files and import them in TSX files that need specific styling.
    <div id="a3" className="container">
      <h1>Assignment 3</h1>
      <ConditionalOutput />
      <Styles />
      <Classes />
      <PathParameters />
      <JavaScript />
    </div>
  );
}
export default Assignment3;
