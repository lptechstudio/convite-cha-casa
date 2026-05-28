/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { Sparkles, Heart } from 'lucide-react';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFadingOut(true);
            setTimeout(() => {
              onComplete();
            }, 800); // Wait for transition out
          }, 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      id="custom-site-loader"
      className={`fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#fdfaf6] transition-all duration-700 ease-in-out ${
        isFadingOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center max-w-sm px-6 text-center">
        {/* Animated Stamp Seal effect */}
        <div className="relative mb-8 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full border border-dashed border-[#b35a38]/40 animate-spin" style={{ animationDuration: '12s' }}></div>
          <div className="absolute w-18 h-18 rounded-full bg-[#3d5a2c]/5 flex items-center justify-center border-2 border-[#c5a059]/30">
            <Heart className="w-8 h-8 text-[#b35a38] fill-[#b35a38]/10 animate-pulse" />
          </div>
          <div className="absolute -top-1 -right-1 text-[#c5a059] animate-bounce">
            <Sparkles className="w-5 h-5" />
          </div>
        </div>

        {/* Brand Text */}
        <h2 className="font-display text-2xl md:text-3xl text-[#3d5a2c] font-bold tracking-tight mb-2">
          Maria & Felipe
        </h2>
        <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#b35a38] font-bold mb-8">
          Chá de Casa Nova
        </p>

        {/* Progress Bar & percentage */}
        <div className="w-48 h-[2px] bg-[#f1eee4] rounded-full overflow-hidden relative mb-2">
          <div
            className="h-full bg-gradient-to-r from-[#3d5a2c] to-[#b35a38] transition-all duration-300 ease-out rounded-full"
            style={{ width: `${Math.min(progress, 100)}%` }}
          ></div>
        </div>
        <span className="font-mono text-[10px] text-[#5c614d] tracking-widest uppercase font-semibold">
          Carregando Amor {Math.min(progress, 100)}%
        </span>
      </div>
    </div>
  );
}
