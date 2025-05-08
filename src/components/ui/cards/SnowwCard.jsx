import React from "react";

const SnowwCard = ({ title, description }) => {
  return (
    <div className="snoww-card bg-[#f9fbff] border border-[#e8f0f9] p-6 text-[#2c3e50] hover:shadow-lg transition duration-300 relative overflow-hidden">
      {/* Frost effect in corner */}
      <div className="absolute -top-10 -left-10 w-24 h-24 bg-[#e8f0f9] opacity-50 rounded-full blur-xl"></div>
      
      <div className="relative z-10">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-[#3a506b]">{description}</p>
      </div>
    </div>
  );
};

export default SnowwCard;