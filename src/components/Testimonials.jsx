import React, { useEffect, useRef } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Emma Watson",
    role: "Crush Developer",
    company: "Arctic Labs",
    content: "SnowwUI has transformed our dashboards. The clean, icy aesthetics perfectly match our brand and the lightweight components ensure our app loads in a flash.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    name: "Code With Harry",
    role: "Goat Developer",
    company: "Frost Digital",
    content: "As a designer, I appreciate the subtle frost effects and attention to detail. SnowwUI makes my designs come to life exactly how I envision them.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    name: "Binks Bhai",
    role: "Goat hi Kehede",
    company: "Snowpeak Technologies",
    content: "The Tailwind integration is flawless. We've cut our styling time in half while maintaining a consistent, beautiful interface across our entire application.",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    id: 4,
    name: "Sarah Johnson",
    role: "UX Designer",
    company: "Glacier Interactive",
    content: "The animations in SnowwUI are smooth and elegant. Our users have specifically mentioned how much they enjoy the interface transitions.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    id: 5,
    name: "Michael Chen",
    role: "Frontend Developer",
    company: "Blizzard Systems",
    content: "I've tried many UI libraries, but SnowwUI strikes the perfect balance between aesthetics and performance. The documentation is also excellent.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/55.jpg"
  },
  {
    id: 6,
    name: "Alex Rivera",
    role: "Product Manager",
    company: "Frostbyte",
    content: "Our entire team fell in love with SnowwUI. Implementation was straightforward and it saved us months of design work for our SaaS dashboard.",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/women/63.jpg"
  }
];

function Testimonials() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let position = 0;
    let frameId;

    const slide = () => {
      position -= 0.5;
      if (position <= -carousel.scrollWidth / 2) {
        position = 0;
      }
      carousel.style.transform = `translateX(${position}px)`;
      frameId = requestAnimationFrame(slide);
    };

    frameId = requestAnimationFrame(slide);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <section className="py-20 px-4 text-[#2c3e50] font-[Quicksand,sans-serif] overflow-hidden relative">
      <div className="frost-gradient absolute w-[600px] h-[600px] top-[10%] right-[-20%] bg-gradient-to-br from-[#d0e7f9] to-[#f8f9fa] opacity-20 blur-[70px] rounded-full -z-10"></div>
      <div className="frost-gradient absolute w-[400px] h-[400px] bottom-[-10%] left-[-10%] bg-gradient-to-br from-[#d0e7f9] to-[#f8f9fa] opacity-20 blur-[70px] rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 animate-slideFromRight">What Developers Say ✨</h2>
          <p className="text-[#3a506b] text-lg max-w-2xl mx-auto animate-slideFromRight delay-200">
            Join hundreds of developers who've fallen in love with our frosty UI components.
          </p>
        </div>

        <div className="overflow-hidden">
          <div
            ref={carouselRef}
            className="flex w-max"
            style={{ willChange: 'transform' }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="w-[300px] md:w-[350px] mx-4 shrink-0"
              >
                <div className="bg-white h-full shadow-md border border-[#e0e9f5] rounded-xl p-6 flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                      <p className="text-[#3a506b] text-sm">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-[#3a506b] flex-grow">{testimonial.content}</p>
                  <div className="mt-4 pt-4 border-t border-[#e0e9f5]">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#8ecae6] text-lg">
                        {i < testimonial.rating ? '★' : '☆'}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        .animate-slideFromRight {
          animation: slideFromRight 0.6s forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        @keyframes slideFromRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}

export default Testimonials;
