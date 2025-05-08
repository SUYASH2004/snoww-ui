
// In your CardContainer.jsx
import React from "react";
import SnowwCard from "./cards/SnowwCard";
import ProfileCard from "./cards/ProfileCard";
import ImageCard from "./cards/ImageCard";
import GrandCard from "./GrandCard"; // <-- CORRECTED IMPORT PATH

const CardContainer = () => {
  // Code snippets for each component
  const snowwCardCode = `<SnowwCard
  title="Simple Snoww Card"
  description="This is a minimal Snoww themed card for UI components."
/>`;

  const profileCardCode = `<ProfileCard
  name="Alex Frost"
  subtitle="Winter Explorer"
  image="/api/placeholder/150/150" 
/>`;

  const imageCardCode = `<ImageCard
  imageUrl="/api/placeholder/400/300"
  date="2025-05-04"
  title="Winter Wonderland"
  description="Discover the beauty of snow-covered landscapes in this stunning alpine region."
/>`;

  return (
    <div className="p-8 bg-[#F0F8FF] min-h-screen space-y-10">
      <h1 className="text-3xl font-bold text-[#2c3e50] text-center mb-6">Snoww Cards Showcase</h1>
      
      <div className="space-y-10">
        {/* Snoww Card Showcase */}
        <GrandCard title="Simple Snoww Card" codeSnippet={snowwCardCode}>
          <SnowwCard
            title="Simple Snoww Card"
            description="This is a minimal Snoww themed card for UI components."
          />
        </GrandCard>

        {/* Profile Card Showcase */}
        <GrandCard title="Profile Card" codeSnippet={profileCardCode}>
          <ProfileCard
            name="Alex Frost"
            subtitle="Winter Explorer"
            image="/api/placeholder/150/150" 
          />
        </GrandCard>

        {/* Image Card Showcase */}
        <GrandCard title="Image Card" codeSnippet={imageCardCode}>
          <ImageCard
            imageUrl="/api/placeholder/400/300"
            date="2025-05-04"
            title="Winter Wonderland"
            description="Discover the beauty of snow-covered landscapes in this stunning alpine region."
          />
        </GrandCard>
      </div>
    </div>
  );
};

export default CardContainer;