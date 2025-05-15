"use client"

const PrimaryButton = ({ children, onClick, className = "", ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-gradient-to-r from-[#3498db] to-[#2980b9] text-white px-8 py-2 rounded-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${className}`}
      style={{ position: "relative", zIndex: 20 }}
      {...props}
    >
      {children}
    </button>
  )
}

export default PrimaryButton
