import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-full h-[100vh] flex">
      <div>
        <Sidebar />
      </div>
      <div className="flex-1 p-5 transform transition-transform duration-500 ease-in-out bg-white shadow-lg rounded-lg">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
