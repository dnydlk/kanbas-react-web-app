import ClickEvent from "./ClickEvent";
import EventObject from "./EventObject";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";

const Assignment4 = () => {
  function sayHello() {
    alert("Hello");
  }
  return (
    <div id="a4" className="container">
      <h1>Assignment 4</h1>
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions theFunction={sayHello} />
      <EventObject />
    </div>
  );
};
export default Assignment4;
