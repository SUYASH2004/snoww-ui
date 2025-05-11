import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll event listener for subtle background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Removed snowflake effect from navbar as requested

  return (
    <div className="navbar-container fixed top-0 left-0 right-0 z-50">
      <nav className={`relative backdrop-blur-sm ${
        scrolled ? 'bg-white bg-opacity-80' : 'bg-white bg-opacity-60'
      } transition-all duration-300 ease-in-out font-[Quicksand,sans-serif] rounded-[32px] mx-4 md:mx-auto my-5 max-w-[1200px] px-5 py-4 md:px-10 flex flex-wrap items-center justify-between ${
        scrolled ? 'shadow-lg' : 'shadow-md'
      }`}>
        <style jsx>{`
          .nav-logo {
            animation: pulse 2s infinite alternate;
          }
          
          @keyframes pulse {
            0% {
              transform: scale(1);
            }
            100% {
              transform: scale(1.05);
            }
          }
          
          .navbar-container {
            padding: 0 16px;
          }
          
          @media (min-width: 768px) {
            .navbar-container {
              padding: 0 32px;
            }
          }
        `}</style>

        <Link
          to="/"
          className="font-bold text-[1.5rem] text-[#2c3e50] no-underline flex items-center nav-logo"
        >
          ❄️ SnowwUi
        </Link>

        {/* Toggle Button for Mobile */}
        <button
          className="md:hidden text-[#2c3e50] text-2xl p-2 hover:bg-[#f0f8ff] rounded-lg transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Nav Links */}
        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute top-full left-0 right-0 md:static bg-white md:bg-transparent w-full md:flex md:w-auto md:items-center mt-4 md:mt-0 transition-all duration-300 ease-in-out flex-col md:flex-row rounded-b-lg md:rounded-none shadow-md md:shadow-none p-4 md:p-0`}
        >
          <div className="flex flex-col md:flex-row md:gap-[25px] gap-4 w-full md:w-auto">
            <Link to="/docs" className={navLinkClass}>Docs</Link>
            <Link to="/components" className={navLinkClass}>Components</Link>
            <Link to="/template" className={navLinkClass}>Template</Link>
            <Link to="/about" className={navLinkClass}>About</Link>
          </div>
        </div>
        
        {/* Frost effect overlay */}
        <div className="absolute inset-0 bg-[#d0e7f9] opacity-40 rounded-[32px] z-[-1] transition-opacity duration-300 ease-in-out" 
             style={{ opacity: scrolled ? '70%' : '40%' }}></div>
      </nav>
    </div>
  );
}

const navLinkClass =
  "text-[#2c3e50] no-underline font-medium text-base transition-all duration-300 ease-in-out relative py-[5px] hover:text-[#1a2733] after:absolute after:w-0 after:h-[2px] after:bg-[#8ecae6] after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300";

export default Navbar;