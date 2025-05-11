"use client"

import { useState } from "react"

const Sidebar = ({ activeComponent, setActiveComponent }) => {
  const [expandedSection, setExpandedSection] = useState("components")

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  const components = [
    { id: "button", name: "Buttons", count: 3 },
    { id: "card", name: "Cards", count: 3 },
    { id: "dropdown", name: "Dropdowns", count: 2 },
    { id: "input", name: "Inputs", count: 2 },
    { id: "hero", name: "Hero", count: 1 },
  ]

  const handleComponentClick = (componentId) => {
    setActiveComponent(componentId)
  }

  return (
    <div className="w-64 min-h-screen bg-[#f9f9f9]/90 border-r border-[#e0e9f5] shadow-sm overflow-y-auto backdrop-blur-sm">
      <div className="sticky top-0 bg-[#f9f9f9]/95 z-10 p-4 border-b border-[#e0e9f5] backdrop-blur-md">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl">❄️</span>
          <h1 className="text-xl font-bold text-[#2c3e50]">SnowwUI</h1>
        </div>
        <div className="relative">
          <input
            type="search"
            placeholder="Search components"
            className="w-full px-3 py-2 pl-9 text-sm border border-[#e0e9f5] rounded-md focus:outline-none focus:ring-2 focus:ring-[#8ecae6]/50 bg-white/80 transition-all duration-200"
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

      <div className="p-4 space-y-6">
        {/* Getting Started Section */}
        <div>
          <button
            onClick={() => toggleSection("getting-started")}
            className="w-full text-left px-2 py-1.5 text-sm font-medium text-[#2c3e50] relative after:absolute after:w-0 after:h-[1px] after:bg-[#8ecae6] after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
            aria-label="Toggle Getting Started section"
          >
            <span>Getting Started</span>
            <svg
              className={`w-4 h-4 inline-block ml-2 transition-transform ${expandedSection === "getting-started" ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          {expandedSection === "getting-started" && (
            <div className="mt-2 ml-4 pl-2 border-l border-[#e0e9f5]">
              <button
                className="w-full text-left px-2 py-1.5 text-sm text-[#3a506b] relative after:absolute after:w-0 after:h-[1px] after:bg-[#8ecae6] after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
                aria-label="Quick Start guide"
              >
                Quick Start
              </button>
            </div>
          )}
        </div>

        {/* SnowwKit Section */}
        <div>
          <button
            onClick={() => toggleSection("snowwkit")}
            className="w-full text-left px-2 py-1.5 text-sm font-medium text-[#2c3e50] relative after:absolute after:w-0 after:h-[1px] after:bg-[#8ecae6] after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
            aria-label="Toggle SnowwKit section"
          >
            <span>SnowwKit</span>
            <svg
              className={`w-4 h-4 inline-block ml-2 transition-transform ${expandedSection === "snowwkit" ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          {expandedSection === "snowwkit" && (
            <div className="mt-2 ml-4 pl-2 border-l border-[#e0e9f5]">
              <button
                className="w-full text-left px-2 py-1.5 text-sm text-[#3a506b] relative after:absolute after:w-0 after:h-[1px] after:bg-[#8ecae6] after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
                aria-label="Gradients"
              >
                Gradients
              </button>
              <button
                className="w-full text-left px-2 py-1.5 text-sm text-[#3a506b] relative after:absolute after:w-0 after:h-[1px] after:bg-[#8ecae6] after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
                aria-label="Animated Gradients"
              >
                Animated Gradients
              </button>
              <button
                className="w-full text-left px-2 py-1.5 text-sm text-[#3a506b] relative after:absolute after:w-0 after:h-[1px] after:bg-[#8ecae6] after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
                aria-label="Text Gradients"
              >
                Text Gradients
              </button>
            </div>
          )}
        </div>

        {/* Components Section */}
        <div>
          <button
            onClick={() => toggleSection("components")}
            className="w-full text-left px-2 py-1.5 text-sm font-medium text-[#2c3e50] relative after:absolute after:w-0 after:h-[1px] after:bg-[#8ecae6] after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
            aria-label="Toggle Components section"
          >
            <span>Components</span>
            <svg
              className={`w-4 h-4 inline-block ml-2 transition-transform ${expandedSection === "components" ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          {expandedSection === "components" && (
            <div className="mt-2 ml-4 pl-2 border-l border-[#e0e9f5]">
              {components.map((component) => (
                <button
                  key={component.id}
                  onClick={() => handleComponentClick(component.id)}
                  className={`w-full text-left px-2 py-1.5 text-sm flex justify-between items-center relative transition-colors ${
                    activeComponent === component.id
                      ? "text-[#2c3e50] font-medium after:w-full after:h-[1px] after:bg-[#8ecae6] after:bottom-0 after:left-0"
                      : "text-[#3a506b] hover:after:w-full after:w-0 after:h-[1px] after:bg-[#8ecae6] after:bottom-0 after:left-0"
                  } after:absolute after:transition-all after:duration-300`}
                  aria-current={activeComponent === component.id ? "true" : "false"}
                  aria-label={`Select ${component.name} component`}
                >
                  <span>{component.name}</span>
                  <span
                    className={`text-xs px-1.5 py-0.5 rounded-full ${
                      activeComponent === component.id
                        ? "bg-[#e8f0f9] text-[#2c3e50]"
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
  )
}

export default Sidebar