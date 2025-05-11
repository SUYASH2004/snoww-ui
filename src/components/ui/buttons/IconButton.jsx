"use client"

const IconButton = ({ icon, children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-gradient-to-r from-[#b0d7f5] to-[#90c7f5] text-[#2c3e50] px-6 py-2 rounded-md flex items-center gap-2 hover:from-[#3a506b] hover:to-[#2c3e50] hover:text-white transition-all duration-300 transform hover:-translate-y-1 ${className}`}
    >
      {icon && <span className="w-5 h-5">{icon}</span>}
      {children || "Icon Button"}
    </button>
  )
}

export default IconButton
