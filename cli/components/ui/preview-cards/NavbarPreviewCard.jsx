"use client"

import { useState } from "react"

const NavbarPreviewCard = ({ title, children, codeSnippet, description }) => {
  const [activeTab, setActiveTab] = useState("preview")
  const [isExpanded, setIsExpanded] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeSnippet)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <div className="bg-[#fbf9f7] border border-[#e5ded4] rounded-lg overflow-hidden shadow-sm font-sans snoww-card mb-6">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-[#e5ded4]">
        <h2 className="text-[#2c3e50] text-xl font-bold">{title}</h2>
      </div>

      {description && (
        <div className="p-4 border-b border-[#e5ded4] text-[#3a506b]">
          <p>{description}</p>
        </div>
      )}

      {/* Tabs */}
      <div className="flex border-b border-[#e5ded4]">
        <button
          className={`flex items-center px-6 py-3 text-sm font-medium ${activeTab === "preview" ? "border-b-2 border-[#2c3e50]" : ""}`}
          onClick={() => setActiveTab("preview")}
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            ></path>
          </svg>
          Preview
        </button>
        <button
          className={`flex items-center px-6 py-3 text-sm font-medium ${activeTab === "code" ? "border-b-2 border-[#2c3e50]" : ""}`}
          onClick={() => setActiveTab("code")}
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            ></path>
          </svg>
          Code
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        {activeTab === "preview" ? (
          <div className="flex justify-center w-full">
            <div className="w-full max-w-4xl">{children}</div>
          </div>
        ) : (
          <div className="relative">
            <div className="absolute right-2 top-2 flex gap-2">
              <button
                onClick={copyToClipboard}
                className="p-1.5 rounded-md bg-[#f0f4f8] hover:bg-[#e0e8f0] text-[#2c3e50] transition-colors"
                title="Copy code"
              >
                {isCopied ? (
                  "Copied!"
                ) : (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    ></path>
                  </svg>
                )}
              </button>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-1.5 rounded-md bg-[#f0f4f8] hover:bg-[#e0e8f0] text-[#2c3e50] transition-colors"
                title={isExpanded ? "Collapse" : "Expand"}
              >
                {isExpanded ? (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                )}
              </button>
            </div>
            <pre
              className={`bg-[#f5f7f9] p-4 rounded-lg overflow-x-auto text-sm text-[#2c3e50] font-mono ${isExpanded ? "max-h-[800px]" : "max-h-[300px]"} transition-all duration-300`}
            >
              {codeSnippet}
            </pre>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavbarPreviewCard
