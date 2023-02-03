import React from "react";
import { FcSearch } from "react-icons/fc";
const Navbar = () => {
  return (
    <header className="w-full p-5 fixed flex justify-between bg-blue-400">
      <div className="my-auto">PAPITA</div>
      <div>
        <label className="flex items-center justify-center border border-blue-200 rounded-lg p-1">
          <input
            type="text"
            className="bg-transparent rounded-md outline-none focus:outline-none p-1"
          />
          <FcSearch className="mr-1" />
        </label>
      </div>
      {/* Profile */}
      <div>
        <div></div>
        <div className="absolute "></div>
      </div>
    </header>
  );
};

export default Navbar;
