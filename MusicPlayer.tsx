/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState, useImperativeHandle, forwardRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export interface MusicPlayerRef {
  play: () => void;
  pause: () => void;
}

const MusicPlayer = forwardRef<MusicPlayerRef>((_, ref) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Gentle, cozy acoustic instrumental guitar melody
  // Ideal for housewarming cozy background music
  const audioUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3";

  useEffect(() => {
    // Lazy initialize standard Audio client to prevent boot errors
    if (typeof window !== 'undefined') {
      audioRef.current = new Audio(audioUrl);
      audioRef.current.loop = true;
      audioRef.current.volume = 0.35; // Calibrate to be comfortable and discrete

      audioRef.current.addEventListener('error', (e) => {
        console.warn("Audio load failed or resisted, recovering gracefully: ", e);
        setHasError(true);
      });
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
    };
  }, []);

  useImperativeHandle(ref, () => ({
    play: () => {
      if (audioRef.current && !hasError) {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch((err) => {
            console.log("Autoplay was blocked initially, waiting for click-to-play:", err);
          });
      }
    },
    pause: () => {
      if (audioRef.current) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  }));

  const togglePlayback = () => {
    if (!audioRef.current || hasError) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => setHasError(true));
    }
  };

  if (hasError) return null; // Gracefully stay hidden if network loading fails

  return (
    <div className="fixed bottom-6 right-6 z-[450] flex items-center gap-3">
      {/* Audio Visualizer Waves (Shown while active) */}
      {isPlaying && (
        <div className="hidden sm:flex items-end gap-[3px] h-4 px-3 py-2 bg-white/70 backdrop-blur-md rounded-full shadow-sm border border-[#3d5a2c]/10">
          <div className="w-[2px] h-2 bg-[#b35a38] rounded-full animate-bounce" style={{ animationDuration: '0.8s' }}></div>
          <div className="w-[2px] h-3 bg-[#3d5a2c] rounded-full animate-bounce" style={{ animationDuration: '1.2s', animationDelay: '0.1s' }}></div>
          <div className="w-[2px] h-1.5 bg-[#c5a059] rounded-full animate-bounce" style={{ animationDuration: '0.9s', animationDelay: '0.2s' }}></div>
          <div className="w-[2px] h-3.5 bg-[#b35a38] rounded-full animate-bounce" style={{ animationDuration: '1.4s', animationDelay: '0.3s' }}></div>
        </div>
      )}

      {/* Main Floating Button */}
      <button
        onClick={togglePlayback}
        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 shadow-lg border relative ${
          isPlaying
            ? 'bg-[#3d5a2c] text-white border-[#3d5a2c]/30 hover:bg-[#2e3b23] hover:scale-110'
            : 'bg-white hover:bg-[#fcf9f4] text-[#b35a38] border-[#c5a059]/30 hover:scale-105'
        }`}
        title={isPlaying ? "Pausar música de fundo" : "Tocar música de fundo"}
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5 animate-pulse" />
        ) : (
          <VolumeX className="w-5 h-5" />
        )}
        <div className="absolute -top-1 -left-1 w-3 h-3 bg-[#c5a059] rounded-full animate-ping opacity-70 pointer-events-none" style={{ display: isPlaying ? 'none' : 'block' }}></div>
      </button>
    </div>
  );
});

MusicPlayer.displayName = 'MusicPlayer';

export default MusicPlayer;
