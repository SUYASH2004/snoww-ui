"use client"

const OutlineButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition"
    >
      {children || "Outline Button"}
    </button>
  )
}

export default OutlineButton
