const StandardInput = ({ label, placeholder, type = "text" }) => {
    return (
      <div className="flex flex-col gap-2">
        {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
        <input
          type={type}
          placeholder={placeholder}
          className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-200 focus:outline-none transition"
        />
      </div>
    )
  }
  
  export default StandardInput
  