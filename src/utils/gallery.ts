import type { GalleryCategory, GalleryItem } from '../data/siteData';

export function filterGalleryItems(
  items: readonly GalleryItem[],
  category: GalleryCategory,
): GalleryItem[] {
  if (category === 'Todos') {
    return [...items];
  }
  return items.filter((item) => item.category === category);
}

export function getNextLightboxIndex(
  currentIndex: number,
  total: number,
  direction: 'prev' | 'next',
): number {
  if (total <= 0) {
    return -1;
  }
  if (direction === 'next') {
    return (currentIndex + 1) % total;
  }
  return (currentIndex - 1 + total) % total;
}
