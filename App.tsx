/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Calendar, 
  Clock, 
  Heart, 
  Share2, 
  CheckCircle, 
  ChevronRight, 
  Gift, 
  Maximize2, 
  Compass, 
  Info,
  Waves
} from 'lucide-react';
import { COUPLE_INFO, COLOR_PALETTE } from './data';
import Loader from './components/Loader';
import CoverEnvelope from './components/CoverEnvelope';
import MusicPlayer, { MusicPlayerRef } from './components/MusicPlayer';
import Countdown from './components/Countdown';
import Gallery from './components/Gallery';
import GiftRegistry from './components/GiftRegistry';
import LocationSection from './components/LocationSection';

export default function App() {
  const [isAppLoaded, setIsAppLoaded] = useState(false);
  const [isEnvelopeOpened, setIsEnvelopeOpened] = useState(false);
  const musicPlayerRef = useRef<MusicPlayerRef | null>(null);

  const handleOpenInvitation = () => {
    setIsEnvelopeOpened(true);
    // Programmatically trigger background music track after user tap bypass
    if (musicPlayerRef.current) {
      setTimeout(() => {
        musicPlayerRef.current?.play();
      }, 500);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#fdfaf6] text-[#1c1c19] selection:bg-[#c5a059]/20 font-sans">
      
      {/* 1. Preloader Overlay */}
      {!isAppLoaded && (
        <Loader onComplete={() => setIsAppLoaded(true)} />
      )}

      {/* 2. Interactive Outer Envelope Cover */}
      {isAppLoaded && !isEnvelopeOpened && (
        <CoverEnvelope onOpen={handleOpenInvitation} />
      )}

      {/* 3. Floating Music player (Kept unobtrusive in corner) */}
      <MusicPlayer ref={musicPlayerRef} />

      {/* 4. Core Guest Page Content */}
      <div 
        className={`transition-all duration-1000 ease-out ${
          isEnvelopeOpened ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        {/* Dynamic Subtle Aesthetic leaf wallpaper Background pattern */}
        <div 
          className="fixed inset-0 bg-cover bg-center opacity-5 select-none pointer-events-none z-0"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuD1JXdGVGFWnUoSKS1RDM1MPnYvbaHFVdMY8q8_d91S-VFrkcgd0su1krAXz4nPgIooOAtZNSeD7Ljd7MZ-rxqSYu1SGLsdtcH6F47PEP98sIOOG-epUV84WkSAQodm70Sp9U4hog2uPiY4NV7Rhml8qViWYIxs806R7aquw6rIwmi8YkHgkHD9ft1PgZRdiamAxKbViNh8VvZAD_jSUO6wfqYzEmrJp1oLoTNGikV6Rzkwx7DRHZyfJr6MVzbzFuOdO6YBB7-NE7hp')`
          }}
        ></div>

        {/* TOP COMPASS HEADER BAR */}
        <header className="w-full py-6 px-6 max-w-7xl mx-auto flex justify-between items-center relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#b35a38] animate-ping"></span>
            <span className="font-mono text-[9px] text-[#5c614d] tracking-[0.25em] uppercase font-bold">
              CONVITE INDIVIDUAL &middot; EXCLUSIVO
            </span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3d5a2c]/5 border border-[#3d5a2c]/10 text-[#3d5a2c] font-sans text-[10px] tracking-widest font-semibold uppercase">
            <Heart className="w-3 h-3 text-[#b35a38] fill-[#b35a38]/10 animate-pulse" />
            <span>Felipe &amp; Maria</span>
          </div>
        </header>

        {/* HERO INITIAL COVER GRID */}
        <main className="max-w-5xl mx-auto px-6 sm:px-8 pb-24 relative z-10 space-y-16">
          
          {/* AESTHETIC HERO CONTAINER */}
          <section className="pt-8 pb-12 flex flex-col items-center text-center relative">
            <div className="max-w-3xl glass-card rounded-[3.5rem] p-8 sm:p-16 border border-[#c5a059]/20 relative overflow-hidden shadow-sm animate-slide-up">
              
              {/* Gold leaf background layout */}
              <div className="absolute -top-16 -left-16 w-48 h-48 bg-[#c5a059]/5 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-[#b35a38]/5 rounded-full blur-2xl"></div>

              {/* Couple Stamp / Brand Logo Image centered */}
              <div className="relative mb-8 inline-block select-none pointer-events-none group">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#c5a059] to-[#b35a38] opacity-20 blur-sm"></div>
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-[#c5a059]/40 bg-[#3d5a2c]/5 flex items-center justify-center p-2 relative z-10 bg-white">
                  <img 
                    src="https://lh3.googleusercontent.com/aida/ADBb0uhMQj5AWTPZdcSyL1xGv3ldJqBszkXh_JK2hd72uGoceRa-aHeaIBfCB1xGNHpLdJ4p-WZhs-8HD8nZx0V6Md8AiFUHFFbygyiSDFbf0XOQQmLqS1c0FEIDHF6xOYy7zqS3nGfn82u1jlQnxJl3Z0JhD4mnmBt16zEk6Rq-fhNirUiZ3ofnaRbgn2D-2gBcHIldRuaRRT7HZduEEAw1w9C_qUcrlHuJWK1KchvItWNyF7Pk2Mg7ALcuLKSN"
                    alt="Selo Chá de Casa Nova" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain filter saturate-[0.95]"
                  />
                </div>
              </div>

              {/* Text metadata */}
              <p className="font-sans text-[11px] font-bold tracking-[0.45em] text-[#b35a38] uppercase mb-4">
                CHÁ DE CASA NOVA
              </p>
              
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#3d5a2c] leading-none mb-6">
                Nosso Primeiro Lar
              </h1>
              
              {/* Couple Names */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-4 mb-8">
                <span className="font-display text-2xl sm:text-3xl font-semibold italic text-[#b35a38]">{COUPLE_INFO.bride}</span>
                <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059]">e</span>
                <span className="font-display text-2xl sm:text-3xl font-semibold italic text-[#b35a38]">{COUPLE_INFO.groom}</span>
              </div>

              <div className="h-[1px] w-24 bg-[#c5a059]/30 mx-auto mb-8"></div>

              {/* Phrase with rich text pairing */}
              <p className="font-sans text-sm sm:text-base text-[#5c614d] leading-relaxed max-w-xl mx-auto italic">
                "{COUPLE_INFO.welcomePhrase}"
              </p>

              {/* Quick event coordinates overlay */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-10 border-t border-[#f1eee4] text-left">
                {/* Date */}
                <div className="p-4 rounded-2xl bg-[#3d5a2c]/5 border border-[#3d5a2c]/10 flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-xl bg-white text-[#3d5a2c] flex items-center justify-center shadow-sm">
                    <Calendar className="w-5 h-5 font-light" />
                  </div>
                  <div>
                    <span className="block font-mono text-[9px] text-[#5c614d] uppercase tracking-wider font-bold">DIA DO EVENTO</span>
                    <span className="font-sans text-sm font-bold text-[#1c1c19]">{COUPLE_INFO.dateFormatted}</span>
                  </div>
                </div>

                {/* Time */}
                <div className="p-4 rounded-2xl bg-[#b35a38]/5 border border-[#b35a38]/10 flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-xl bg-white text-[#b35a38] flex items-center justify-center shadow-sm">
                    <Clock className="w-5 h-5 font-light" />
                  </div>
                  <div>
                    <span className="block font-mono text-[9px] text-[#5c614d] uppercase tracking-wider font-bold">HORÁRIO</span>
                    <span className="font-sans text-sm font-bold text-[#1c1c19]">{COUPLE_INFO.timeFormatted}</span>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* SECTION: COUNTDOWN */}
          <section className="text-center space-y-6">
            <Countdown targetDate={COUPLE_INFO.date} />
          </section>

          {/* DECORATIVE SEPARATOR */}
          <div className="flex items-center justify-center gap-4 py-4 opacity-40 select-none">
            <div className="h-[1px] w-16 bg-[#c5a059]"></div>
            <Heart className="w-3.5 h-3.5 text-[#b35a38]" />
            <div className="h-[1px] w-16 bg-[#c5a059]"></div>
          </div>

          {/* SECTION: SUGGESTED PRESENT REGISTRY */}
          <section className="space-y-8">
            <div className="text-center max-w-xl mx-auto space-y-3">
              <span className="font-mono text-[10px] text-[#b35a38] uppercase tracking-[0.3em] font-bold">ELEGÂNCIA & CONFORTO</span>
              <h2 className="font-display text-3.5xl sm:text-5xl font-bold text-[#3d5a2c] tracking-tight">
                Lista de Sugestões de Presentes
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#5c614d] max-w-md mx-auto">
                Sua presença é o nosso maior presente! Se desejar nos apoiar na montagem da nossa casinha, selecione um item nas categorias abaixo.
              </p>
            </div>

            <GiftRegistry />
          </section>

          {/* DECORATIVE SEPARATOR */}
          <div className="flex items-center justify-center gap-4 py-4 opacity-40 select-none">
            <div className="h-[1px] w-16 bg-[#c5a059]"></div>
            <Heart className="w-3.5 h-3.5 text-[#b35a38]" />
            <div className="h-[1px] w-16 bg-[#c5a059]"></div>
          </div>

          {/* SECTION: FUTURE HOUSE GALLERY RENDERS */}
          <section className="space-y-8">
            <div className="text-center max-w-xl mx-auto space-y-3">
              <span className="font-mono text-[10px] text-[#b35a38] uppercase tracking-[0.3em] font-bold">INSPIRATIVO BOHO</span>
              <h2 className="font-display text-3.5xl sm:text-5xl font-bold text-[#3d5a2c] tracking-tight">
                Nosso Lar em Detalhes
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#5c614d] max-w-md mx-auto">
                Preparamos uma galeria visual com as principais decorações e ambientes que inspiram o nosso projeto de vida.
              </p>
            </div>

            <Gallery />
          </section>

          {/* SECTION: DECORATION COLOR SCHEME */}
          <section className="space-y-8 pt-6">
            <div className="glass-card rounded-[3.5rem] p-8 sm:p-14 border border-white text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#c5a059]/5 rounded-bl-[10rem] pointer-events-none"></div>
              
              <div className="max-w-xl mx-auto space-y-4 mb-12">
                <span className="font-mono text-[10px] text-[#c5a059] uppercase tracking-[0.3em] font-bold">PALETA COORDENADA</span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#3d5a2c]">Cores do Nosso Lar</h2>
                <p className="font-sans text-xs sm:text-sm text-[#5c614d]">
                  Caso deseje nos presentear com itens decorativos ou utilitários coordenados, essas são as tonalidades que guiam a paleta do nosso novo endereço.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                {/* Color Block 1 */}
                <div className="flex flex-col items-center gap-3 group">
                  <div 
                    className="w-16 h-16 rounded-full shadow-md border border-black/5 ring-4 ring-[#f1eee4] group-hover:scale-108 transition-all duration-300"
                    style={{ backgroundColor: COLOR_PALETTE.white.hex }}
                  ></div>
                  <div>
                    <span className="block font-sans text-sm font-bold text-[#1c1c19]">{COLOR_PALETTE.white.name}</span>
                    <span className="block font-mono text-[9px] text-[#5c614d]">{COLOR_PALETTE.white.hex}</span>
                  </div>
                </div>

                {/* Color Block 2 */}
                <div className="flex flex-col items-center gap-3 group">
                  <div 
                    className="w-16 h-16 rounded-full shadow-md border border-black/5 ring-4 ring-[#f1eee4] group-hover:scale-108 transition-all duration-300"
                    style={{ backgroundColor: COLOR_PALETTE.iceGray.hex }}
                  ></div>
                  <div>
                    <span className="block font-sans text-sm font-bold text-[#1c1c19]">{COLOR_PALETTE.iceGray.name}</span>
                    <span className="block font-mono text-[9px] text-[#5c614d]">{COLOR_PALETTE.iceGray.hex}</span>
                  </div>
                </div>

                {/* Color Block 3 */}
                <div className="flex flex-col items-center gap-3 group">
                  <div 
                    className="w-16 h-16 rounded-full shadow-md border border-black/5 ring-4 ring-[#f1eee4] group-hover:scale-108 transition-all duration-300"
                    style={{ backgroundColor: COLOR_PALETTE.olive.hex }}
                  ></div>
                  <div>
                    <span className="block font-sans text-sm font-bold text-[#1c1c19]">{COLOR_PALETTE.olive.name}</span>
                    <span className="block font-mono text-[9px] text-[#5c614d]">{COLOR_PALETTE.olive.hex}</span>
                  </div>
                </div>

                {/* Color Block 4 */}
                <div className="flex flex-col items-center gap-3 group">
                  <div 
                    className="w-16 h-16 rounded-full shadow-md border border-black/5 ring-4 ring-[#f1eee4] group-hover:scale-108 transition-all duration-300"
                    style={{ backgroundColor: COLOR_PALETTE.terracotta.hex }}
                  ></div>
                  <div>
                    <span className="block font-sans text-sm font-bold text-[#1c1c19]">{COLOR_PALETTE.terracotta.name}</span>
                    <span className="block font-mono text-[9px] text-[#5c614d]">{COLOR_PALETTE.terracotta.hex}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* DECORATIVE SEPARATOR */}
          <div className="flex items-center justify-center gap-4 py-4 opacity-40 select-none">
            <div className="h-[1px] w-16 bg-[#c5a059]"></div>
            <Heart className="w-3.5 h-3.5 text-[#b35a38]" />
            <div className="h-[1px] w-16 bg-[#c5a059]"></div>
          </div>

          {/* SECTION: MAPS & NAVIGATION LINKS */}
          <section className="space-y-8">
            <div className="text-center max-w-xl mx-auto space-y-3">
              <span className="font-mono text-[10px] text-[#b35a38] uppercase tracking-[0.3em] font-bold">COBRANÇA DE ROTAS</span>
              <h2 className="font-display text-3.5xl sm:text-5xl font-bold text-[#3d5a2c] tracking-tight">
                Localização &amp; Direções
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#5c614d] max-w-sm mx-auto">
                Facilitamos seu trajeto! Toque abaixo para abrir sua ferramenta preferida de mobilidade urbana e receber rotas guiadas.
              </p>
            </div>

            <LocationSection />
          </section>

          {/* SECTION: EXPANDED RSVP CONFIRMATION DEEP LINK */}
          <section className="pt-8">
            <div className="glass-card rounded-[3.5rem] p-8 sm:p-16 border-2 border-[#c5a059]/30 text-center relative overflow-hidden shadow-md max-w-3xl mx-auto">
              
              {/* Abs bottom leaves decor stamp */}
              <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-[#3d5a2c]/5 rounded-full pointer-events-none"></div>
              
              <div className="space-y-6 max-w-xl mx-auto">
                <span className="inline-flex justify-center w-12 h-12 rounded-full bg-[#b35a38]/10 text-[#b35a38]">
                  <Heart className="w-6 h-6 m-auto fill-[#b35a38]/10 text-[#b35a38]" />
                </span>
                
                <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#3d5a2c] tracking-tight">
                  Esperamos por Você!
                </h2>
                <div className="h-[1.5px] w-16 bg-[#b35a38] mx-auto"></div>
                
                <p className="font-sans text-sm sm:text-base text-[#5c614d] leading-relaxed italic max-w-md mx-auto">
                  Sua amizade e abraço caloroso tornarão esta nova etapa inesquecível. Por gentileza, confirme sua presença o quanto antes para nos ajudar na organização!
                </p>

                <div className="pt-6">
                  <button
                    onClick={() => {
                      const text = "Olá Felipe e Maria! Confirmando minha maravilhosa presença no Chá de Casa Nova de vocês!";
                      window.open(`https://wa.me/${COUPLE_INFO.whatsAppNumber}?text=${encodeURIComponent(text)}`, '_blank');
                    }}
                    className="w-full sm:w-auto px-10 py-5 rounded-full bg-[#b35a38] hover:bg-[#91462a] text-white font-sans text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-3.5 shadow-lg hover:shadow-xl active:scale-95 transition-all cursor-pointer duration-300"
                  >
                    <CheckCircle className="w-5 h-5" />
                    Confirmar Presença no WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </section>

        </main>

        {/* BRIGHT FOOTER ACCENT */}
        <footer className="w-full py-12 px-6 border-t border-[#f1eee4] text-center relative z-10 bg-[#fbf9f4]">
          <div className="max-w-md mx-auto space-y-4">
            <h4 className="font-display text-xl text-[#3d5a2c] font-bold">
              Felipe &amp; Maria
            </h4>
            <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#c5a059] font-bold">
              Montes Claros, SP &middot; Lar Doce Lar &middot; 2026
            </p>
            <div className="h-[1px] w-12 bg-[#c5a059]/40 mx-auto"></div>
            <p className="font-sans text-[9px] text-[#5c614d] italic tracking-wider">
              Feito com carinho para celebrar amor, conquistas e união.
            </p>
          </div>
        </footer>
      </div>

    </div>
  );
}
