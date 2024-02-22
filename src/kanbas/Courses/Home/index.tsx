import ModuleList from "../Modules/List";
import Sidebar from "./Sidebar";
function Home() {
  return (
    <>
      {/* <div className="flex-fill p-2 mt-0 me-4">fixme: */}
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <ModuleList />
          </div>
          <div className="col-3 pe-0 me-0 mt-2 ">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
