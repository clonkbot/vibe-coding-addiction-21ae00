import { useEffect, useState } from 'react';

const comparisons = [
  { slots: 'You buy chips.', coding: 'You buy tokens.' },
  { slots: 'You spin the slots.', coding: 'You hit "Generate".' },
  { slots: 'You might hit a jackpot, or get nothing.', coding: 'You might get a bug-free app, or nonsense that won\'t even compile.' },
  { slots: 'Flashing lights, catchy animation.', coding: '"Great idea!", "Of course!", "Here\'s the perfect solution for you!"' },
  { slots: '"I have my own strategy."', coding: '"I\'m a prompt engineer."' },
  { slots: '"One more spin and I\'ll win it all back!"', coding: '"One more prompt and this bug will disappear."' },
  { slots: 'The casino always wins.', coding: 'Cursor always wins.' },
];

export default function ComparisonTable() {
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

    const element = document.getElementById('comparison-table');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div id="comparison-table" className="max-w-4xl mx-auto">
      <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-10">
        <span className="text-pink-400">🎰 Slot Machines</span>
        <span className="text-white/40 mx-2 md:mx-4">vs.</span>
        <span className="text-green-400">💻 Vibe Coding</span>
      </h2>

      <div className="overflow-hidden rounded-xl border border-white/10">
        {/* Header - hidden on mobile, shown on larger screens */}
        <div className="hidden md:grid grid-cols-2 bg-white/5">
          <div className="p-4 md:p-6 border-r border-white/10 text-center">
            <span className="text-base md:text-lg font-bold text-pink-400">🎰 Slots</span>
          </div>
          <div className="p-4 md:p-6 text-center">
            <span className="text-base md:text-lg font-bold text-green-400">🤖 AI Coding</span>
          </div>
        </div>

        {/* Rows */}
        {comparisons.map((row, i) => (
          <div
            key={i}
            className={`flex flex-col md:grid md:grid-cols-2 border-t border-white/10 transition-all duration-500 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            {/* Mobile headers */}
            <div className="md:hidden flex justify-between px-4 pt-4 text-xs font-bold">
              <span className="text-pink-400">🎰 SLOTS</span>
              <span className="text-green-400">🤖 AI</span>
            </div>

            <div className="p-4 md:p-6 md:border-r border-white/10 bg-pink-500/5 hover:bg-pink-500/10 transition-colors">
              <p className="text-pink-100 text-sm md:text-base">{row.slots}</p>
            </div>
            <div className="p-4 md:p-6 bg-green-500/5 hover:bg-green-500/10 transition-colors border-b md:border-b-0 border-white/5">
              <p className="text-green-100 text-sm md:text-base">{row.coding}</p>
            </div>
          </div>
        ))}

        {/* Final row - highlighted */}
        <div className={`flex flex-col md:grid md:grid-cols-2 border-t-2 border-yellow-500/50 bg-yellow-500/5 transition-all duration-500 ${
          visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}
          style={{ transitionDelay: `${comparisons.length * 100}ms` }}
        >
          <div className="p-4 md:p-6 md:border-r border-yellow-500/30 text-center md:text-left">
            <p className="text-yellow-300 font-bold text-base md:text-lg">🏆 The house always wins</p>
          </div>
          <div className="p-4 md:p-6 text-center md:text-left">
            <p className="text-yellow-300 font-bold text-base md:text-lg">🏆 Anthropic always wins</p>
          </div>
        </div>
      </div>
    </div>
  );
}
