import KanbasNavigation from "./Navigation";

function Kanbas() {
  return (
    <div className="d-flex">
      {/* fixme: Kanbas Navigation */}
      <div>
        <KanbasNavigation />
      </div>
      <div style={{ flexGrow: 1 }}>
        <h1>Account</h1>
        <h1>Dashboard</h1>
        <h1>Courses</h1>
      </div>
    </div>
  );
}
export default Kanbas;

//* since the Kanbas component consists of an entire application with lots of screens each implemented in several files, we've decided to use an entire folder to implement the component. It is common use the same name for the folder and component name, but it is not required.
