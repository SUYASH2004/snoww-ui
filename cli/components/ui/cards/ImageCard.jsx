import React from "react";

const ImageCard = ({ imageUrl, date, title, description }) => {
  // Handle invalid date gracefully
  const formatDate = (dateString) => {
    if (!dateString) return "";
    
    try {
      return new Date(dateString).toLocaleDateString();
    } catch (e) {
      return ""; // Return empty string if date is invalid
    }
  };

  return (
    <div className="snoww-card max-w-sm overflow-hidden border border-[#e8f0f9] bg-[#f9fbff] relative">
      {/* Background image */}
      <div className="h-48 relative overflow-hidden">
        <img 
          src={imageUrl || "/api/placeholder/400/250"} 
          alt={title || "Image"} 
          className="w-full h-full object-cover"
        />
        {/* Snow overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#3a506b]/20"></div>
      </div>
      
      {/* Content area */}
      <div className="p-5 bg-[#f9fbff] relative">
        {/* Frost corner effect */}
        <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#e8f0f9] opacity-50 rounded-full blur-xl"></div>
        
        <div className="relative z-10">
          {date && (
            <time className="block text-xs text-[#3a506b] mb-1 text-right">
              {formatDate(date)}
            </time>
          )}
          <h3 className="text-lg font-bold text-[#2c3e50] text-center">{title || "Card Title"}</h3>
          <p className="mt-2 text-sm text-[#3a506b] text-center">{description || "Card description goes here."}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;

