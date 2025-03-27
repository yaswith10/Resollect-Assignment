import React from "react";
import {NavLink, Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-white text-black border-r border-gray-300 p-4 fixed">
      <ul className="space-y-2">
        {[
          { name: "Dashboard", path: "/dashboard" },
          { name: "Portfolio", path: "/portfolio" },
          { name: "Notifications", path: "/notifications" },
          { name: "Notices", path: "/notices" },
          { name: "Auction", path: "/auction" },
          { name: "Data Upload", path: "/data-upload" },
          { name: "Control Panel", path: "/control-panel" },
          { name: "User Management", path: "/user-management" },
          { name: "Permissions", path: "/permissions" }
        ].map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `block p-2 rounded transition ${isActive ? "bg-blue-700 text-white" : "hover:bg-blue-300 hover:text-white"}`
              }
            >
              <div>{item.name}</div>
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;