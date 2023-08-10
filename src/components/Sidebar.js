import React, { useState } from "react";
import { Icon } from "boxicons";
import "./sidebar.css";

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [submenuActive, setSubmenuActive] = useState(false);

  const handleSidebarToggle = (e) => {
    e.preventDefault()
    setSubmenuActive(!submenuActive);
    setSidebarOpen((prevOpen) => !prevOpen);
  };

  return (
    <>
    
      <div className="sidebar" style={{width: submenuActive?"260px":"50px"}}>
        <div className="d-flex align-items-center justify-content-between">
        {submenuActive&&
            <a href="/" className="logo">
                mashPlannr.
            </a>
        }
          <i
            style={{ fontSize: "18px", color: "white", cursor: "pointer", position: "fixed", top: "25px", left:  submenuActive?"220px":"15px"}}
            className="fa-solid fa-bars"
            id="sidebar-close"
            onClick={e=>handleSidebarToggle(e)}
          ></i>
        </div>

        <div className="menu-content">
          <ul className="menu-items">
            <div className="sidebar-icons">
                <li className="item d-flex align-center">
                <a href="/"><box-icon type='solid' name='dashboard' style={{position: !submenuActive&&"fixed", left: !submenuActive&&"10px", top: !submenuActive&&"110px"}}></box-icon></a><a href="/">Dashboard</a>
                </li>

                {/* <li className="item d-flex align-center">
                <a href="/merchants"><box-icon type='solid' name='group' style={{position: !submenuActive&&"fixed", left: !submenuActive&&"10px", top: !submenuActive&&"170px"}}></box-icon></a><a href="/merchants">Merchants</a>
                </li>

                <li className="item d-flex align-center">
                <a href="/orders"><box-icon type='solid' name='truck' style={{position: !submenuActive&&"fixed", left: !submenuActive&&"10px", top: !submenuActive&&"230px"}}></box-icon></a><a href="/orders">Orders</a>
                </li>

                <li className="item d-flex align-center">
                <a href="/leavemanagement"><box-icon type='solid' name='calendar-check' style={{position: !submenuActive&&"fixed", left: !submenuActive&&"10px", top: !submenuActive&&"290px"}}></box-icon></a> <a href="/leavemanagement">Leave Management</a>
                </li>

                <li className="item d-flex align-center">
                <a href="/taskmanager"><box-icon type='solid' name='briefcase-alt-2' style={{position: !submenuActive&&"fixed", left: !submenuActive&&"10px", top: !submenuActive&&"350px"}}></box-icon></a> <a href="/taskmanager">Task Manager</a>
                </li>

                <li className="item d-flex align-center">
                <a href="/reports"><box-icon type='solid' name='report' style={{position: !submenuActive&&"fixed", left: !submenuActive&&"10px", top: !submenuActive&&"410px"}}></box-icon></a> <a href="/reports">Reports</a>
                </li>

                <li className="item d-flex align-center">
                <a href="/companyprofile"><box-icon type='solid' name='user-plus' style={{position: !submenuActive&&"fixed", left: !submenuActive&&"10px", top: !submenuActive&&"470px"}}></box-icon></a> <a href="/companyprofile">Profile</a>
                </li> */}
         </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;