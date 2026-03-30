import { useState, useEffect, useCallback } from 'react';

const SYMBOLS = ['🎰', '💻', '🐛', '✨', '💸', '🔥', '⚡', '🎯'];
const CODE_SNIPPETS = ['npm run', 'git push', 'BUILD OK', 'ERROR!', 'TOKENS++', 'DEPLOY!'];

export default function SlotMachine() {
  const [reels, setReels] = useState(['💻', '💻', '💻']);
  const [spinning, setSpinning] = useState(false);
  const [message, setMessage] = useState('');
  const [spins, setSpins] = useState(0);

  const spin = useCallback(() => {
    if (spinning) return;

    setSpinning(true);
    setMessage('');
    setSpins(s => s + 1);

    // Animate through random symbols
    let iterations = 0;
    const maxIterations = 20;

    const interval = setInterval(() => {
      setReels([
        iterations < maxIterations - 6 ? SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)] : reels[0],
        iterations < maxIterations - 3 ? SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)] : reels[1],
        iterations < maxIterations ? SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)] : reels[2],
      ]);
      iterations++;

      if (iterations >= maxIterations) {
        clearInterval(interval);
        const finalReels = [
          SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
          SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
          SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
        ];
        setReels(finalReels);
        setSpinning(false);

        // Check for wins
        if (finalReels[0] === finalReels[1] && finalReels[1] === finalReels[2]) {
          if (finalReels[0] === '🐛') {
            setMessage('JACKPOT! ...of bugs');
          } else if (finalReels[0] === '💸') {
            setMessage('You won! (negative tokens)');
          } else {
            setMessage('Winner! (compile succeeded)');
          }
        } else if (finalReels[0] === '🐛' || finalReels[1] === '🐛' || finalReels[2] === '🐛') {
          setMessage('Bug detected! One more spin...');
        } else {
          setMessage(CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)]);
        }
      }
    }, 80);
  }, [spinning, reels]);

  useEffect(() => {
    const timer = setTimeout(() => spin(), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-xl mx-auto">
      {/* Machine Frame */}
      <div className="relative bg-gradient-to-b from-purple-900/80 to-purple-950/90 rounded-2xl p-4 md:p-8 border-4 border-yellow-400/60 shadow-2xl shadow-purple-500/20">
        {/* Top lights */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex gap-2">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-yellow-400 animate-pulse"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>

        {/* Title */}
        <div className="text-center mb-4 md:mb-6">
          <h3 className="text-lg md:text-2xl font-black text-yellow-300 font-mono tracking-wider">
            VIBE SLOTS 777
          </h3>
          <p className="text-[10px] md:text-xs text-pink-300/60 mt-1">Insert tokens to play</p>
        </div>

        {/* Reels */}
        <div className="bg-black/60 rounded-xl p-3 md:p-4 mb-4 md:mb-6 border-2 border-yellow-600/40">
          <div className="flex justify-center gap-2 md:gap-4">
            {reels.map((symbol, i) => (
              <div
                key={i}
                className={`w-16 h-20 md:w-24 md:h-28 bg-gradient-to-b from-white to-gray-200 rounded-lg flex items-center justify-center text-3xl md:text-5xl border-4 border-gray-400 shadow-inner ${
                  spinning ? 'animate-bounce' : ''
                }`}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {symbol}
              </div>
            ))}
          </div>
        </div>

        {/* Message display */}
        <div className="h-6 md:h-8 mb-4 md:mb-6 flex items-center justify-center">
          <p className={`text-sm md:text-lg font-mono font-bold transition-all ${
            message.includes('JACKPOT') || message.includes('Winner')
              ? 'text-yellow-300 animate-pulse'
              : message.includes('Bug')
                ? 'text-red-400'
                : 'text-green-400'
          }`}>
            {message}
          </p>
        </div>

        {/* Spin button */}
        <button
          onClick={spin}
          disabled={spinning}
          className={`w-full py-3 md:py-4 rounded-xl font-black text-base md:text-xl tracking-wider transition-all ${
            spinning
              ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-red-600 via-red-500 to-red-600 hover:from-red-500 hover:via-red-400 hover:to-red-500 text-white shadow-lg shadow-red-500/30 hover:shadow-red-500/50 hover:scale-[1.02] active:scale-95'
          }`}
        >
          {spinning ? '🎰 SPINNING...' : '🎰 SPIN (1 TOKEN)'}
        </button>

        {/* Stats */}
        <div className="mt-4 md:mt-6 flex justify-between text-[10px] md:text-xs text-purple-300/60 font-mono">
          <span>SPINS: {spins}</span>
          <span>TOKENS: ∞</span>
          <span>BUGS: ???</span>
        </div>
      </div>
    </div>
  );
}
