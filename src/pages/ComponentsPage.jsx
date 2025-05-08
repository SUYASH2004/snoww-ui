"use client"

import { useState } from "react"
import Sidebar from "../components/Sidebar"

// Preview Cards
import ButtonPreviewCard from "../components/ui/preview-cards/ButtonPreviewCard"
import CardPreviewCard from "../components/ui/preview-cards/CardPreviewCard"
import InputPreviewCard from "../components/ui/preview-cards/InputPreviewCard"
import DropdownPreviewCard from "../components/ui/preview-cards/DropdownPreviewCard"

// Button Components
import PrimaryButton from "../components/ui/buttons/PrimaryButton"
import OutlineButton from "../components/ui/buttons/OutlineButton"
import IconButton from "../components/ui/buttons/IconButton"

// Input Components
import StandardInput from "../components/ui/inputs/StandardInput"
import SearchInput from "../components/ui/inputs/SearchInput"

// Dropdown Components
import StandardDropdown from "../components/ui/dropdowns/StandardDropdown"
import IconDropdown from "../components/ui/dropdowns/IconDropdown"

// Card Components
import SnowwCard from "../components/ui/cards/SnowwCard"
import ProfileCard from "../components/ui/cards/ProfileCard"
import ImageCard from "../components/ui/cards/ImageCard"

function ComponentsPage() {
  const [activeComponent, setActiveComponent] = useState("button")

  // Code snippets for each component
  const primaryButtonCode = `<button 
  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
>
  Primary Button
</button>`

  const outlineButtonCode = `<button 
  className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition"
>
  Outline Button
</button>`

  const iconButtonCode = `<button 
  className="bg-[#b0d7f5] text-[#2c3e50] px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#3a506b] hover:text-white transition"
>
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
  Icon Button
</button>`

  const standardInputCode = `<div className="flex flex-col gap-2">
  <label className="text-sm font-medium text-gray-700">Name</label>
  <input
    type="text"
    placeholder="Enter your name"
    className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-200 focus:outline-none transition"
  />
</div>`

  const searchInputCode = `<div className="relative">
  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
    </svg>
  </div>
  <input
    type="search"
    placeholder="Search..."
    className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-200 focus:outline-none transition"
  />
</div>`

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
</div>`

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
</div>`

  const snowwCardCode = `<div className="snoww-card bg-[#f9fbff] border border-[#e8f0f9] p-6 text-[#2c3e50] hover:shadow-lg transition duration-300 relative overflow-hidden">
  <div className="absolute -top-10 -left-10 w-24 h-24 bg-[#e8f0f9] opacity-50 rounded-full blur-xl"></div>
  
  <div className="relative z-10">
    <h3 className="text-xl font-bold mb-2">Card Title</h3>
    <p className="text-sm text-[#3a506b]">Card description text goes here.</p>
  </div>
</div>`

  const profileCardCode = `<div className="snoww-card bg-gradient-to-b from-[#f9fbff] to-[#e8f0f9] border border-[#e0e9f5] p-6 text-center relative overflow-hidden">
  <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#d8e8f7] opacity-50 rounded-full blur-xl"></div>
  
  <div className="relative z-10">
    <div className="relative mx-auto w-24 h-24 mb-4">
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#d8e8f7] to-white blur-sm"></div>
      <img 
        src="/api/placeholder/96/96" 
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
</div>`

  const imageCardCode = `<div className="snoww-card max-w-sm overflow-hidden border border-[#e8f0f9] bg-[#f9fbff] relative">
  <div className="h-48 relative overflow-hidden">
    <img 
      src="/api/placeholder/400/250" 
      alt="Image" 
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#3a506b]/20"></div>
  </div>
  
  <div className="p-5 bg-[#f9fbff] relative">
    <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#e8f0f9] opacity-50 rounded-full blur-xl"></div>
    
    <div className="relative z-10">
      <time className="block text-xs text-[#3a506b] mb-1 text-right">
        May 4, 2025
      </time>
      <h3 className="text-lg font-bold text-[#2c3e50] text-center">Card Title</h3>
      <p className="mt-2 text-sm text-[#3a506b] text-center">Card description goes here.</p>
    </div>
  </div>
</div>`

  // Component rendering based on active component
  const renderComponent = () => {
    switch (activeComponent) {
      case "button":
        return (
          <section id="button">
            <h2 className="text-2xl font-bold mb-4">Buttons</h2>

            <ButtonPreviewCard title="Primary Button" codeSnippet={primaryButtonCode}>
              <PrimaryButton>Primary Button</PrimaryButton>
            </ButtonPreviewCard>

            <ButtonPreviewCard title="Outline Button" codeSnippet={outlineButtonCode}>
              <OutlineButton>Outline Button</OutlineButton>
            </ButtonPreviewCard>

            <ButtonPreviewCard title="Icon Button" codeSnippet={iconButtonCode}>
              <IconButton
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                }
              >
                Icon Button
              </IconButton>
            </ButtonPreviewCard>
          </section>
        )
      case "card":
        return (
          <section id="card">
            <h2 className="text-2xl font-bold mb-4">Cards</h2>

            <CardPreviewCard title="Simple Card" codeSnippet={snowwCardCode}>
              <SnowwCard
                title="Simple Snoww Card"
                description="This is a minimal Snoww themed card for UI components."
              />
            </CardPreviewCard>

            <CardPreviewCard title="Profile Card" codeSnippet={profileCardCode}>
              <ProfileCard name="Alex Frost" subtitle="Winter Explorer" image="/api/placeholder/150/150" />
            </CardPreviewCard>

            <CardPreviewCard title="Image Card" codeSnippet={imageCardCode}>
              <ImageCard
                imageUrl="/api/placeholder/400/300"
                date="2025-05-04"
                title="Winter Wonderland"
                description="Discover the beauty of snow-covered landscapes in this stunning alpine region."
              />
            </CardPreviewCard>
          </section>
        )
      case "dropdown":
        return (
          <section id="dropdown">
            <h2 className="text-2xl font-bold mb-4">Dropdowns</h2>

            <DropdownPreviewCard title="Standard Dropdown" codeSnippet={standardDropdownCode}>
              <StandardDropdown options={["Option 1", "Option 2", "Option 3"]} />
            </DropdownPreviewCard>

            <DropdownPreviewCard title="Icon Dropdown" codeSnippet={iconDropdownCode}>
              <IconDropdown />
            </DropdownPreviewCard>
          </section>
        )
      case "input":
        return (
          <section id="input">
            <h2 className="text-2xl font-bold mb-4">Inputs</h2>

            <InputPreviewCard title="Standard Input" codeSnippet={standardInputCode}>
              <StandardInput label="Name" placeholder="Enter your name" />
            </InputPreviewCard>

            <InputPreviewCard title="Search Input" codeSnippet={searchInputCode}>
              <SearchInput placeholder="Search components..." />
            </InputPreviewCard>
          </section>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex bg-[#f9f9f9] text-gray-800 min-h-screen">
      <Sidebar activeComponent={activeComponent} setActiveComponent={setActiveComponent} />
      <main className="flex-1 p-6">{renderComponent()}</main>
    </div>
  )
}

export default ComponentsPage
