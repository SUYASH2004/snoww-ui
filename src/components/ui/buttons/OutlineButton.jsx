// OutlineButton.jsx
import React from 'react';

const OutlineButton = ({ children, ...props }) => {
  return (
    <button
      className="border-2 border-[#3498db] text-[#3498db] px-8 py-2 rounded-md hover:bg-[#ebf5fb] transition-all duration-300 transform hover:-translate-y-1 relative z-10"
      {...props}
    >
      {children}
    </button>
  );
};

export default OutlineButton;