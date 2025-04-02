import React from "react";
import { navItems } from "../constant/index.js";
import { GoDot } from "react-icons/go";

const NavBar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <div className=" flex justify-center max-sm:hidden font-bold">
          {navItems.map((nav, index) => (
            <React.Fragment key={nav}>
              {index > 0 && (
                <GoDot className="text-gray-100 self-center mx-1" />
              )}
              <div className="px-9">
                <span>
                  <span className="text-gray-400 cursor-pointer text-sm font-montserrat hover:text-blue-500 underline-offset-8 decoration-blue-500 hover:underline">
                    {nav}
                  </span>
                </span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </nav>
    </header>
  );
};
export default NavBar;
