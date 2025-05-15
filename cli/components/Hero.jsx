import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero-section relative pt-32 md:pt-40 pb-20 px-5 text-center font-[Quicksand,sans-serif] text-[#2c3e50] overflow-hidden">
      <style jsx>{`
        .frost-circle {
          position: absolute;
          background-color: var(--snoww-primary);
          opacity: 0.05;
          border-radius: 50%;
          filter: blur(30px);
          z-index: -1;
        }

        .hero-content-container {
          animation: fadeUp 1s ease-out forwards;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-button {
          transition: all 0.3s ease;
        }

        .hero-button:hover {
          transform: translateY(-4px);
          box-shadow: 0 4px 12px rgba(142, 202, 230, 0.3);
        }
      `}</style>
      
      {/* Decorative frost circles */}
      <div className="frost-circle" style={{ width: '300px', height: '300px', top: '30%', left: '10%' }}></div>
      <div className="frost-circle" style={{ width: '200px', height: '200px', top: '20%', right: '15%' }}></div>
      <div className="frost-circle" style={{ width: '250px', height: '250px', bottom: '10%', left: '30%' }}></div>
      
      <div className="hero-content-container max-w-[800px] mx-auto relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Design Frosty Interfaces with <span className="text-[#8ecae6]">❄️ SnowwUi</span>
        </h1>
        <p className="text-lg md:text-xl text-[#3a506b] mb-12 max-w-[600px] mx-auto">
          A minimal and modern UI component library built with simplicity and snow effects. 
          Elevate your design game effortlessly.
        </p>
        <div className="flex justify-center flex-wrap gap-4 md:gap-6">
          <Link to="/docs" className="no-underline">
            <button className="hero-button py-3 px-8 bg-[#8ecae6] text-[#2c3e50] font-semibold rounded-lg cursor-pointer transition-all duration-300 hover:bg-[#b0d7f5] shadow-md">
              Get Started
            </button>
          </Link>
          <Link to="/components" className="no-underline">
            <button className="hero-button py-3 px-8 bg-white border-2 border-[#8ecae6] text-[#2c3e50] font-semibold rounded-lg cursor-pointer transition-all duration-300 hover:bg-[#f0f8ff] hover:border-[#64b5e6] shadow-sm">
              Browse Components
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;