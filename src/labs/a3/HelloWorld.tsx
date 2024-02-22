import { Link } from "react-router-dom";

function HelloWorld() {
  return (
    <div>
      <Link to="/labs/a3">A3</Link>
      <Link to="/kanbas">Kanbas</Link>
      <Link to="/hello">Hello</Link>
      <h1>Hello World!</h1>
    </div>
  );
}
export default HelloWorld;

//* notice that if we're returning a single line of code, the parenthesis in the return statement are optional. If HelloWorld would have been a more complex component, we could have implemented it in HelloWorld/index.tsx giving us a whole directory to implement it
