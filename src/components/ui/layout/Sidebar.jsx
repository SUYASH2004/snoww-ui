// Updated Sidebar code with adjusted CSS
"use client"

import { useState } from "react";
import PropTypes from "prop-types";

const Sidebar = ({ activeComponent, setActiveComponent }) => {
  const [expandedSection, setExpandedSection] = useState("components");

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const components = [
    { id: "button", name: "Buttons", count: 3 },
    { id: "card", name: "Cards", count: 3 },
    { id: "dropdown", name: "Dropdowns", count: 2 },
    { id: "input", name: "Inputs", count: 2 },
    { id: "navbar", name: "Navbar", count: 1 },
    { id: "sidebar", name: "Sidebar", count: 1 },
    { id: "hero", name: "Hero", count: 1 },
  ];

  const handleComponentClick = (componentId) => {
    setActiveComponent(componentId);
  };

  return (
    <div className="w-64 lg:w-72 min-h-screen bg-[#f9fbff]/90 border-r border-[#e8f0f9] shadow-sm overflow-y-auto fixed lg:static z-20 backdrop-blur-sm">
      <div className="sticky top-0 bg-[#f9fbff]/95 z-10 p-4 border-b border-[#e8f0f9] backdrop-blur-md">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl">❄️</span>
          <h1 className="text-xl font-bold text-[#2c3e50]">SnowwUI</h1>
        </div>
        <div className="relative">
          <input
            type="search"
            placeholder="Search components"
            className="w-full px-3 py-2 pl-9 text-sm border border-[#e8f0f9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8ecae6]/50 bg-white/80 transition-all duration-200"
          />
          <svg
            className="absolute left-3 top-2.5 w-4 h-4 text-[#3a506b]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Getting Started Section */}
        <div>
          <button
            onClick={() => toggleSection("getting-started")}
            className="flex items-center justify-between w-full text-left px-3 py-2 text-sm font-medium text-[#2c3e50] hover:bg-[#e8f0f9] rounded-lg transition-colors duration-200"
            aria-label="Toggle Getting Started section"
          >
            <span>Getting Started</span>
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${expandedSection === "getting-started" ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          {expandedSection === "getting-started" && (
            <div className="mt-2 ml-4 pl-2 border-l border-[#e8f0f9]">
              <button
                className="w-full text-left px-3 py-1.5 text-sm text-[#3a506b] hover:bg-[#e8f0f9] rounded-lg transition-colors duration-200"
                aria-label="Quick Start guide"
              >
                Quick Start
              </button>
            </div>
          )}
        </div>

        {/* Components Section */}
        <div>
          <button
            onClick={() => toggleSection("components")}
            className="flex items-center justify-between w-full text-left px-3 py-2 text-sm font-medium text-[#2c3e50] hover:bg-[#e8f0f9] rounded-lg transition-colors duration-200"
            aria-label="Toggle Components section"
          >
            <span>Components</span>
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${expandedSection === "components" ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          {expandedSection === "components" && (
            <div className="mt-2 ml-4 pl-2 border-l border-[#e8f0f9]">
              {components.map((component) => (
                <button
                  key={component.id}
                  onClick={() => handleComponentClick(component.id)}
                  className={`w-full text-left px-3 py-1.5 text-sm flex justify-between items-center rounded-lg transition-colors duration-200 ${
                    activeComponent === component.id
                      ? "bg-[#8ecae6]/80 text-[#2c3e50] font-medium"
                      : "text-[#3a506b] hover:bg-[#e8f0f9]"
                  }`}
                  aria-current={activeComponent === component.id ? "true" : "false"}
                  aria-label={`Select ${component.name} component`}
                >
                  <span>{component.name}</span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      activeComponent === component.id
                        ? "bg-white text-[#2c3e50]"
                        : "bg-[#e8f0f9] text-[#3a506b]"
                    }`}
                  >
                    {component.count}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  activeComponent: PropTypes.string.isRequired,
  setActiveComponent: PropTypes.func.isRequired,
};

export default Sidebar;