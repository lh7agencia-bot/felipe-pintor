import { useState } from 'react';
import { Expand } from 'lucide-react';
import {
  GALLERY_CATEGORIES,
  GALLERY_ITEMS,
  type GalleryCategory,
} from '../data/siteData';
import { filterGalleryItems, getNextLightboxIndex } from '../utils/gallery';
import { LightboxModal } from './LightboxModal';
import { ResilientImage } from './ResilientImage';

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('Todos');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visibleItems = filterGalleryItems(GALLERY_ITEMS, selectedCategory);
  const activeItem = lightboxIndex !== null ? visibleItems[lightboxIndex] ?? null : null;

  const handleCategoryChange = (category: GalleryCategory) => {
    setSelectedCategory(category);
    setLightboxIndex(null);
  };

  const handleNavigate = (direction: 'prev' | 'next') => {
    if (lightboxIndex === null) return;
    const nextIdx = getNextLightboxIndex(lightboxIndex, visibleItems.length, direction);
    setLightboxIndex(nextIdx >= 0 ? nextIdx : null);
  };

  return (
    <section id="galeria" className="border-t border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-md">
            <p className="text-sm font-semibold text-[#1D9BF0]">Portfólio de Projetos</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl [text-wrap:balance]">
              Galeria de acabamentos realizados
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Clique em qualquer fotografia para ampliar os detalhes no visualizador.
            </p>
          </div>

          <div
            role="group"
            aria-label="Filtrar projetos por categoria"
            className="flex flex-wrap items-center gap-1 rounded-lg bg-slate-100 p-1 shrink-0 lg:flex-nowrap"
          >
            {GALLERY_CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => handleCategoryChange(category)}
                  className={`min-h-[38px] rounded-md px-3 py-1.5 text-sm font-semibold whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B3D91] ${
                    isActive
                      ? 'bg-[#1D9BF0] text-[#06204A]'
                      : 'text-slate-600 hover:bg-white hover:text-[#0B3D91]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div
          data-testid="gallery-grid"
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {visibleItems.map((item, index) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white"
            >
              <button
                type="button"
                onClick={() => setLightboxIndex(index)}
                aria-label={`Ampliar foto: ${item.title}`}
                className="block w-full text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <ResilientImage
                    src={item.src}
                    alt={item.alt}
                    title={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute right-3 bottom-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900/75 text-white opacity-90 transition-opacity duration-150 group-hover:opacity-100"
                  >
                    <Expand className="h-4 w-4" />
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                    <span className="text-[#0B3D91]">{item.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>Clique para ampliar</span>
                  </div>
                  <h3 className="mt-1.5 font-display text-lg font-bold text-slate-900 transition-colors group-hover:text-[#0B3D91]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              </button>
            </article>
          ))}
        </div>
      </div>

      {activeItem && lightboxIndex !== null && (
        <LightboxModal
          item={activeItem}
          currentIndex={lightboxIndex}
          totalItems={visibleItems.length}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => handleNavigate('prev')}
          onNext={() => handleNavigate('next')}
        />
      )}
    </section>
  );
}
