import { useEffect, useState } from 'react';

interface WarningSignProps {
  icon: string;
  title: string;
  description: string;
  delay?: number;
}

export default function WarningSign({ icon, title, description, delay = 0 }: WarningSignProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 500 + delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`group relative overflow-hidden rounded-lg bg-gradient-to-br from-yellow-500/10 to-orange-500/5 border border-yellow-500/20 p-4 md:p-6 transition-all duration-500 hover:border-yellow-500/40 hover:shadow-lg hover:shadow-yellow-500/10 hover:scale-[1.02] ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/0 via-yellow-500/10 to-yellow-500/0 opacity-0 group-hover:opacity-100 transition-opacity -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] duration-1000" />

      <div className="relative">
        <div className="text-3xl md:text-4xl mb-2 md:mb-3 transform group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="text-base md:text-lg font-bold text-yellow-300 mb-1 md:mb-2 font-mono">
          {title}
        </h3>
        <p className="text-xs md:text-sm text-yellow-100/60 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Warning stripes */}
      <div className="absolute top-0 right-0 w-12 md:w-16 h-2 bg-gradient-to-r from-yellow-500 via-black via-yellow-500 via-black to-yellow-500 opacity-60" />
    </div>
  );
}
