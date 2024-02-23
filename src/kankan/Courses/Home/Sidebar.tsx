import { TbFileImport } from "react-icons/tb";
import { FaFileImport } from "react-icons/fa6";
import { MdAddHomeWork } from "react-icons/md";
import { FaChartColumn } from "react-icons/fa6";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FaRegBell } from "react-icons/fa";
import { PiNumberCircleFive } from "react-icons/pi";
import { IoIosClose } from "react-icons/io";

const sidebarButtons = [
  { Icon: TbFileImport, text: "Import Existing Content" },
  { Icon: FaFileImport, text: "Import From Commons" },
  { Icon: MdAddHomeWork, text: "Choose Home Page" },
  { Icon: FaChartColumn, text: "View Course Stream" },
  { Icon: HiOutlineSpeakerphone, text: "New Announcement" },
  { Icon: FaChartColumn, text: "New Analytics" },
  { Icon: FaRegBell, text: "View Course Notifications" },
];

const todoItems = [
  {
    Icon: PiNumberCircleFive,
    title: "Grade A1 - ENV + HTML",
    detail: "100 points, Sep 18 at 11:59",
    closeIcon: IoIosClose,
  },
  {
    Icon: PiNumberCircleFive,
    title: "Grade A2 - CSS + BOOTSTRAP",
    detail: "100 points, Oct 2 at 11:59",
    closeIcon: IoIosClose,
  },
];

function Sidebar() {
  return (
    <div className="col pe-0 me-0 mt-2">
      <div id="Sidebar" className="w-100">
        {sidebarButtons.map((button, index) => (
          <div className="row" key={index}>
            <div className="col wd-dani-modules-status-btn-col p-0 m-0">
              <button className="wd-dani-btn w-100 text-start mb-1">
                <button.Icon className="me-2" />
                {button.text}
              </button>
            </div>
          </div>
        ))}

        <div className="container m-0 p-0 pe-2">
          <h4 className="mt-3">To Do</h4>
          <hr />
          {todoItems.map((item, index) => (
            <div className="row pe-4 mb-4" key={index}>
              <div className="col-auto wd-dani-color-red">
                <item.Icon className="fs-3 align-middle" />
              </div>
              <div className="col">
                <div className="row wd-dani-color-red">{item.title}</div>
                <div className="row" style={{ fontSize: "14px" }}>
                  {item.detail}
                </div>
              </div>
              <div className="col-auto p-0">
                <item.closeIcon />
              </div>
            </div>
          ))}
          {/* <div className="row pe-4 mb-4">
            <div className="col-auto wd-dani-color-red">
              <PiNumberCircleFive className="fs-3 align-middle" />
            </div>
            <div className="col">
              <div className="row wd-dani-color-red">Grade A1 - ENV + HTML</div>
              <div className="row" style={{ fontSize: "14px" }}>
                100 points, Sep 18 at 11:59
              </div>
            </div>
            <div className="col-auto p-0">
              <IoIosClose />
            </div>
          </div>
          <div className="row pe-4 mb-3">
            <div className="col-auto wd-dani-color-red">
              <PiNumberCircleFive className="fs-3 align-middle" />
            </div>
            <div className="col">
              <div className="row wd-dani-color-red">
                Grade A2 - CSS + BOOTSTRAP
              </div>
              <div className="row" style={{ fontSize: "14px" }}>
                100 points, Oct 2 at 11:59
              </div>
            </div>
            <div className="col-auto p-0">
              <IoIosClose />
            </div>
          </div> */}
        </div>
      </div>
    </div>

    // // <div id="Sidebar" className="me-3 mt-3"fixme:>
    // <div id="Sidebar">
    //   <div className="row">
    //     <div className="row">
    //       <div className="col wd-dani-modules-status-btn-col p-0 m-0">
    //         <button className="wd-dani-btn w-100 text-start">
    //           <TbFileImport />
    //           Import Existing Content
    //         </button>
    //       </div>
    //     </div>
    //     <div className="row">
    //       <div className="col wd-dani-modules-status-btn-col p-0 m-0">
    //         <button className="wd-dani-btn w-100 text-start">
    //           <FaFileImport />
    //           Import From Commons
    //         </button>
    //       </div>
    //     </div>
    //     <div className="row">
    //       <div className="col wd-dani-modules-status-btn-col p-0 m-0">
    //         <button className="wd-dani-btn w-100 text-start">
    //           <MdAddHomeWork />
    //           Choose Home Page
    //         </button>
    //       </div>
    //     </div>
    //     <div className="row">
    //       <div className="col wd-dani-modules-status-btn-col p-0 m-0">
    //         <button className="wd-dani-btn w-100 text-start">
    //           <FaChartColumn />
    //           View Course Stream
    //         </button>
    //       </div>
    //     </div>
    //     <div className="row">
    //       <div className="col wd-dani-modules-status-btn-col p-0 m-0">
    //         <button className="wd-dani-btn w-100 text-start">
    //           <HiOutlineSpeakerphone />
    //           New Announcement
    //         </button>
    //       </div>
    //     </div>
    //     <div className="row">
    //       <div className="col wd-dani-modules-status-btn-col p-0 m-0">
    //         <button className="wd-dani-btn w-100 text-start">
    //           <FaChartColumn />
    //           New Analytics
    //         </button>
    //       </div>
    //     </div>
    //     <div className="row">
    //       <div className="col wd-dani-modules-status-btn-col p-0 m-0">
    //         <button className="wd-dani-btn w-100 text-start">
    //           <FaRegBell />
    //           View Course Notifications
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Sidebar;
