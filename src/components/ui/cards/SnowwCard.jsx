import React from "react";

const SnowwCard = ({ title, description }) => {
  return (
    <div className="snoww-card frost-glide bg-[#f9fbff]/70 border border-[#e8f0f9] p-6 text-[#2c3e50] hover:shadow-xl transition-all duration-300 relative overflow-hidden rounded-xl backdrop-blur-md">
      {/* Frosted blur effect */}
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#e8f0f9] opacity-30 rounded-full blur-2xl"></div>
      
      <div className="relative z-10">
        <h3 className="text-xl font-bold mb-2">{title || "Snoww Card Title"}</h3>
        <p className="text-sm text-[#3a506b]">
          {description || 
            "Discover the elegance of SnowwUI with this frosted glass card. Perfect for showcasing content with a modern, minimalistic design. Its subtle animations and smooth transitions enhance user experience. Ideal for dashboards, profiles, or feature highlights. Embrace the snowy aesthetic today!"}
        </p>
      </div>
    </div>
  );
};

export default SnowwCard;