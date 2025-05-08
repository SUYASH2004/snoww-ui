function ButtonDemo() {
    return (
      <div className="space-y-4 bg-white p-4 border rounded shadow-sm">
        <h3 className="text-lg font-semibold">Buttons</h3>
  
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Primary
        </button>
  
        <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition">
          Outline
        </button>
  
        <button className="bg-gray-300 text-gray-600 px-4 py-2 rounded cursor-not-allowed" disabled>
          Disabled
        </button>
      </div>
    );
  }
  
  export default ButtonDemo;
  