/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { CountdownTime } from '../types';
import { Sparkles, Calendar } from 'lucide-react';

interface CountdownProps {
  targetDate: string;
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isCompleted: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const targetTime = new Date(targetDate).getTime();
      const currentTime = new Date().getTime();
      const difference = targetTime - currentTime;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isCompleted: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isCompleted: false,
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div id="evento-contagem" className="w-full flex flex-col items-center py-6">
      <div className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3d5a2c]/5 border border-[#3d5a2c]/10 text-[#3d5a2c] font-sans text-xs uppercase tracking-widest font-semibold mb-6">
        <Calendar className="w-3.5 h-3.5 text-[#b35a38]" />
        <span>Contagem Regressiva</span>
        <Sparkles className="w-3 h-3 text-[#c5a059]" />
      </div>

      <div className="grid grid-cols-4 gap-3 sm:gap-6 w-full max-w-lg mb-4">
        {/* Days card */}
        <div className="glass-card flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl relative overflow-hidden group hover:scale-105 transition-transform duration-300">
          <div className="absolute top-0 inset-x-0 h-1 bg-[#3d5a2c]/30 rounded-t-full"></div>
          <span className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#3d5a2c] block mb-1">
            {timeLeft.days.toString().padStart(2, '0')}
          </span>
          <span className="font-sans text-[10px] sm:text-xs text-[#b35a38] uppercase tracking-widest font-bold">
            Dias
          </span>
        </div>

        {/* Hours card */}
        <div className="glass-card flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl relative overflow-hidden group hover:scale-105 transition-transform duration-300">
          <div className="absolute top-0 inset-x-0 h-1 bg-[#b35a38]/30 rounded-t-full"></div>
          <span className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#b35a38] block mb-1">
            {timeLeft.hours.toString().padStart(2, '0')}
          </span>
          <span className="font-sans text-[10px] sm:text-xs text-[#b35a38] uppercase tracking-widest font-bold">
            Horas
          </span>
        </div>

        {/* Minutes card */}
        <div className="glass-card flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl relative overflow-hidden group hover:scale-105 transition-transform duration-300">
          <div className="absolute top-0 inset-x-0 h-1 bg-[#c5a059]/30 rounded-t-full"></div>
          <span className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#3d5a2c] block mb-1">
            {timeLeft.minutes.toString().padStart(2, '0')}
          </span>
          <span className="font-sans text-[10px] sm:text-xs text-[#b35a38] uppercase tracking-widest font-bold">
            Minutos
          </span>
        </div>

        {/* Seconds card */}
        <div className="glass-card flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl relative overflow-hidden group hover:scale-105 transition-transform duration-300">
          <div className="absolute top-0 inset-x-0 h-1 bg-[#3d5a2c]/30 rounded-t-full"></div>
          <span className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#b35a38] block mb-1">
            {timeLeft.seconds.toString().padStart(2, '0')}
          </span>
          <span className="font-sans text-[10px] sm:text-xs text-[#b35a38] uppercase tracking-widest font-bold">
            Segundos
          </span>
        </div>
      </div>

      {timeLeft.isCompleted && (
        <p className="font-sans text-xs text-[#3d5a2c] italic font-semibold mt-2">
          O grande dia chegou! Sejam bem-vindos! 💕
        </p>
      )}
    </div>
  );
}
