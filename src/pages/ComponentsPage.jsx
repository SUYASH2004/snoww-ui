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
import IconDropdown from "../components/ui/dropdowns/IconDropdown";

// Card Components
import SnowwCard from "../components/ui/cards/SnowwCard";
import ProfileCard from "../components/ui/cards/ProfileCard";
import SpotlightCard from "../components/ui/cards/SpotlightCard";

// Layout Components
import Hero from "../components/ui/layout/Hero";

function ComponentsPage() {
  const [activeComponent, setActiveComponent] = useState("button");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Components data for sidebar
  const components = [
    {
      id: "button",
      name: "Buttons",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
          ></path>
        </svg>
      ),
    },
    {
      id: "input",
      name: "Inputs",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          ></path>
        </svg>
      ),
    },
    {
      id: "dropdown",
      name: "Dropdowns",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      ),
    },
    {
      id: "card",
      name: "Cards",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z"
          ></path>
        </svg>
      ),
    },
    {
      id: "hero",
      name: "Hero",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          ></path>
        </svg>
      ),
    },
  ];

  // Updated code snippets using SnowwUI theme
  const primaryButtonCode = `<button 
  className="snoww-button"
>
  Primary Button
</button>`;

  const outlineButtonCode = `<button 
  className="snoww-button-outline"
>
  Outline Button
</button>`;

  const iconButtonCode = `<button 
  className="snoww-button flex items-center gap-2"
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
      {label && <label className="text-sm font-medium text-[var(--snoww-text-light)]">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="px-4 py-2 border border-[var(--snoww-border)] rounded-md focus:ring-2 focus:ring-[var(--snoww-primary)] focus:outline-none transition bg-[var(--snoww-light)] text-[var(--snoww-text)]"
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
          className="w-4 h-4 text-[var(--snoww-text-light)]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
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
        className="pl-10 pr-4 py-2 w-full border border-[var(--snoww-border)] rounded-md focus:ring-2 focus:ring-[var(--snoww-primary)] focus:outline-none transition bg-[var(--snoww-light)] text-[var(--snoww-text)]"
      />
    </div>
  )
}`;

  const standardDropdownCode = `<div className="relative w-64">
  <button
    className="snoww-button w-full flex items-center justify-between"
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
    className="snoww-button w-full flex items-center justify-between"
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
  <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#e8f0f9] opacity-30 rounded-full blur-2xl"></div>
  
  <div className="relative z-10">
    <h3 className="text-xl font-bold mb-2">Card Title</h3>
    <p className="text-sm text-[var(--snoww-text-light)]">Discover the elegance of SnowwUI with this frosted glass card. Perfect for showcasing content with a modern, minimalistic design. Its subtle animations and smooth transitions enhance user experience. Ideal for dashboards, profiles, or feature highlights. Embrace the snowy aesthetic today!</p>
  </div>
</div>`;

  const profileCardCode = `<div className="snoww-card bg-gradient-to-b from-[#f9fbff] to-[#e8f0f9] border border-[#e0e9f5] p-6 text-center relative overflow-hidden">
  <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#d8e8f7] opacity-50 rounded-full blur-xl"></div>
  
  <div className="relative z-10">
    <div className="relative mx-auto w-24 h-24 mb-4">
      <div className="absolute inset-0 rounded-full bg-[var(--snoww-light)] blur-sm"></div>
      <img 
        src="https://placehold.co/96x96" 
        alt="Profile" 
        className="relative w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
      />
    </div>
    
    <h3 className="text-xl font-bold mt-2 text-[var(--snoww-text)]">User Name</h3>
    <p className="text-sm text-[var(--snoww-text-light)]">User Title</p>
    
    <div className="mt-5 flex justify-center gap-4">
      <button className="snoww-button text-sm">
        Add Friend
      </button>
      <button className="snoww-button-outline text-sm">
        Message
      </button>
    </div>
  </div>
</div>`;

  const spotlightCardCode = `import React, { useRef, useState } from 'react';

const SpotlightCard = ({ 
  children, 
  color = "rgba(255, 255, 255, 0.1)", 
  size = 300,
  className = ""
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div className="rounded-3xl border border-[var(--snoww-border)] bg-[var(--snoww-bg)]/[.012] p-2">
      <div
        ref={cardRef}
        className={\`relative transform-gpu overflow-hidden rounded-2xl border border-[var(--snoww-border)] bg-[var(--snoww-bg)]/[.012] shadow-sm \${className}\`}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="absolute inset-0 transition-opacity duration-300 pointer-events-none z-[-10]"
          style={{
            opacity: isHovering ? 1 : 0,
            backgroundImage: \`radial-gradient(\${size}px circle at \${position.x}px \${position.y}px, \${color}, transparent)\`
          }}
        />
        
        <div className="relative z-20">
          {children || (
            <div className="p-6">
              <h3 className="text-xl font-bold text-[var(--snoww-text)] mb-2">Spotlight Card</h3>
              <p className="text-sm text-[var(--snoww-text-light)] mb-4">
                Experience the dynamic spotlight effect with this SnowwUI card. It follows your cursor for an interactive feel. Perfect for highlighting key features or content. The frosty aesthetic adds a modern touch. Use it to captivate your users effortlessly.
              </p>
              <button className="snoww-button">
                Test Button
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpotlightCard;`;

  const heroCode = `import React from "react";

const Hero = () => {
  return (
    <section className="relative pt-32 md:pt-40 pb-20 px-5 text-center font-[Quicksand,sans-serif] text-[var(--snoww-text)] overflow-hidden">
      <div
        className="absolute bg-[var(--snoww-accent)] opacity-5 rounded-full blur-3xl -z-10"
        style={{ width: "300px", height: "300px", top: "30%", left: "10%" }}
      ></div>
      <div
        className="absolute bg-[var(--snoww-accent)] opacity-5 rounded-full blur-3xl -z-10"
        style={{ width: "200px", height: "200px", top: "20%", right: "15%" }}
      ></div>
      <div
        className="absolute bg-[var(--snoww-accent)] opacity-5 rounded-full blur-3xl -z-10"
        style={{ width: "250px", height: "250px", bottom: "10%", left: "30%" }}
      ></div>
      
      <div className="max-w-[800px] mx-auto relative z-10 animate-[fadeIn_0.6s_ease-out_forwards]">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Design Frosty Interfaces with <span className="text-[var(--snoww-primary)]">❄️ SnowwUi</span>
        </h1>
        <p className="text-lg md:text-xl text-[var(--snoww-text-light)] mb-12 max-w-[600px] mx-auto">
          A minimal and modern UI component library built with simplicity and snow effects. 
          Elevate your design game effortlessly.
        </p>
        <div className="flex justify-center flex-wrap gap-4 md:gap-6">
          <a href="/docs" className="no-underline">
            <button className="snoww-button">
              Get Started
            </button>
          </a>
          <a href="/components" className="no-underline">
            <button className="snoww-button-outline">
              Browse Components
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;`;

  // Component mapping updated to ensure SnowwUI theme
  const componentMap = {
    button: (
      <div className="space-y-8">
        <ButtonPreviewCard
          title="Primary Button"
          codeSnippet={primaryButtonCode}
          description="A primary button styled with SnowwUI's frosty aesthetic."
        >
          <div className="flex justify-center py-10 bg-[var(--snoww-bg)]">
            <PrimaryButton className="snoww-button">Primary Button</PrimaryButton>
          </div>
        </ButtonPreviewCard>

        <ButtonPreviewCard
          title="Outline Button"
          codeSnippet={outlineButtonCode}
          description="A minimalist outline button with SnowwUI's hover effects."
        >
          <div className="flex justify-center py-10 bg-[var(--snoww-bg)]">
            <OutlineButton className="snoww-button-outline">Outline Button</OutlineButton>
          </div>
        </ButtonPreviewCard>

        <ButtonPreviewCard
          title="Icon Button"
          codeSnippet={iconButtonCode}
          description="An icon button with SnowwUI's color transitions."
        >
          <div className="flex justify-center py-10 bg-[var(--snoww-bg)]">
            <IconButton className="snoww-button flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Icon Button
            </IconButton>
          </div>
        </ButtonPreviewCard>
      </div>
    ),
    input: (
      <div className="space-y-8">
        <InputPreviewCard
          title="Standard Input"
          codeSnippet={standardInputCode}
          description="A clean standard input field with SnowwUI's focus effect."
        >
          <div className="flex justify-center py-10 bg-[var(--snoww-bg)]">
            <div className="w-64">
              <StandardInput label="Username" placeholder="Enter username" />
            </div>
          </div>
        </InputPreviewCard>

        <InputPreviewCard
          title="Search Input"
          codeSnippet={searchInputCode}
          description="A search input with SnowwUI's icon and focus effect."
        >
          <div className="flex justify-center py-10 bg-[var(--snoww-bg)]">
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
          description="A clean dropdown styled with SnowwUI's hover effect."
        >
          <div className="flex justify-center py-10 bg-[var(--snoww-bg)]">
            <StandardDropdown />
          </div>
        </DropdownPreviewCard>

        <DropdownPreviewCard
          title="Icon Dropdown"
          codeSnippet={iconDropdownCode}
          description="A dropdown with an icon, styled with SnowwUI's hover effect."
        >
          <div className="flex justify-center py-10 bg-[var(--snoww-bg)]">
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
          description="A frosted glass effect card with SnowwUI's hover animation."
        >
          <div className="flex justify-center py-10 bg-[var(--snoww-bg)]">
            <div className="w-64">
              <SnowwCard />
            </div>
          </div>
        </CardPreviewCard>

        <CardPreviewCard
          title="Profile Card"
          codeSnippet={profileCardCode}
          description="A user profile card with SnowwUI's frost effects."
        >
          <div className="flex justify-center py-10 bg-[var(--snoww-bg)]">
            <div className="w-64">
              <ProfileCard />
            </div>
          </div>
        </CardPreviewCard>

        <CardPreviewCard
          title="Spotlight Card"
          codeSnippet={spotlightCardCode}
          description="A card with a dynamic spotlight effect, styled with SnowwUI's theme."
        >
          <div className="flex justify-center py-10 bg-[var(--snoww-bg)]">
            <div className="w-64">
              <SpotlightCard>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[var(--snoww-text)] mb-2">Spotlight Card</h3>
                  <p className="text-sm text-[var(--snoww-text-light)] mb-4">
                    Experience the dynamic spotlight effect with this SnowwUI card. It follows your cursor for an interactive feel. Perfect for highlighting key features or content. The frosty aesthetic adds a modern touch. Use it to captivate your users effortlessly.
                  </p>
                  <button className="snoww-button">
                    Test Button
                  </button>
                </div>
              </SpotlightCard>
            </div>
          </div>
        </CardPreviewCard>
      </div>
    ),
    hero: (
      <HeroPreviewCard
        title="Hero Section"
        codeSnippet={heroCode}
        description="A hero section with SnowwUI's frost circles and animated content."
      >
        <Hero />
      </HeroPreviewCard>
    ),
    default: (
      <div className="text-center py-20 bg-[var(--snoww-bg)]">
        <h2 className="text-2xl font-bold text-[var(--snoww-text-light)]">
          Select a component from the sidebar
        </h2>
      </div>
    ),
  };

  const renderComponentContent = () => {
    return componentMap[activeComponent] || componentMap.default;
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-[var(--snoww-bg)]">
      {/* Sidebar */}
      <div className={`relative transition-all duration-300 ${sidebarOpen ? "w-64" : "w-16"}`}>
        <div
          className={`fixed h-full bg-[var(--snoww-bg)] border-r border-[var(--snoww-border)] shadow-sm overflow-hidden transition-all duration-300 ${
            sidebarOpen ? "w-64" : "w-16"
          }`}
        >
          <div className="p-4 flex items-center justify-between border-b border-[var(--snoww-border)]">
            <div
              className={`flex items-center gap-3 transition-opacity duration-300 ${
                sidebarOpen ? "opacity-100" : "opacity-0"
              }`}
            >
              <span className="text-2xl">❄️</span>
              <h2 className="font-bold text-[var(--snoww-text)]">SnowwUI</h2>
            </div>
            <button
              onClick={toggleSidebar}
              aria-label={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
              className={`p-1 rounded-md hover:bg-[var(--snoww-accent)] transition-colors ${
                sidebarOpen ? "" : "absolute right-2"
              }`}
            >
              <svg
                className="w-5 h-5 text-[var(--snoww-text-light)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {sidebarOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                )}
              </svg>
            </button>
          </div>

          <div
            className={`px-4 py-3 transition-opacity duration-300 ${sidebarOpen ? " opacity-100" : "opacity-0"}`}
          >
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-[var(--snoww-text-light)]"
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
                placeholder="Search components..."
                className="pl-10 pr-4 py-2 w-full text-sm border border-[var(--snoww-border)] rounded-md focus:ring-2 focus:ring-[var(--snoww-primary)] focus:outline-none transition bg-[var(--snoww-light)] text-[var(--snoww-text)]"
              />
            </div>
          </div>

          <div className="py-4">
            <div
              className={`px-4 mb-2 text-xs font-medium uppercase text-[var(--snoww-text-light)] transition-opacity duration-300 ${
                sidebarOpen ? "opacity-100" : "opacity-0"
              }`}
            >
              Components
            </div>
            <nav>
              {components.map((component) => (
                <button
                  key={component.id}
                  onClick={() => setActiveComponent(component.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 transition-all duration-200 ${
                    activeComponent === component.id
                      ? "bg-[var(--snoww-accent)] text-[var(--snoww-text)]"
                      : "hover:bg-[var(--snoww-light)] text-[var(--snoww-text-light)]"
                  }`}
                  aria-current={activeComponent === component.id ? "page" : undefined}
                >
                  <div className={`${activeComponent === component.id ? "text-[var(--snoww-primary)]" : ""}`}>
                    {component.icon}
                  </div>
                  <span className={`transition-opacity duration-300 ${sidebarOpen ? "opacity-100" : "opacity-0"}`}>
                    {component.name}
                  </span>
                  {activeComponent === component.id && (
                    <div className="ml-auto w-1 h-6 bg-[var(--snoww-primary)] rounded-full"></div>
                  )}
                </button>
              ))}
            </nav>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-[var(--snoww-border)]">
            <div
              className={`flex items-center gap-3 transition-opacity duration-300 ${
                sidebarOpen ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="w-8 h-8 rounded-full bg-[var(--snoww-accent)] flex items-center justify-center">
                <span className="text-xs font-medium text-[var(--snoww-text-light)]">UI</span>
              </div>
              <div className="flex flex-col">
                <p className="text-sm font-medium text-[var(--snoww-text)]">SnowwUI Library</p>
                <p className="text-xs text-[var(--snoww-text-light)]">v1.0.0</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-auto bg-[var(--snoww-bg)]">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[var(--snoww-text)]">
              {components.find((c) => c.id === activeComponent)?.name || "Components"}
            </h2>
          </div>
          {renderComponentContent()}
        </div>
      </div>
    </div>
  );
}

export default ComponentsPage;