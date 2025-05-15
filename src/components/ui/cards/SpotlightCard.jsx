import React, { useRef, useState } from 'react';

/**
 * SpotlightCard component
 * 
 * A card component that creates a spotlight effect following the mouse cursor
 * 
 * @param {ReactNode} children - Content to display inside the card
 * @param {string} color - Color of the spotlight gradient (default: rgba(255, 255, 255, 0.1))
 * @param {number} size - Size of the spotlight in pixels (default: 300)
 * @param {string} className - Additional CSS classes to apply to the inner card
 */
const SpotlightCard = ({ 
  children, 
  color = 'rgba(255, 255, 255, 0.1)', 
  size = 300,
  className = ''
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
    <div className="rounded-3xl border border-neutral-950/10 dark:border-white/10 bg-white/[.012] p-2">
      <div
        ref={cardRef}
        className={`relative transform-gpu overflow-hidden rounded-2xl border border-neutral-950/10 dark:border-white/10 bg-neutral-950/[.012] dark:bg-white/5 shadow-sm dark:shadow-md shadow-neutral-50/50 dark:shadow-neutral-950/50 ${className}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          '--x': `${position.x}px`,
          '--y': `${position.y}px`,
          '--spotlight-color-stops': `${color}, transparent`,
          '--spotlight-size': `${size}px`
        }}
      >
        <div
          className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
          style={{
            opacity: isHovering ? 1 : 0,
            backgroundImage: `radial-gradient(var(--spotlight-size) circle at var(--x) var(--y), var(--spotlight-color-stops))`
          }}
        />
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SpotlightCard;