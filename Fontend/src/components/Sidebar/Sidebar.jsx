import React from "react";
import { Link } from "react-router-dom";
import { Home, User, Briefcase, Image, Layers, Mail } from "lucide-react";

const sidebarItems = [
  { name: "Home", icon: <Home size={24} />, path: "/" },
  { name: "About Me", icon: <User size={24} />, path: "/aboutme" },
  { name: "Projects", icon: <Briefcase size={24} />, path: "/projects" },
  { name: "Gallery", icon: <Image size={24} />, path: "/gallary" },
  { name: "Services", icon: <Layers size={24} />, path: "/services" },
  { name: "Contact", icon: <Mail size={24} />, path: "/contact" },
];

const Sidebar = () => {
  return (
    <div className="h-[100vh] w-64 bg-gray-900 flex flex-col items-start justify-center text-white shadow-lg">
      <nav className="w-full flex flex-col space-y-2 ">
        {sidebarItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="flex items-center gap-3 w-full px-10 py-2 hover:bg-gray-700 rounded-lg transition"
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
