"use client";

import { useState } from "react";

// Preview Cards
import ButtonPreviewCard from "../components/ui/preview-cards/ButtonPreviewCard";
import CardPreviewCard from "../components/ui/preview-cards/CardPreviewCard";
import InputPreviewCard from "../components/ui/preview-cards/InputPreviewCard";
import DropdownPreviewCard from "../components/ui/preview-cards/DropdownPreviewCard";
import HeroPreviewCard from "../components/ui/preview-cards/HeroPreviewCard";

// Button Components
import PrimaryButton from "../components/ui/buttons/PrimaryButton";
import OutlineButton from "../components/ui/buttons/OutlineButton";
import IconButton from "../components/ui/buttons/IconButton";

// Input Components
import StandardInput from "../components/ui/inputs/StandardInput";
import SearchInput from "../components/ui/inputs/SearchInput";

// Dropdown Components
import StandardDropdown from "../components/ui/dropdowns/StandardDropdown";
import IconDropdown from "../components/ui/dropdowns/iconDropdown";

// Card Components
import SnowwCard from "../components/ui/cards/SnowwCard";
import ProfileCard from "../components/ui/cards/ProfileCard";
import ImageCard from "../components/ui/cards/ImageCard";

// Layout Components
import Hero from "../components/ui/layout/Hero";

function ComponentsPage() {
  const [activeComponent, setActiveComponent] = useState("button");

  // Code snippets for each component
  const primaryButtonCode = `<button 
  className="bg-gradient-to-r from-[#3498db] to-[#2980b9] text-white px-8 py-2 rounded-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
>
  Primary Button
</button>`;

  const outlineButtonCode = `<button 
  className="border-2 border-[#3498db] text-[#3498db] px-8 py-2 rounded-md hover:bg-[#ebf5fb] transition-all duration-300 transform hover:-translate-y-1"
>
  Outline Button
</button>`;

  const iconButtonCode = `<button 
  className="bg-gradient-to-r from-[#b0d7f5] to-[#90c7f5] text-[#2c3e50] px-6 py-2 rounded-md flex items-center gap-2 hover:from-[#3a506b] hover:to-[#2c3e50] hover:text-white transition-all duration-300 transform hover:-translate-y-1"
>
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
  Icon Button
</button>`;

  const standardInputCode = `import { useState } from "react"

const StandardInput = ({ label, placeholder, type = "text", onChange }) => {
  const [value, setValue] = useState("")

  const handleChange = (e) => {
    setValue(e.target.value)
    if (onChange) {
      onChange(e.target.value)
    }
  }

  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-200 focus:outline-none transition"
      />
    </div>
  )
}`;

  const searchInputCode = `import { useState } from "react"

const SearchInput = ({ placeholder = "Search...", onSearch }) => {
  const [value, setValue] = useState("")

  const handleChange = (e) => {
    setValue(e.target.value)
    if (onSearch) {
      onSearch(e.target.value)
    }
  }

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
      <input
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-200 focus:outline-none transition"
      />
    </div>
  )
}`;

  const standardDropdownCode = `<div className="relative w-64">
  <button
    className="w-full px-4 py-3 bg-[#4B2E2B] text-white rounded-lg flex items-center justify-between hover:bg-[#3C241F] transition-colors duration-200 shadow-md"
  >
    <span>Select option</span>
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </button>
</div>`;

  const iconDropdownCode = `<div className="relative w-64">
  <button
    className="w-full px-4 py-3 bg-[#b0d7f5] text-[#2c3e50] rounded-lg flex items-center justify-between hover:bg-[#3a506b] hover:text-white transition-colors duration-200 shadow-md"
  >
    <div className="flex items-center gap-2">
      <span className="text-lg">📋</span>
      <span>Select option</span>
    </div>
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </button>
</div>`;

  const snowwCardCode = `<div className="snoww-card frost-glide bg-[#f9fbff]/70 border border-[#e8f0f9] p-6 text-[#2c3e50] hover:shadow-xl transition-all duration-300 relative overflow-hidden rounded-xl backdrop-blur-md">
  {/* Frosted blur effect */}
  <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#e8f0f9] opacity-30 rounded-full blur-2xl"></div>
  
  <div className="relative z-10">
    <h3 className="text-xl font-bold mb-2">Card Title</h3>
    <p className="text-sm text-[#3a506b]">Card description text goes here.</p>
  </div>
</div>`;

  const profileCardCode = `<div className="snoww-card bg-gradient-to-b from-[#f9fbff] to-[#e8f0f9] border border-[#e0e9f5] p-6 text-center relative overflow-hidden">
  {/* Frost corner effect */}
  <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#d8e8f7] opacity-50 rounded-full blur-xl"></div>
  
  <div className="relative z-10">
    <div className="relative mx-auto w-24 h-24 mb-4">
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#d8e8f7] to-white blur-sm"></div>
      <img 
        src="https://placehold.co/96x96" 
        alt="Profile" 
        className="relative w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
      />
    </div>
    
    <h3 className="text-xl font-bold mt-2 text-[#2c3e50]">User Name</h3>
    <p className="text-sm text-[#3a506b]">User Title</p>
    
    <div className="mt-5 flex justify-center gap-4">
      <button className="bg-[#b0d7f5] text-[#2c3e50] px-4 py-2 rounded-lg text-sm hover:bg-[#3a506b] hover:text-white transition">
        Add Friend
      </button>
      <button className="bg-[#e8f0f9] text-[#2c3e50] px-4 py-2 rounded-lg text-sm hover:bg-[#3a506b] hover:text-white transition">
        Message
      </button>
    </div>
  </div>
</div>`;

  const imageCardCode = `<div className="snoww-card max-w-sm overflow-hidden border border-[#e8f0f9] bg-[#f9fbff] relative">
  <div className="h-48 relative overflow-hidden">
    <img 
      src="https://placehold.co/400x250" 
      alt="Image" 
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#3a506b]/20"></div>
  </div>
  
  <div className="p-5 bg-[#f9fbff] relative">
    <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#e8f0f9] opacity-50 rounded-full blur-xl"></div>
    
    <div className="relative z-10">
      <time className="block text-xs text-[#3a506b] mb-1 text-right">
        {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
      </time>
      <h3 className="text-lg font-bold text-[#2c3e50] text-center">Card Title</h3>
      <p className="mt-2 text-sm text-[#3a506b] text-center">Card description goes here.</p>
    </div>
  </div>
</div>`;

  const heroCode = `import React from "react";

const Hero = () => {
  return (
    <section className="relative pt-32 md:pt-40 pb-20 px-5 text-center font-[Quicksand,sans-serif] text-[#2c3e50] overflow-hidden">
      <div
        className="absolute bg-[#8ecae6] opacity-5 rounded-full blur-3xl -z-10"
        style={{ width: "300px", height: "300px", top: "30%", left: "10%" }}
      ></div>
      <div
        className="absolute bg-[#8ecae6] opacity-5 rounded-full blur-3xl -z-10"
        style={{ width: "200px", height: "200px", top: "20%", right: "15%" }}
      ></div>
      <div
        className="absolute bg-[#8ecae6] opacity-5 rounded-full blur-3xl -z-10"
        style={{ width: "250px", height: "250px", bottom: "10%", left: "30%" }}
      ></div>
      
      <div className="max-w-[800px] mx-auto relative z-10 animate-[fadeUp_1s_ease-out_forwards]">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Design Frosty Interfaces with <span className="text-[#8ecae6]">❄️ SnowwUi</span>
        </h1>
        <p className="text-lg md:text-xl text-[#3a506b] mb-12 max-w-[600px] mx-auto">
          A minimal and modern UI component library built with simplicity and snow effects. 
          Elevate your design game effortlessly.
        </p>
        <div className="flex justify-center flex-wrap gap-4 md:gap-6">
          <a href="/docs" className="no-underline">
            <button className="py-3 px-8 bg-[#8ecae6] text-[#2c3e50] font-semibold rounded-lg cursor-pointer transition-all duration-300 hover:bg-[#b0d7f5] hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(142,202,230,0.3)]">
              Get Started
            </button>
          </a>
          <a href="/components" className="no-underline">
            <button className="py-3 px-8 bg-white border-2 border-[#8ecae6] text-[#2c3e50] font-semibold rounded-lg cursor-pointer transition-all duration-300 hover:bg-[#f0f8ff] hover:border-[#64b5e6] hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(142,202,230,0.3)]">
              Browse Components
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;`;

  // Component selection buttons
  const components = [
    { id: "button", name: "Buttons" },
    { id: "input", name: "Inputs" },
    { id: "dropdown", name: "Dropdowns" },
    { id: "card", name: "Cards" },
    { id: "hero", name: "Hero" },
  ];

  // Component mapping for scalability
  const componentMap = {
    button: (
      <div className="space-y-8">
        <ButtonPreviewCard
          title="Primary Button"
          codeSnippet={primaryButtonCode}
          description="A gradient primary button with hover effects."
        >
          <div className="flex justify-center py-10">
            <PrimaryButton>Primary Button</PrimaryButton>
          </div>
        </ButtonPreviewCard>

        <ButtonPreviewCard
          title="Outline Button"
          codeSnippet={outlineButtonCode}
          description="A minimalist outline button with hover feedback."
        >
          <div className="flex justify-center py-10">
            <OutlineButton>Outline Button</OutlineButton>
          </div>
        </ButtonPreviewCard>

        <ButtonPreviewCard
          title="Icon Button"
          codeSnippet={iconButtonCode}
          description="A button with an icon and text, with color transition on hover."
        >
          <div className="flex justify-center py-10">
            <IconButton>Icon Button</IconButton>
          </div>
        </ButtonPreviewCard>
      </div>
    ),
    input: (
      <div className="space-y-8">
        <InputPreviewCard
          title="Standard Input"
          codeSnippet={standardInputCode}
          description="A clean standard input field with focus effect."
        >
          <div className="flex justify-center py-10">
            <div className="w-64">
              <StandardInput label="Username" placeholder="Enter username" />
            </div>
          </div>
        </InputPreviewCard>

        <InputPreviewCard
          title="Search Input"
          codeSnippet={searchInputCode}
          description="A search input with icon and focus effect."
        >
          <div className="flex justify-center py-10">
            <div className="w-64">
              <SearchInput placeholder="Search components..." />
            </div>
          </div>
        </InputPreviewCard>
      </div>
    ),
    dropdown: (
      <div className="space-y-8">
        <DropdownPreviewCard
          title="Standard Dropdown"
          codeSnippet={standardDropdownCode}
          description="A clean dropdown with hover effect."
        >
          <div className="flex justify-center py-10">
            <StandardDropdown />
          </div>
        </DropdownPreviewCard>

        <DropdownPreviewCard
          title="Icon Dropdown"
          codeSnippet={iconDropdownCode}
          description="A dropdown with an icon and hover effect."
        >
          <div className="flex justify-center py-10">
            <IconDropdown />
          </div>
        </DropdownPreviewCard>
      </div>
    ),
    card: (
      <div className="space-y-8">
        <CardPreviewCard
          title="Snoww Card"
          codeSnippet={snowwCardCode}
          description="A frosted glass effect card with hover animation."
        >
          <div className="flex justify-center py-10">
            <div className="w-64">
              <SnowwCard />
            </div>
          </div>
        </CardPreviewCard>

        <CardPreviewCard
          title="Profile Card"
          codeSnippet={profileCardCode}
          description="A user profile card with frost effects."
        >
          <div className="flex justify-center py-10">
            <div className="w-64">
              <ProfileCard />
            </div>
          </div>
        </CardPreviewCard>

        <CardPreviewCard
          title="Image Card"
          codeSnippet={imageCardCode}
          description="A card with image and frost overlay."
        >
          <div className="flex justify-center py-10">
            <div className="w-64">
              <ImageCard />
            </div>
          </div>
        </CardPreviewCard>
      </div>
    ),
    hero: (
      <HeroPreviewCard
        title="Hero Section"
        codeSnippet={heroCode}
        description="A hero section with frost circles and animated content."
      >
        <Hero />
      </HeroPreviewCard>
    ),
    default: (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-[#3a506b]">
          Select a component above
        </h2>
      </div>
    ),
  };

  const renderComponentContent = () => {
    return componentMap[activeComponent] || componentMap.default;
  };

  return (
    <div className="p-6 bg-[#f9f9f9]">
      <h2 className="text-2xl font-bold text-[#2c3e50] mb-6">Components</h2>
      <div className="flex flex-wrap gap-2 mb-6">
        {components.map((component) => (
          <button
            key={component.id}
            onClick={() => setActiveComponent(component.id)}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
              activeComponent === component.id
                ? "bg-[#8ecae6] text-[#2c3e50] shadow-md"
                : "bg-[#f9fbff]/80 text-[#3a506b] hover:bg-[#e8f0f9] hover:shadow-sm"
            } backdrop-blur-sm`}
            aria-current={activeComponent === component.id ? "true" : "false"}
            aria-label={`Select ${component.name} component`}
          >
            {component.name}
          </button>
        ))}
      </div>
      {renderComponentContent()}
    </div>
  );
}

export default ComponentsPage;