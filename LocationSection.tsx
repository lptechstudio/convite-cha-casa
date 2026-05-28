/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { COUPLE_INFO } from '../data';
import { MapPin, Navigation, Copy, Check, Car, Sparkles, AlertCircle } from 'lucide-react';

export default function LocationSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    const fullText = `${COUPLE_INFO.address}, ${COUPLE_INFO.neighborhood}, ${COUPLE_INFO.city}`;
    navigator.clipboard.writeText(fullText)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      })
      .catch((err) => {
        console.error("Falha ao copiar endereço:", err);
      });
  };

  const handleOpenWaze = () => {
    const encodedAddress = encodeURIComponent(COUPLE_INFO.address + ", " + COUPLE_INFO.city);
    window.open(`https://waze.com/ul?q=${encodedAddress}`, '_blank');
  };

  const handleOpenUber = () => {
    const encodedAddress = encodeURIComponent(COUPLE_INFO.address + ", " + COUPLE_INFO.city);
    window.open(`https://m.uber.com/ul/?action=setPickup&dropoff[formatted_address]=${encodedAddress}`, '_blank');
  };

  return (
    <div id="localizacao" className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Address Card details */}
        <div className="lg:col-span-5 flex flex-col justify-between glass-card p-8 sm:p-10 rounded-[2.5rem] border border-[#c5a059]/30 relative overflow-hidden text-left">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#3d5a2c]/5 rounded-bl-[8rem] pointer-events-none"></div>
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3d5a2c]/10 text-[#3d5a2c] text-[10px] font-mono tracking-widest uppercase font-bold">
              <MapPin className="w-3.5 h-3.5 text-[#b35a38]" />
              Lar Doce Lar
            </div>
            
            <div className="space-y-2">
              <h3 className="font-display text-2xl sm:text-3xl text-[#3d5a2c] font-bold">
                Onde Celebraremos
              </h3>
              <p className="font-sans text-sm text-[#5c614d] leading-relaxed">
                Estamos ansiosos para abrir nossas portas e celebrar este marco na nossa jornada conjunta. Veja os detalhes abaixo:
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-[#f1eee4]">
              {/* Line 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#c5a059]/10 text-[#c5a059] flex items-center justify-center">
                  <span className="material-symbols-outlined font-light text-2xl">home</span>
                </div>
                <div>
                  <span className="block font-mono text-[10px] text-[#5c614d] uppercase tracking-widest font-bold">RUA E NÚMERO</span>
                  <span className="font-sans text-lg font-bold text-[#1c1c19]">{COUPLE_INFO.address}</span>
                </div>
              </div>

              {/* Line 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#b35a38]/10 text-[#b35a38] flex items-center justify-center">
                  <span className="material-symbols-outlined font-light text-2xl">location_city</span>
                </div>
                <div>
                  <span className="block font-mono text-[10px] text-[#5c614d] uppercase tracking-widest font-bold">APTO / COMPLEMENTO</span>
                  <span className="font-sans text-base font-bold text-[#1c1c19]">{COUPLE_INFO.neighborhood}</span>
                </div>
              </div>

              {/* Line 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#3d5a2c]/10 text-[#3d5a2c] flex items-center justify-center">
                  <span className="material-symbols-outlined font-light text-2xl">pin_drop</span>
                </div>
                <div>
                  <span className="block font-mono text-[10px] text-[#5c614d] uppercase tracking-widest font-bold">CIDADE</span>
                  <span className="font-sans text-base font-bold text-[#1c1c19]">{COUPLE_INFO.city}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Copy Action button */}
          <div className="pt-8 mt-6 border-t border-[#f1eee4] flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleCopyAddress}
              className="flex-1 py-3 px-5 rounded-xl border border-[#c5a059]/50 hover:border-[#b35a38] hover:bg-[#b08850]/5 text-[#3d5a2c] font-sans text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#3d5a2c]" />
                  Endereço Copiado!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copiar Endereço
                </>
              )}
            </button>
          </div>
        </div>

        {/* Visual Map card & Quick shortcuts */}
        <div className="lg:col-span-7 flex flex-col justify-between glass-card p-6 sm:p-8 rounded-[2.5rem] border border-[#f1eee4] text-left">
          
          {/* Subtle responsive illustrative layout or Google Maps iframe placeholder */}
          <div className="w-full aspect-[16/10] bg-[#fdfaf6] rounded-2xl border border-[#f1eee4]/70 relative overflow-hidden mb-6 flex items-center justify-center text-center">
            {/* Soft decorative visual showing map design with plant leaves */}
            <div 
              className="absolute inset-0 bg-cover bg-center filter saturate-[0.8] opacity-80"
              style={{
                backgroundImage: `url('https://maps.wikimedia.org/img/osm-intl,13,-23.55052, -46.633308,600x400.png?lang=pt')`, // aesthetic representation of SP context
                backgroundBlendMode: 'soft-light'
              }}
            ></div>
            <div className="absolute inset-0 bg-[#3d5a2c]/5 mix-blend-multiply"></div>
            
            <div className="relative z-10 p-6 bg-white/95 backdrop-blur-md rounded-2xl max-w-xs shadow-md border border-[#c5a059]/20">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#b35a38] text-white mb-3">
                <MapPin className="w-5 h-5" />
              </span>
              <p className="font-sans text-xs font-bold text-[#3d5a2c] mb-1">{COUPLE_INFO.address}</p>
              <p className="font-sans text-[10px] text-[#5c614d] uppercase tracking-wider">{COUPLE_INFO.neighborhood}</p>
            </div>
          </div>

          <div className="space-y-4">
            <span className="block font-mono text-[9px] text-[#5c614d] uppercase tracking-widest font-bold">ROTEAR NAVEGAÇÃO COMPLETA</span>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Google maps shortcut */}
              <button
                onClick={() => window.open(COUPLE_INFO.mapsUrl, '_blank')}
                className="py-3 px-4 rounded-xl bg-[#3d5a2c] hover:bg-[#2e3b23] text-white font-sans text-[10px] uppercase tracking-wider font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm hover:shadow-md"
              >
                <Navigation className="w-3.5 h-3.5" />
                Google Maps
              </button>

              {/* Waze shortcut */}
              <button
                onClick={handleOpenWaze}
                className="py-3 px-4 rounded-xl bg-white hover:bg-[#f6f3ee] text-[#b35a38] border border-[#f1eee4] font-sans text-[10px] uppercase tracking-wider font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
              >
                <Car className="w-3.5 h-3.5" />
                Abrir no Waze
              </button>

              {/* Uber shortcut */}
              <button
                onClick={handleOpenUber}
                className="py-3 px-4 rounded-xl bg-[#1c1c19] hover:bg-black text-white font-sans text-[10px] uppercase tracking-wider font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
              >
                <Car className="w-3.5 h-3.5 text-[#c5a059]" />
                Ir de Uber
              </button>
            </div>

            <div className="flex gap-2 items-center text-[#5c614d] text-xs pt-2 pl-1">
              <AlertCircle className="w-4 h-4 text-[#b35a38]" />
              <span>Dica: Toque no botão do <strong>Google Maps</strong> ou do <strong>Waze</strong> para ver as rotas automáticas do seu celular!</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
