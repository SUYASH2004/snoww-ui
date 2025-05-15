// PrimaryButton.jsx
import React from 'react';

const PrimaryButton = ({ children, ...props }) => {
  return (
    <button
      className="bg-gradient-to-r from-[#3498db] to-[#2980b9] text-white px-8 py-2 rounded-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 relative z-10"
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;