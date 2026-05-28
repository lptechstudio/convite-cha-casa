/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { GALLERY_PHOTOS } from '../data';
import { Maximize2, X, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActivePhotoIndex(index);
  };

  const closeLightbox = () => {
    setActivePhotoIndex(null);
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex + 1) % GALLERY_PHOTOS.length);
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length);
    }
  };

  return (
    <div id="galeria-secao" className="w-full py-12">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
        {GALLERY_PHOTOS.map((photo, index) => (
          <div
            key={photo.id}
            onClick={() => openLightbox(index)}
            className="group relative h-96 rounded-3xl overflow-hidden shadow-md cursor-pointer border border-[#c5a059]/20"
          >
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500 z-10"></div>

            {/* Img with smooth scale hover */}
            <img
              src={photo.url}
              alt={photo.title}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out scale-100 group-hover:scale-108"
            />

            {/* Accent hover icon */}
            <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <Maximize2 className="w-5 h-5" />
            </div>

            {/* Floating details */}
            <div className="absolute bottom-0 inset-x-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 text-left">
              <div className="flex items-center gap-2 text-[#c5a059] mb-1">
                <Sparkles className="w-4 h-4" />
                <span className="font-sans text-[10px] uppercase tracking-widest font-bold">Inspiracional</span>
              </div>
              <h3 className="font-display text-xl text-white font-bold mb-1">
                {photo.title}
              </h3>
              <p className="font-sans text-xs text-white/80 line-clamp-2 max-w-sm font-medium">
                {photo.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Premium Lightbox Overlay */}
      {activePhotoIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-[600] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-8 animate-fade-in"
        >
          {/* Close trigger button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-[610] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/10"
            aria-label="Minimizar galeria"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={showPrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-[610] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={showNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-[610] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Active expanded image */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
          >
            <img
              src={GALLERY_PHOTOS[activePhotoIndex].url}
              alt={GALLERY_PHOTOS[activePhotoIndex].title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover animate-pulse-slow"
            />

            {/* Expanded Caption */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 sm:p-8 text-left">
              <h4 className="font-display text-2xl text-white font-bold mb-2">
                {GALLERY_PHOTOS[activePhotoIndex].title}
              </h4>
              <p className="font-sans text-sm text-white/90 max-w-2xl">
                {GALLERY_PHOTOS[activePhotoIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
