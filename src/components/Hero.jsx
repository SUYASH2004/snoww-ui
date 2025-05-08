import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="py-[80px] px-5 bg-[#f8f9fa] text-center font-[Quicksand,sans-serif] text-[#2c3e50]">
      <div className="max-w-[800px] mx-auto">
        <h1 className="text-[2rem] md:text-[2.5rem] font-bold mb-5">
          Design Frosty Interfaces with ❄️ SnowwUi
        </h1>
        <p className="text-[1rem] md:text-[1.1rem] text-[#3a506b] mb-10">
          A minimal and modern UI component library built with simplicity and snow effects. Elevate your design game effortlessly.
        </p>
        <div className="flex justify-center flex-wrap gap-4 md:gap-5">
          <Link to="/docs" className="no-underline">
            <button className="py-3 px-7 bg-[#8ecae6] text-[#2c3e50] font-semibold rounded-lg cursor-pointer transition-all duration-300 hover:bg-[#b0d7f5] hover:-translate-y-0.5">
              Get Started
            </button>
          </Link>
          <Link to="/components" className="no-underline">
            <button className="py-3 px-7 bg-white border-2 border-[#8ecae6] text-[#2c3e50] font-semibold rounded-lg cursor-pointer transition-all duration-300 hover:bg-[#f0f8ff] hover:border-[#64b5e6] hover:-translate-y-0.5">
              Browse Components
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;