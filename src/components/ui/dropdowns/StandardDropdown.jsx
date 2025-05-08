"use client"

import { useState, useRef, useEffect } from "react"
import { createPortal } from "react-dom"

const StandardDropdown = ({
  options = ["Option 1", "Option 2", "Option 3", "Option 4"],
  width = "w-64",
  radius = "0.5rem",
  theme = "snow",
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState("Select option")
  const [mounted, setMounted] = useState(false)
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0, width: 0 })
  
  const buttonRef = useRef(null)
  const dropdownRef = useRef(null)

  // Handle portal mounting
  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        buttonRef.current && 
        !buttonRef.current.contains(event.target) && 
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false)
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])
  
  // Update dropdown position when it opens
  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()
      setDropdownPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width
      })
    }
  }, [isOpen])

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleSelect = (option) => {
    setSelected(option)
    setIsOpen(false)
  }

  return (
    <div className={`${width} ${theme}`}>
      <button
        ref={buttonRef}
        onClick={toggleDropdown}
        className={`w-full px-4 py-3 bg-[#4B2E2B] text-white rounded-${radius} flex items-center justify-between hover:bg-[#3C241F] transition-colors duration-200 shadow-md font-quicksand`}
        type="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span>{selected}</span>
        <svg
          className={`w-5 h-5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {mounted && isOpen && createPortal(
        <div 
          ref={dropdownRef}
          className="fixed bg-white border border-[#D7C2B4] rounded-lg shadow-xl z-[9999] overflow-hidden"
          style={{
            top: `${dropdownPosition.top}px`,
            left: `${dropdownPosition.left}px`,
            width: `${dropdownPosition.width}px`,
            maxHeight: '200px',
            overflowY: 'auto'
          }}
        >
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-50 text-[#4B2E2B] first:rounded-t-lg last:rounded-b-lg transition-colors font-quicksand"
            >
              {option}
            </div>
          ))}
        </div>,
        document.body
      )}
    </div>
  )
}

export default StandardDropdown