"use client"

const IconButton = ({ icon, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#b0d7f5] text-[#2c3e50] px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#3a506b] hover:text-white transition"
    >
      {icon && <span className="w-5 h-5">{icon}</span>}
      {children || "Icon Button"}
    </button>
  )
}

export default IconButton
