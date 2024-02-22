import Add from "./Add";
import Classes from "./Classes";
import ConditionalOutput from "./ConditionalOutput";
import Highlight from "./Highlight";
import JavaScript from "./JavaScript";
import PathParameters from "./routing/PathParameters";
import Styles from "./Styles";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";
function Assignment3() {
  return (
    //* "container" is a Bootstrap class.
    //* The library was imported in src/index.tsx and the classes are available to all components without needing to import it again. You can also create additional CSS files and import them in TSX files that need specific styling.
    <div id="a3" className="container">
      <h1>Assignment 3</h1>
      <TodoList />
      <TodoItem />
      <ConditionalOutput />
      <Styles />
      <Classes />
      <PathParameters />
      <JavaScript />
      <Highlight>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
        excepturi molestias quis eum mollitia nostrum provident rerum, in iusto
        at accusamus. Ipsa repellat veritatis earum. Omnis obcaecati quaerat hic
        quod?
      </Highlight>
      <Add a={3} b={4} />
    </div>
  );
}
export default Assignment3;
