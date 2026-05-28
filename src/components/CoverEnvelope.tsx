/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Home, Sparkles } from 'lucide-react';
import { COUPLE_INFO } from '../data';

interface CoverEnvelopeProps {
  onOpen: () => void;
}

export default function CoverEnvelope({ onOpen }: CoverEnvelopeProps) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);
    // Let the animations run before triggering the reveal
    setTimeout(() => {
      onOpen();
    }, 1200);
  };

  return (
    <div
      id="envelope-wrapper"
      className={`fixed inset-0 z-[500] flex items-center justify-center bg-[#2e3b23]/95 p-4 transition-all duration-1000 ease-in-out ${
        isOpening ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
    >
      {/* Dynamic Background Pattern */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-overlay z-0"
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuD1JXdGVGFWnUoSKS1RDM1MPnYvbaHFVdMY8q8_d91S-VFrkcgd0su1krAXz4nPgIooOAtZNSeD7Ljd7MZ-rxqSYu1SGLsdtcH6F47PEP98sIOOG-epUV84WkSAQodm70Sp9U4hog2uPiY4NV7Rhml8qViWYIxs806R7aquw6rIwmi8YkHgkHD9ft1PgZRdiamAxKbViNh8VvZAD_jSUO6wfqYzEmrJp1oLoTNGikV6Rzkwx7DRHZyfJr6MVzbzFuOdO6YBB7-NE7hp')`
        }}
      ></div>

      {/* Floating Sparkles Decor */}
      <div className="absolute top-10 left-10 text-[#c5a059] opacity-30 animate-pulse">
        <Sparkles className="w-8 h-8" />
      </div>
      <div className="absolute bottom-10 right-10 text-[#c5a059] opacity-30 animate-pulse" style={{ animationDelay: '1.5s' }}>
        <Sparkles className="w-6 h-6" />
      </div>

      <div 
        className={`relative w-full max-w-[460px] aspect-[4/5] bg-[#fbf9f4] rounded-[2rem] shadow-2xl flex flex-col items-center justify-between overflow-hidden border border-[#c5a059]/30 transition-all duration-1000 p-8 md:p-12 ${
          isOpening ? 'translate-y-[-100vh] scale-95 rotate-[-2deg]' : 'scale-100'
        }`}
      >
        {/* Fine Leaf Frame Overlay */}
        <div 
          className="absolute inset-4 border border-[#c5a059]/20 rounded-[1.5rem] pointer-events-none z-10"
        ></div>

        {/* Elegant top decor */}
        <div className="text-center z-20 pt-6">
          <p className="font-sans text-[11px] font-bold tracking-[0.4em] text-[#b35a38] uppercase mb-3">
            CONVITE ESPECIAL
          </p>
          <div className="h-[1px] w-12 bg-[#c5a059]/40 mx-auto"></div>
        </div>

        {/* Center Wax Seal Style Trigger */}
        <div className="flex flex-col items-center gap-8 text-center z-20 my-auto">
          <button
            onClick={handleOpen}
            className="group relative flex flex-col items-center focus:outline-none"
            aria-label="Clique para abrir o convite"
          >
            {/* Pulsating ring */}
            <div className="absolute -inset-4 bg-[#3d5a2c]/5 rounded-full blur-xl scale-95 group-hover:scale-110 transition-transform duration-700"></div>
            
            {/* Seal circle */}
            <div className="w-32 h-32 md:w-36 md:h-36 bg-white rounded-full flex items-center justify-center border-2 border-[#c5a059]/40 shadow-xl group-hover:scale-105 group-hover:border-[#b35a38] group-hover:rotate-12 transition-all duration-700 ease-out relative z-10">
              <div className="w-26 h-26 md:w-30 md:h-30 rounded-full border border-dashed border-[#c5a059]/30 flex flex-col items-center justify-center bg-[#fdfaf6] p-4 text-center">
                <Home className="w-12 h-12 text-[#3d5a2c] group-hover:text-[#b35a38] transition-colors duration-500 font-light" />
                <span className="font-sans text-[9px] text-[#c5a059] tracking-widest uppercase font-bold mt-1">CASA NOVA</span>
              </div>
            </div>

            {/* Tap prompt */}
            <div className="space-y-3 mt-8">
              <span className="font-display font-semibold text-[#3d5a2c] tracking-[0.25em] text-sm uppercase transition-all group-hover:tracking-[0.3em] group-hover:text-[#b35a38]">
                Tocar para Abrir
              </span>
              <div className="h-[2px] w-8 bg-[#b35a38]/60 mx-auto transition-all group-hover:w-16"></div>
            </div>
          </button>
        </div>

        {/* Elegant Bottom Footer names */}
        <div className="text-center z-20 pb-4">
          <h3 className="font-display text-2xl text-[#3d5a2c] font-bold">
            {COUPLE_INFO.bride}
          </h3>
          <p className="font-sans text-[11px] text-[#c5a059] uppercase tracking-widest my-1">
            &amp;
          </p>
          <h3 className="font-display text-2xl text-[#3d5a2c] font-bold">
            {COUPLE_INFO.groom}
          </h3>
        </div>
      </div>
    </div>
  );
}
