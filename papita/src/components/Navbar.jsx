import React, { useState } from "react";
import { FcSearch } from "react-icons/fc";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  return (
    <header className="w-screen overflow-x-hidden scrollbar-hide z-[10000] sticky p-5 top-0 flex justify-between bg-blue-400">
      <Link to="/" className="my-auto">
        <div>PAPI-TA</div>
      </Link>
      <div>
        <label className="flex items-center justify-center border border-blue-200 rounded-lg p-1">
          <input
            type="text"
            className="bg-transparent rounded-md outline-none focus:outline-none p-1"
            onChange={(e) => setSearch(e.target.value)}
          />
          <FcSearch className="mr-1" />
        </label>
      </div>
      {/* Profile */}
      <div className="flex flex-col justify-center mr-8">
        <div>Made with ❤ at Hack This Fall 3.0</div>
        <div className="absolute "></div>
      </div>
    </header>
  );
};

export default Navbar;
