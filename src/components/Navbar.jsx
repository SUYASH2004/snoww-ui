import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#d0e7f9] font-[Quicksand,sans-serif] rounded-[32px] mx-4 md:mx-auto my-5 max-w-[1200px] px-5 py-4 md:px-10 flex flex-wrap items-center justify-between">
      <Link
        to="/"
        className="font-bold text-[1.5rem] text-[#2c3e50] no-underline flex items-center"
      >
        ❄️ SnowwUi
      </Link>

      {/* Toggle Button for Mobile */}
      <button
        className="md:hidden text-[#2c3e50] text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Nav Links */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } w-full md:flex md:w-auto md:items-center mt-4 md:mt-0 transition-all duration-300 ease-in-out`}
      >
        <div className="flex flex-col md:flex-row md:gap-[25px] gap-4">
          <Link to="/docs" className={linkClass}>Docs</Link>
          <Link to="/components" className={linkClass}>Components</Link>
          <Link to="/template" className={linkClass}>Template</Link>
          <Link to="/about" className={linkClass}>About</Link>
        </div>
      </div>
    </nav>
  );
}

const linkClass =
  "text-[#2c3e50] no-underline font-medium text-base transition-colors duration-300 ease-in-out relative py-[5px]";

export default Navbar;
