"use client"

import { useRef, useState } from "react"

const SpotlightCard = ({ children, color = "rgba(255, 255, 255, 0.1)", size = 300, className = "" }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const handleMouseEnter = () => setIsHovering(true)
  const handleMouseLeave = () => setIsHovering(false)

  return (
    <div className="rounded-3xl border border-neutral-950/10 dark:border-white/10 bg-white/[.012] p-2">
      <div
        ref={cardRef}
        className={`relative transform-gpu overflow-hidden rounded-2xl border border-neutral-950/10 dark:border-white/10 bg-neutral-950/[.012] dark:bg-white/5 shadow-sm dark:shadow-md shadow-neutral-50/50 dark:shadow-neutral-950/50 ${className}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
          style={{
            opacity: isHovering ? 1 : 0,
            backgroundImage: `radial-gradient(${size}px circle at ${position.x}px ${position.y}px, ${color}, transparent)`,
            zIndex: 1, // Set a low z-index for the spotlight effect
          }}
        />

        <div className="relative spotlight-card-content" style={{ zIndex: 30 }}>
          {children || (
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#2c3e50]">Spotlight Card</h3>
              <button
                className="mt-4 px-4 py-2 bg-[#8ecae6] text-[#2c3e50] rounded-lg hover:bg-[#b0d7f5] focus:ring-2 focus:ring-[#64b5e6] focus:outline-none transition-all duration-300"
                style={{ position: "relative", zIndex: 40 }}
              >
                Test Button
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SpotlightCard
