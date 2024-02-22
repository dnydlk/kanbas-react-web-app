import { Link } from "react-router-dom";

function Kanbas() {
  return (
    <div>
      <Link to="/labs/a3">A3</Link>
      <Link to="/kanbas">Kanbas</Link>
      <Link to="/hello">Hello</Link>
      <h1>Kanbas</h1>
    </div>
  );
}
export default Kanbas;

//* since the Kanbas component consists of an entire application with lots of screens each implemented in several files, we've decided to use an entire folder to implement the component. It is common use the same name for the folder and component name, but it is not required.
