import { useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { GalleryItem } from '../data/siteData';
import { ResilientImage } from './ResilientImage';

interface LightboxModalProps {
  item: GalleryItem;
  currentIndex: number;
  totalItems: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function LightboxModal({
  item,
  currentIndex,
  totalItems,
  onClose,
  onPrev,
  onNext,
}: LightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowLeft') {
        onPrev();
      } else if (event.key === 'ArrowRight') {
        onNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-xs sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-xl border border-white/15 bg-slate-900 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3 text-xs font-medium text-slate-300">
            <span className="text-[#1D9BF0]">{item.category}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">
              {currentIndex + 1} / {totalItems}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar visualizador de foto"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="relative flex min-h-[260px] flex-1 items-center justify-center bg-slate-950">
          <ResilientImage
            src={item.src}
            alt={item.alt}
            title={item.title}
            className="max-h-[64vh] w-full object-contain"
          />

          {totalItems > 1 && (
            <>
              <button
                type="button"
                onClick={onPrev}
                aria-label="Foto anterior"
                className="absolute left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-lg bg-slate-900/80 text-white transition-colors hover:bg-[#0B3D91] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={onNext}
                aria-label="Próxima foto"
                className="absolute right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-lg bg-slate-900/80 text-white transition-colors hover:bg-[#0B3D91] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </>
          )}
        </div>

        <div className="border-t border-white/10 bg-slate-900 px-4 py-4 sm:px-6">
          <h3 id="lightbox-title" className="font-display text-lg font-bold text-white">
            {item.title}
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-slate-300">{item.description}</p>
        </div>
      </div>
    </div>
  );
}
