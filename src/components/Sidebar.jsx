import React from "react";
import LinkItems from "./LinkItems";
import { Link } from "react-router-dom";
import { links } from "../Constants/link";

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <>
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 bg-gradient-to-r from-blue-900 to-blue-300   border-r border-gray-200 transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full px-3 pb-4 overflow-y-auto ">
          <ul className="space-y-2 font-medium">
            {links.map((link, map) => (
              <LinkItems key={link} {...link} />
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
