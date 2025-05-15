import React, { useEffect } from 'react';

const featuresList = [
  {
    title: "❄️ Frost-Themed Design",
    description: "Clean, icy aesthetics that give your UI a refreshing and modern feel.",
  },
  {
    title: "⚡ Lightweight & Fast",
    description: "Optimized components that ensure minimal bundle size and lightning-fast performance.",
  },
  {
    title: "🧩 Ready-to-Use Components",
    description: "Pre-styled Buttons, Cards, Dropdowns, Inputs, and more – ready to plug into your app.",
  },
  {
    title: "🎨 Tailwind-Powered",
    description: "Built entirely with Tailwind CSS for maximum customization and utility-first styling.",
  },
  {
    title: "🔧 Easy to Integrate",
    description: "Simple import system and minimal setup. Get started quickly without boilerplate.",
  },
  {
    title: "📚 Developer Friendly",
    description: "Extensive docs and examples to help developers build faster and better.",
  },
];

function Features() {
  // Add frost effect on scroll
  useEffect(() => {
    const cards = document.querySelectorAll('.feature-card');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('feature-card-visible');
        }
      });
    }, { threshold: 0.2 });
    
    cards.forEach(card => {
      observer.observe(card);
    });
    
    return () => {
      cards.forEach(card => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section className="relative py-20 px-4 text-[#2c3e50] font-[Quicksand,sans-serif] overflow-hidden">
      <style jsx>{`
        .feature-card {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .feature-card-visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .feature-frost-bg {
          position: absolute;
          background-color: #d0e7f9;
          opacity: 0.1;
          filter: blur(80px);
          border-radius: 50%;
          z-index: -1;
        }
      `}</style>
      
      {/* Decorative background elements */}
      <div className="feature-frost-bg" style={{ width: '500px', height: '500px', top: '-10%', right: '-5%' }}></div>
      <div className="feature-frost-bg" style={{ width: '400px', height: '400px', bottom: '10%', left: '-5%' }}></div>
      
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">What Makes SnowwUI Cool? ❄️</h2>
        <p className="text-[#3a506b] mb-12 text-lg">
          Discover why SnowwUI is your next favorite UI library for crafting frosty interfaces.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <div
              key={index}
              className="feature-card bg-white shadow-sm border border-[#e0e9f5] rounded-xl p-6 hover:shadow-md transition-all duration-300 overflow-hidden relative group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-[#3a506b]">{feature.description}</p>
              
              {/* Frost hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;