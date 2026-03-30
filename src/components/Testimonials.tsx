import { useEffect, useState } from 'react';

const testimonials = [
  {
    quote: "I told my family I was working. I was just building random todo apps for 14 hours straight.",
    author: "Anonymous Dev",
    role: "12 projects, 0 deployed",
    emoji: "😰"
  },
  {
    quote: "I've spent more on API tokens this month than on food. My fridge is empty but my GitHub is full.",
    author: "Prompt Engineer",
    role: "Credit card: declined",
    emoji: "💸"
  },
  {
    quote: "My wife asked where I was. I said 'debugging'. It's been 3 days. The bug was a typo.",
    author: "Recovering Vibe Coder",
    role: "Day 0 (again)",
    emoji: "🐛"
  },
  {
    quote: "I don't code anymore. I just describe what I want and hope. Like praying, but more expensive.",
    author: "Senior Prompter",
    role: "Former 10x Engineer",
    emoji: "🙏"
  },
];

export default function Testimonials() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('testimonials');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div id="testimonials" className="max-w-5xl mx-auto">
      <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold mb-8 md:mb-12 text-white/80">
        <span className="text-red-400">Real Stories</span> from Real Addicts
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {testimonials.map((item, i) => (
          <div
            key={i}
            className={`relative bg-white/5 rounded-xl p-5 md:p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/[0.07] ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            {/* Quote emoji */}
            <div className="absolute -top-3 -left-2 md:-top-4 md:-left-3 text-4xl md:text-5xl opacity-20">
              {item.emoji}
            </div>

            {/* Quote mark */}
            <div className="absolute top-3 right-4 md:top-4 md:right-6 text-3xl md:text-4xl text-pink-500/20 font-serif">
              "
            </div>

            <blockquote className="relative text-base md:text-lg text-white/70 italic leading-relaxed mb-4 md:mb-6">
              {item.quote}
            </blockquote>

            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-lg md:text-xl">
                {item.emoji}
              </div>
              <div>
                <p className="font-bold text-white/90 text-sm md:text-base">{item.author}</p>
                <p className="text-xs md:text-sm text-pink-400/60">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Hotline parody */}
      <div className={`mt-8 md:mt-12 text-center transition-all duration-700 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
        style={{ transitionDelay: '600ms' }}
      >
        <div className="inline-block bg-red-500/10 border border-red-500/30 rounded-lg px-4 md:px-8 py-3 md:py-4">
          <p className="text-xs md:text-sm text-red-400/80 font-mono">
            📞 VIBE CODING HELPLINE: <span className="text-red-300">1-800-NO-PROMPTS</span>
          </p>
          <p className="text-[10px] md:text-xs text-red-400/50 mt-1">
            (Line currently busy - everyone's "just finishing one more feature")
          </p>
        </div>
      </div>
    </div>
  );
}
