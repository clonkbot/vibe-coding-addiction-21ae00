import { useState, useEffect } from 'react';
import SlotMachine from './components/SlotMachine';
import ComparisonTable from './components/ComparisonTable';
import WarningSign from './components/WarningSign';
import DayCounter from './components/DayCounter';
import Testimonials from './components/Testimonials';

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0612] text-white overflow-x-hidden">
      {/* Noise overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Animated gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-950/50 via-[#0a0612] to-pink-950/30 animate-pulse" style={{ animationDuration: '4s' }} />

      {/* Scanlines effect */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.02] z-40"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
        }}
      />

      <div className="relative z-10">
        {/* Hero Section */}
        <header className={`relative px-4 md:px-8 pt-12 md:pt-20 pb-8 md:pb-16 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-6xl mx-auto text-center">
            {/* PSA Badge */}
            <div className={`inline-block mb-6 md:mb-8 transition-all duration-700 delay-200 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
              <div className="bg-red-600 text-white px-4 md:px-6 py-2 font-mono text-xs md:text-sm tracking-[0.3em] animate-pulse border-2 border-red-400">
                ⚠️ PUBLIC SERVICE ANNOUNCEMENT ⚠️
              </div>
            </div>

            <h1 className={`font-black text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-none mb-4 md:mb-6 transition-all duration-700 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-300 to-green-400 animate-gradient">
                VIBE CODING
              </span>
              <span className="block text-white/90 text-2xl sm:text-3xl md:text-5xl lg:text-6xl mt-2 md:mt-4 font-light tracking-wide">
                ADDICTION
              </span>
            </h1>

            <p className={`text-base md:text-xl lg:text-2xl text-pink-200/70 max-w-2xl mx-auto font-light italic transition-all duration-700 delay-500 px-4 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
              "Just one more prompt and this bug will disappear..."
            </p>
          </div>
        </header>

        {/* Slot Machine Section */}
        <section className={`px-4 md:px-8 py-8 md:py-16 transition-all duration-700 delay-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <SlotMachine />
        </section>

        {/* Warning Signs */}
        <section className="px-4 md:px-8 py-8 md:py-16">
          <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold mb-8 md:mb-12 text-yellow-300 font-mono tracking-wider">
            ⚡ WARNING SIGNS ⚡
          </h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <WarningSign
              icon="🎰"
              title="Token Tolerance"
              description="You need more and more tokens to feel the same high"
              delay={0}
            />
            <WarningSign
              icon="👁️"
              title="Red Eye Syndrome"
              description="12-16 hour coding sessions feel 'normal'"
              delay={100}
            />
            <WarningSign
              icon="🎯"
              title="Prompt Chasing"
              description="Convinced the next prompt will fix everything"
              delay={200}
            />
            <WarningSign
              icon="💸"
              title="Budget Blindness"
              description="Lost track of API costs months ago"
              delay={300}
            />
            <WarningSign
              icon="🌙"
              title="Sleep Denial"
              description="'I'll sleep after this build compiles'"
              delay={400}
            />
            <WarningSign
              icon="🔮"
              title="Magical Thinking"
              description="'I have my own strategy'"
              delay={500}
            />
          </div>
        </section>

        {/* Day Counter */}
        <section className="px-4 md:px-8 py-8 md:py-16">
          <DayCounter />
        </section>

        {/* Comparison Table */}
        <section className="px-4 md:px-8 py-8 md:py-16 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent">
          <ComparisonTable />
        </section>

        {/* Testimonials */}
        <section className="px-4 md:px-8 py-8 md:py-16">
          <Testimonials />
        </section>

        {/* CTA Section */}
        <section className="px-4 md:px-8 py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-green-500/10 border border-pink-500/30 rounded-lg p-6 md:p-12 backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
                Remember:
              </h2>
              <p className="text-xl md:text-2xl lg:text-3xl text-yellow-300 font-mono mb-4 md:mb-6">
                The House Always Wins
              </p>
              <p className="text-lg md:text-xl text-pink-200/60">
                (And by house, we mean Cursor, Claude, and your ever-growing token bills)
              </p>

              <div className="mt-8 md:mt-12 flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25 text-sm md:text-base">
                  Get Help (Just Kidding)
                </button>
                <button className="px-6 md:px-8 py-3 md:py-4 bg-transparent border-2 border-green-400 text-green-400 font-bold rounded-lg transition-all hover:bg-green-400/10 hover:scale-105 text-sm md:text-base">
                  One More Prompt →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-4 md:px-8 py-6 md:py-8 border-t border-white/5">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-[11px] md:text-xs text-white/30 font-mono">
              Requested by <a href="https://twitter.com/0xPaulius" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400/50 transition-colors">@0xPaulius</a> · Built by <a href="https://twitter.com/clonkbot" target="_blank" rel="noopener noreferrer" className="hover:text-green-400/50 transition-colors">@clonkbot</a>
            </p>
          </div>
        </footer>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}

export default App;
