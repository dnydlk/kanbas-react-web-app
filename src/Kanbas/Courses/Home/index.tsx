import ModuleList from "../Modules/List";
import Sidebar from "./Sidebar";
function Home() {
  return (
    <>
      {/* <div className="flex-fill p-2 mt-0 me-4">fixme: */}
      <div className="container-fluid">
        <div className="row">
        <h2>Hiding and showing responsive content</h2>
      <div className="d-block d-sm-none fa-2x">xs</div>
      <div className="d-none d-sm-block d-md-none fa-2x">sm</div>
      <div className="d-none d-md-block d-lg-none fa-2x">md</div>
      <div className="d-none d-lg-block d-xl-none fa-2x">lg</div>
      <div className="d-none d-xl-block d-xxl-none fa-2x">xl</div>
      <div className="d-none d-xxl-block fa-2x">xxl</div>
          <div className="col">
            <ModuleList />
          </div>
          <div className="col-3 pe-0 me-0 mt-2 d-none d-lg-block">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
