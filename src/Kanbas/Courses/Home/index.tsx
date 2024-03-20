import ModuleList from "../Modules/List";
import Sidebar from "./Sidebar";
function Home() {
  return (
    <>
      {/* <div className="flex-fill p-2 mt-0 me-4">fixme: */}
      <div className="container-fluid">
        <div className="row">
        <h2>Hiding and showing responsive content</h2>
      <div className="d-block d-sm-none fa-2x">XS</div>
      <div className="d-none d-sm-block d-md-none fa-2x">S</div>
      <div className="d-none d-md-block d-lg-none fa-2x">M</div>
      <div className="d-none d-lg-block d-xl-none fa-2x">L</div>
      <div className="d-none d-xl-block d-xxl-none fa-2x">XL</div>
      <div className="d-none d-xxl-block fa-2x">XXL</div>
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
