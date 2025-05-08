import React from "react";

const ProfileCard = ({ name, subtitle, image }) => {
  return (
    <div className="snoww-card bg-gradient-to-b from-[#f9fbff] to-[#e8f0f9] border border-[#e0e9f5] p-6 text-center relative overflow-hidden">
      {/* Frost corner effect */}
      <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#d8e8f7] opacity-50 rounded-full blur-xl"></div>
      
      <div className="relative z-10">
        <div className="relative mx-auto w-24 h-24 mb-4">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#d8e8f7] to-white blur-sm"></div>
          <img 
            src={image || "/api/placeholder/96/96"} 
            alt={name || "Profile"} 
            className="relative w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
          />
        </div>
        
        <h3 className="text-xl font-bold mt-2 text-[#2c3e50]">{name || "User Name"}</h3>
        <p className="text-sm text-[#3a506b]">{subtitle || "User Title"}</p>
        
        <div className="mt-5 flex justify-center gap-4">
          <button className="bg-[#b0d7f5] text-[#2c3e50] px-4 py-2 rounded-lg text-sm hover:bg-[#3a506b] hover:text-white transition">
            Add Friend
          </button>
          <button className="bg-[#e8f0f9] text-[#2c3e50] px-4 py-2 rounded-lg text-sm hover:bg-[#3a506b] hover:text-white transition">
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;