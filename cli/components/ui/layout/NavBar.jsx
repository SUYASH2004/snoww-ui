// Updated Navbar code with adjusted CSS
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
      <nav
        className={`relative backdrop-blur-md ${
          scrolled ? "bg-[#f9fbff]/80 shadow-lg" : "bg-[#f9fbff]/60 shadow-md"
        } transition-all duration-300 ease-in-out font-[Quicksand,sans-serif] rounded-xl max-w-6xl mx-auto px-4 py-3 md:px-8 flex items-center justify-between`}
      >
        <Link
          to="/"
          className="font-bold text-xl text-[#2c3e50] no-underline flex items-center gap-1"
          aria-label="Home"
        >
          ❄️ SnowwUI
        </Link>

        <button
          className="md:hidden text-[#2c3e50] text-2xl p-2 hover:bg-[#e8f0f9] rounded-lg transition-colors duration-200"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute top-full left-0 right-0 md:static bg-[#f9fbff]/95 md:bg-transparent w-full md:flex md:w-auto md:items-center mt-2 md:mt-0 transition-all duration-300 ease-in-out flex-col md:flex-row rounded-b-xl md:rounded-none shadow-md md:shadow-none p-4 md:p-0 backdrop-blur-md md:backdrop-blur-none`}
        >
          <div className="flex flex-col md:flex-row md:gap-6 gap-3 w-full md:w-auto">
            <Link
              to="/docs"
              className={navLinkClass}
              aria-label="Documentation"
            >
              Docs
            </Link>
            <Link
              to="/components"
              className={navLinkClass}
              aria-label="Components"
            >
              Components
            </Link>
            <Link
              to="/template"
              className={navLinkClass}
              aria-label="Template"
            >
              Template
            </Link>
            <Link to="/about" className={navLinkClass} aria-label="About">
              About
            </Link>
          </div>
        </div>

        <div
          className="absolute inset-0 bg-[#d0e7f9]/30 rounded-xl z-[-1] transition-opacity duration-300 ease-in-out"
          style={{ opacity: scrolled ? "0.7" : "0.4" }}
        ></div>
      </nav>
    </div>
  );
}

const navLinkClass =
  "text-[#2c3e50] no-underline font-medium text-base transition-all duration-300 ease-in-out relative py-1.5 hover:text-[#1a2733] after:absolute after:w-0 after:h-[2px] after:bg-[#8ecae6] after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300";

export default Navbar;