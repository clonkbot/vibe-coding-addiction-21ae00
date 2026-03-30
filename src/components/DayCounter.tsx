import { useState, useEffect } from 'react';

export default function DayCounter() {
  const [days, setDays] = useState(0);
  const [counting, setCounting] = useState(true);
  const [resetAnimation, setResetAnimation] = useState(false);

  useEffect(() => {
    if (!counting) return;

    // Count up dramatically, then reset
    const interval = setInterval(() => {
      setDays(d => {
        if (d >= 3) {
          // Reset after reaching 3
          setTimeout(() => {
            setResetAnimation(true);
            setTimeout(() => {
              setDays(0);
              setResetAnimation(false);
            }, 500);
          }, 1000);
          setCounting(false);
          return d;
        }
        return d + 1;
      });
    }, 800);

    return () => clearInterval(interval);
  }, [counting]);

  // Restart counting after reset
  useEffect(() => {
    if (!counting && days === 0 && !resetAnimation) {
      const timer = setTimeout(() => {
        setCounting(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [counting, days, resetAnimation]);

  return (
    <div className="max-w-2xl mx-auto">
      <div className={`relative bg-black/40 rounded-2xl p-6 md:p-12 border-2 transition-all duration-500 ${
        resetAnimation
          ? 'border-red-500 shadow-2xl shadow-red-500/50'
          : days === 0
            ? 'border-red-500/50 shadow-lg shadow-red-500/20'
            : 'border-green-500/50 shadow-lg shadow-green-500/20'
      }`}>
        {/* Flashing warning lights when resetting */}
        {resetAnimation && (
          <div className="absolute inset-0 bg-red-500/20 animate-ping rounded-2xl" />
        )}

        <div className="relative text-center">
          <p className="text-xs md:text-sm text-white/40 uppercase tracking-[0.2em] md:tracking-[0.3em] mb-4 md:mb-6 font-mono">
            Days Without Vibe Coding
          </p>

          <div className={`relative inline-block transition-all duration-500 ${
            resetAnimation ? 'scale-150 text-red-500' : ''
          }`}>
            <span className={`text-7xl sm:text-8xl md:text-9xl font-black font-mono ${
              days === 0
                ? 'text-red-500'
                : days >= 3
                  ? 'text-yellow-400'
                  : 'text-green-400'
            }`}>
              {days}
            </span>
          </div>

          <p className={`mt-4 md:mt-6 text-base md:text-lg font-mono transition-all duration-300 ${
            days === 0
              ? 'text-red-400'
              : days >= 3
                ? 'text-yellow-300 animate-pulse'
                : 'text-green-400'
          }`}>
            {days === 0 && '"Just one more prompt..."'}
            {days === 1 && 'Hanging in there...'}
            {days === 2 && 'Impressive willpower!'}
            {days >= 3 && 'NEW RECORD! ...resetting'}
          </p>

          {resetAnimation && (
            <p className="absolute inset-x-0 -bottom-4 md:-bottom-6 text-lg md:text-xl text-red-500 font-bold animate-bounce">
              RELAPSE DETECTED
            </p>
          )}
        </div>

        {/* Progress bar */}
        <div className="mt-8 md:mt-12">
          <div className="h-2 md:h-3 bg-white/10 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-500 ${
                days === 0
                  ? 'bg-red-500 w-0'
                  : days === 1
                    ? 'bg-yellow-500 w-1/4'
                    : days === 2
                      ? 'bg-green-400 w-1/2'
                      : 'bg-green-400 w-3/4'
              }`}
            />
          </div>
          <div className="flex justify-between mt-2 text-[10px] md:text-xs text-white/30 font-mono">
            <span>RELAPSE</span>
            <span>1 HOUR</span>
            <span>1 DAY</span>
            <span>FREEDOM</span>
          </div>
        </div>
      </div>
    </div>
  );
}
