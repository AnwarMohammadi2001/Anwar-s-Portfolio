import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="w-full h-[100vh] flex">
      <div
        className="h-[100vh] w-64 bg-gray-500/50 dark:bg-gray-900/50  backdrop-blur-lg flex flex-col items-start justify-center text-white shadow-lg bg-cover bg-center"
        style={{ backgroundImage: "url('/sidebar.jpg')" }}
      >
        <Sidebar />
      </div>
      {/* Main Content */}
      <div className="flex-1  flex flex-col">
        {/* Navbar */}
        <div
          style={{ backgroundImage: "url('/sidebar.jpg')" }}
          className="sticky top-0 z-10 bg-gray-500/50 dark:bg-gray-900/50  backdrop-blur-lg flex flex-col items-start justify-center text-white shadow-lg bg-cover bg-center"
        >
          <Navbar />
        </div>

        {/* Outlet (Main Content) */}
        <div className="flex-1 p-4  overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
