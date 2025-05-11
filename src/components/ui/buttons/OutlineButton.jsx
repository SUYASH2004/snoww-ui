"use client"

const OutlineButton = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`border-2 border-[#3498db] text-[#3498db] px-8 py-2 rounded-md hover:bg-[#ebf5fb] transition-all duration-300 transform hover:-translate-y-1 ${className}`}
    >
      {children || "Outline Button"}
    </button>
  )
}

export default OutlineButton
