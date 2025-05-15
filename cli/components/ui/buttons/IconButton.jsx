"use client"

const IconButton = ({ children, onClick, className = "", ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-gradient-to-r from-[#b0d7f5] to-[#90c7f5] text-[#2c3e50] px-6 py-2 rounded-md flex items-center gap-2 hover:from-[#3a506b] hover:to-[#2c3e50] hover:text-white transition-all duration-300 transform hover:-translate-y-1 ${className}`}
      style={{ position: "relative", zIndex: 20 }}
      {...props}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      {children}
    </button>
  )
}

export default IconButton
