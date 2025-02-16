import React, { useState } from "react";
import { Sun, Moon } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="w-full flex items-center justify-between py-2 px-5  text-white shadow-md">
      <div className="flex items-center gap-4">
        <ModeToggle />
        <select className="bg-gray-700 text-white p-2 rounded-lg">
          <option value="en">English</option>
          <option value="fa">فارسی</option>
        </select>
      </div>
      <div>
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-10 h-10 rounded-full border-2 border-white"
        />
      </div>
    </div>
  );
};

export default Navbar;
