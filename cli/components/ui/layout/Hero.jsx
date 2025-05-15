import React from "react";

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
          <button
            className="py-3 px-8 bg-[#8ecae6] text-[#2c3e50] font-semibold rounded-lg cursor-pointer transition-all duration-300 hover:bg-[#b0d7f5] hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(142,202,230,0.3)]"
            aria-label="Get Started"
          >
            Get Started
          </button>
          <button
            className="py-3 px-8 bg-white border-2 border-[#8ecae6] text-[#2c3e50] font-semibold rounded-lg cursor-pointer transition-all duration-300 hover:bg-[#f0f8ff] hover:border-[#64b5e6] hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(142,202,230,0.3)]"
            aria-label="Browse Components"
          >
            Browse Components
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;