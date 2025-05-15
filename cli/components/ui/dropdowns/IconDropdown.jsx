"use client"

import { useState } from "react"

const IconDropdown = ({ options = ["Documents", "Images", "Videos", "Music"] }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState("Select option")

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleSelect = (option) => {
    setSelected(option)
    setIsOpen(false)
  }

  // Icons mapping
  const icons = {
    Documents: "📋",
    Images: "🖼️",
    Videos: "🎬",
    Music: "🎵",
    "Select option": "📋",
  }

  return (
    <div className="relative w-64" style={{ zIndex: 30 }}>
      <button
        onClick={toggleDropdown}
        className="w-full px-4 py-3 bg-[#b0d7f5] text-[#2c3e50] rounded-lg flex items-center justify-between hover:bg-[#3a506b] hover:text-white transition-colors duration-200 shadow-md"
        style={{ position: "relative", zIndex: 30 }}
      >
        <div className="flex items-center gap-2">
          <span className="text-lg">{icons[selected] || "📋"}</span>
          <span>{selected}</span>
        </div>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-40">
          {options.map((option, index) => (
            <div
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer first:rounded-t-lg last:rounded-b-lg flex items-center gap-2"
              onClick={() => handleSelect(option)}
              style={{ position: "relative", zIndex: 40 }}
            >
              <span className="text-lg">{icons[option] || "📋"}</span>
              <span>{option}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default IconDropdown
