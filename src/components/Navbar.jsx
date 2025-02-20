import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  // const location = useLocation();

  // useEffect(() => {
  // 	setActive(location.pathname);
  // }, [location]);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed  top-0 z-20  mx-auto bg-[#000322]`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/* <img src={logo} alt='logo' className='w-9 h-9 object-contain' /> */}
          <div className="bg-red-600 w-9 h-9 p-1 rounded-full flex justify-center items-center">
            <span className="text-xl font-bold">M</span>
          </div>
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Anwar &nbsp;
            <span className="sm:block hidden">| &nbsp; Frontend Developer</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => {
            return (
              <li
                key={link.id}
                className={`${
                  active === `/${link.desktop}`
                    ? "text-white"
                    : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.desktop)}
              >
                <a href={link.desktop}>{link.title}</a>
              </li>
            );
          })}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt=""
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => {
              setToggle(!toggle);
            }}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex flex-col justify-end items-start  gap-4">
              {navLinks.map((link) => {
                return (
                  <li
                    key={link.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === `/${link.desktop}`
                        ? "text-white"
                        : "text-secondary"
                    }`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.desktop);
                    }}
                  >
                    <Link to={link.desktop}>{link.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
