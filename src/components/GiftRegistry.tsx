/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { SUGGESTED_GIFTS, COUPLE_INFO } from '../data';
import { GiftItem, GiftCategory } from '../types';
import { Gift, CheckCircle, Circle, ArrowRight, Sparkles, User, HelpCircle, Coffee, Eye, Heart, Check } from 'lucide-react';

export default function GiftRegistry() {
  const [selectedCategory, setSelectedCategory] = useState<GiftCategory | null>(null);
  const [selectedGift, setSelectedGift] = useState<GiftItem | null>(null);
  const [guestName, setGuestName] = useState('');
  const [localReservations, setLocalReservations] = useState<string[]>([]);
  const [seededReservations, setSeededReservations] = useState<string[]>([]);

  useEffect(() => {
    // Load reserved items from client localStorage
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('cha-casa-nova-gifts-reserved');
      if (stored) {
        setLocalReservations(JSON.parse(stored));
      }

      // Seed some pre-selected items to make registry look authentic and active
      // These items are seeded only once if not previously randomized
      let seeded = localStorage.getItem('cha-casa-nova-seeded-gifts');
      if (!seeded) {
        // Randomly pick a few items to show as already gifted by others
        const pool = SUGGESTED_GIFTS.filter(g => g.id !== 'k1' && g.id !== 'k2' && g.id !== 'b1'); // assure main items remain free
        const shuffled = [...pool].sort(() => 0.5 - Math.random());
        const picked = shuffled.slice(0, 6).map(g => g.id);
        localStorage.setItem('cha-casa-nova-seeded-gifts', JSON.stringify(picked));
        setSeededReservations(picked);
      } else {
        setSeededReservations(JSON.parse(seeded));
      }
    }
  }, []);

  const handleSelectCategory = (cat: GiftCategory) => {
    setSelectedCategory(cat);
    setSelectedGift(null);
  };

  const closeCategoryModal = () => {
    setSelectedCategory(null);
    setSelectedGift(null);
  };

  const handleSelectItem = (gift: GiftItem) => {
    setSelectedGift(gift);
  };

  const handleConfirmReservation = () => {
    if (!selectedGift) return;
    if (!guestName.trim()) {
      alert("Por favor, informe seu nome para continuarmos!");
      return;
    }

    const updated = [...localReservations, selectedGift.id];
    setLocalReservations(updated);
    if (typeof window !== 'undefined') {
      localStorage.setItem('cha-casa-nova-gifts-reserved', JSON.stringify(updated));
    }

    // Compose optimized WhatsApp reservation note
    const templateMessage = `Olá Felipe e Maria! 🏡✨\n\nGostaria de confirmar que escolhi presentear vocês com o item de Chá de Casa Nova:\n🎁 *${selectedGift.name}*\n\nAbraços e nos vemos em breve!\n- Assinado: *${guestName.trim()}*`;
    const whatsappUrl = `https://wa.me/${COUPLE_INFO.whatsAppNumber}?text=${encodeURIComponent(templateMessage)}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Close Modal safely
    setSelectedCategory(null);
    setSelectedGift(null);
    setGuestName('');
  };

  const isGiftReserved = (giftId: string) => {
    return localReservations.includes(giftId) || seededReservations.includes(giftId);
  };

  const isGiftReservedByMe = (giftId: string) => {
    return localReservations.includes(giftId);
  };

  const getCategoryProgress = (cat: GiftCategory) => {
    const total = SUGGESTED_GIFTS.filter(g => g.category === cat).length;
    const gifted = SUGGESTED_GIFTS.filter(g => g.category === cat && isGiftReserved(g.id)).length;
    return {
      percent: Math.round((gifted / total) * 100),
      label: `${gifted} de ${total} sugeridos`
    };
  };

  const categoriesConfig: { name: GiftCategory; description: string; icon: string; borderClass: string; bgLight: string; textClass: string }[] = [
    { name: 'Cozinha', description: 'Utensílios, refratários e eletros', icon: 'restaurant', borderClass: 'border-l-[#3d5a2c]', bgLight: 'bg-[#3d5a2c]/5', textClass: 'text-[#3d5a2c]' },
    { name: 'Sala', description: 'Almofadas, mantas e adornos', icon: 'living', borderClass: 'border-l-[#b35a38]', bgLight: 'bg-[#b35a38]/5', textClass: 'text-[#b35a38]' },
    { name: 'Quarto', description: 'Lençóis, almofadas e enxovais', icon: 'bedtime', borderClass: 'border-l-[#c5a059]', bgLight: 'bg-[#c5a059]/5', textClass: 'text-[#c5a059]' },
    { name: 'Banheiro', description: 'Cestos, toalhas e utilitários', icon: 'wash', borderClass: 'border-l-[#3d5a2c]', bgLight: 'bg-[#3d5a2c]/5', textClass: 'text-[#3d5a2c]' },
    { name: 'Lavanderia', description: 'Varal, cestos e organização', icon: 'laundry', borderClass: 'border-l-[#b35a38]', bgLight: 'bg-[#b35a38]/5', textClass: 'text-[#b35a38]' }
  ];

  return (
    <div id="presentes-container" className="w-full">
      {/* Category Selection Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoriesConfig.map((catSpec) => {
          const progress = getCategoryProgress(catSpec.name);
          return (
            <button
              key={catSpec.name}
              onClick={() => handleSelectCategory(catSpec.name)}
              className={`group glass-card text-left p-8 rounded-3xl cursor-pointer hover:-translate-y-1 transition-all duration-300 border-l-[6px] ${catSpec.borderClass} relative overflow-hidden`}
            >
              {/* Abs hover stamp */}
              <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-white/5 group-hover:bg-amber-100/10 group-hover:scale-110 transition-transform duration-500 flex items-center justify-center">
                <span className={`material-symbols-outlined text-6xl ${catSpec.textClass} opacity-10 font-light`}>
                  {catSpec.icon}
                </span>
              </div>

              <div className="flex items-start justify-between gap-4 mb-4">
                <div className={`w-14 h-14 rounded-2xl ${catSpec.bgLight} flex items-center justify-center ${catSpec.textClass}`}>
                  <span className="material-symbols-outlined text-3xl font-light">{catSpec.icon}</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f1eee4] text-[#1c1c19] text-[10px] font-mono tracking-widest uppercase font-bold">
                  {progress.percent}% Concluído
                </div>
              </div>

              <h3 className="font-display text-2xl text-[#3d5a2c] font-bold mb-1">
                {catSpec.name}
              </h3>
              <p className="font-sans text-xs text-[#5c614d] mb-6">
                {catSpec.description}
              </p>

              {/* Minimal Progress Bar */}
              <div className="w-full space-y-1.5">
                <div className="w-full h-1.5 bg-[#f1eee4] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#3d5a2c] to-[#c5a059] rounded-full transition-all duration-500"
                    style={{ width: `${progress.percent}%` }}
                  ></div>
                </div>
                <div className="flex justify-between items-center text-[10px] font-mono font-semibold text-[#5c614d] uppercase tracking-wider">
                  <span>{progress.label}</span>
                  <span className="inline-flex items-center gap-0.5 text-[#b35a38] font-bold group-hover:translate-x-1 transition-all">
                    Sugerir <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Specialty interactive Modal for items */}
      {selectedCategory && (
        <div
          onClick={closeCategoryModal}
          className="fixed inset-0 z-[600] bg-[#2e3b23]/45 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-[2.5rem] w-full max-w-lg p-6 sm:p-10 shadow-2xl border border-[#c5a059]/20 flex flex-col max-h-[85vh] animate-slide-up"
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-8 pb-4 border-b border-[#f1eee4]">
              <div>
                <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#b35a38] font-bold mb-0.5">
                  SUGESTÕES DE PRESENTES
                </p>
                <h3 className="font-display text-3xl text-[#3d5a2c] font-bold">
                  {selectedCategory}
                </h3>
              </div>
              <button
                onClick={closeCategoryModal}
                className="w-10 h-10 rounded-full bg-[#fdfaf6] border border-[#f1eee4] hover:bg-[#f1eee4] text-[#1c1c19] flex items-center justify-center transition-colors"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>

            {/* Scrollable list of items */}
            <div className="overflow-y-auto flex-1 pr-2 space-y-4 mb-4">
              {SUGGESTED_GIFTS.filter((gift) => gift.category === selectedCategory).map((gift) => {
                const reserved = isGiftReserved(gift.id);
                const reservedByMe = isGiftReservedByMe(gift.id);
                const isSelected = selectedGift?.id === gift.id;

                return (
                  <button
                    key={gift.id}
                    disabled={reserved && !reservedByMe}
                    onClick={() => handleSelectItem(gift)}
                    className={`w-full flex items-center justify-between p-4 rounded-2xl text-left transition-all border outline-none ${
                      reserved && !reservedByMe
                        ? 'bg-[#fcf9f4] border-[#f1eee4]/70 opacity-55 cursor-not-allowed'
                        : isSelected
                        ? 'bg-[#3d5a2c]/5 border-[#3d5a2c] ring-1 ring-[#3d5a2c]/20'
                        : 'bg-white hover:bg-[#fdfaf6] border-[#f1eee4] hover:border-[#c5a059]'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Status indicator stamp */}
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        reserved
                          ? 'bg-[#3d5a2c]/10 text-[#3d5a2c]'
                          : isSelected
                          ? 'bg-[#3d5a2c] text-white'
                          : 'bg-[#fdfaf6] border border-[#f1eee4] text-[#c5a059]'
                      }`}>
                        {reserved ? (
                          <Check className="w-5 h-5 font-bold" />
                        ) : isSelected ? (
                          <Heart className="w-4 h-4 fill-white" />
                        ) : (
                          <Gift className="w-5 h-5 font-light" />
                        )}
                      </div>

                      <div>
                        <span className={`font-sans text-sm md:text-base font-semibold block ${
                          reserved ? 'text-[#5c614d] line-through italic' : 'text-[#1c1c19]'
                        }`}>
                          {gift.name}
                        </span>
                        {/* Reference range badge */}
                        {gift.suggestedValuePin && (
                          <span className="font-sans text-[10px] text-[#c5a059] font-bold uppercase tracking-wider block mt-0.5">
                            Ref: R$ {gift.suggestedValuePin}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="text-right pl-4">
                      {reservedByMe ? (
                        <span className="px-2.5 py-1 rounded-full bg-[#3d5a2c]/10 text-[#3d5a2c] font-sans text-[9px] uppercase tracking-wider font-bold">
                          Reservado por mim
                        </span>
                      ) : reserved ? (
                        <span className="px-2.5 py-1 rounded-full bg-red-50 text-[#b35a38]/80 font-sans text-[9px] uppercase tracking-wider font-bold">
                          Reservado
                        </span>
                      ) : isSelected ? (
                        <div className="w-5 h-5 rounded-full bg-[#3d5a2c] flex items-center justify-center text-white scale-125 transition-transform">
                          <CheckCircle className="w-5 h-5 p-0.5" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-[#1c1c19]/10 group-hover:border-[#3d5a2c] transition-colors"></div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Reservation form wrapper inline */}
            {selectedGift && !isGiftReserved(selectedGift.id) && (
              <div className="pt-6 border-t border-[#f1eee4] space-y-6 animate-slide-up">
                <div className="p-4 rounded-2xl bg-[#b35a38]/5 border border-[#b35a38]/10 flex items-center gap-4 text-left">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#b35a38] shadow-sm">
                    <Heart className="w-5 h-5 fill-[#b35a38]" />
                  </div>
                  <div>
                    <span className="font-sans text-[10px] uppercase font-bold text-[#b35a38]/80 tracking-wider">PRESENTE SELECIONADO</span>
                    <p className="font-sans text-sm font-bold text-[#1c1c19] tracking-tight">{selectedGift.name}</p>
                  </div>
                </div>

                <div className="space-y-2 text-left">
                  <label htmlFor="guest-name-field" className="block font-sans text-xs uppercase tracking-widest font-bold text-[#5c614d] pl-1">
                    Seu Nome Completo
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-4 flex items-center text-[#5c614d]">
                      <User className="w-4 h-4" />
                    </span>
                    <input
                      id="guest-name-field"
                      type="text"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      placeholder="Ex: Ana Luísa"
                      className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-[#f1eee4] focus:ring-2 focus:ring-[#b35a38] focus:border-[#b35a38] outline-none font-sans text-sm bg-[#fdfaf6]"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleConfirmReservation}
                  className="w-full py-4 rounded-full bg-[#b35a38] hover:bg-[#91462a] text-white font-sans text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl active:scale-95 transition-all cursor-pointer duration-300"
                >
                  <Sparkles className="w-4 h-4" />
                  Confirmar Choice via WhatsApp
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
