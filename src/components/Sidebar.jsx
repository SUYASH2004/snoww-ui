"use client"

const Sidebar = ({ activeComponent, setActiveComponent }) => {
  const components = [
    { id: "button", name: "Buttons", count: 3 },
    { id: "card", name: "Cards", count: 3 },
    { id: "dropdown", name: "Dropdowns", count: 2 },
    { id: "input", name: "Inputs", count: 2 },
  ]

  const handleComponentClick = (componentId) => {
    setActiveComponent(componentId)
  }

  return (
    <div className="w-64 min-h-screen bg-[#f0f8ff] border-r border-[#e0e9f5] p-4 shadow-sm">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#2c3e50]">Snoww UI</h1>
        <p className="text-sm text-[#3a506b]">Component Library</p>
      </div>

      <div className="space-y-1">
        <h2 className="text-xs uppercase tracking-wider text-[#3a506b] font-semibold mb-2">Components</h2>

        {components.map((component) => (
          <button
            key={component.id}
            onClick={() => handleComponentClick(component.id)}
            className={`w-full text-left px-4 py-2 rounded-lg transition-colors flex justify-between items-center ${
              activeComponent === component.id
                ? "bg-[#b0d7f5] text-[#2c3e50] font-medium"
                : "text-[#3a506b] hover:bg-[#e8f0f9]"
            }`}
          >
            <span>{component.name}</span>
            <span className="bg-[#e8f0f9] text-[#3a506b] text-xs px-2 py-1 rounded-full">{component.count}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
