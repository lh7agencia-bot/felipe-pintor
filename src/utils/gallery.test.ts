import test from 'node:test';
import assert from 'node:assert/strict';
import { GALLERY_ITEMS } from '../data/siteData';
import { filterGalleryItems, getNextLightboxIndex } from './gallery';

test('filterGalleryItems returns all items for Todos', () => {
  const result = filterGalleryItems(GALLERY_ITEMS, 'Todos');
  assert.equal(result.length, GALLERY_ITEMS.length);
});

test('filterGalleryItems filters accurately by category', () => {
  const interiors = filterGalleryItems(GALLERY_ITEMS, 'Interiores');
  assert.ok(interiors.length > 0);
  assert.ok(interiors.every((item) => item.category === 'Interiores'));

  const facades = filterGalleryItems(GALLERY_ITEMS, 'Fachadas');
  assert.equal(facades.length, 1);
  assert.equal(facades[0].id, 'fachada-residencial');
});

test('getNextLightboxIndex wraps forward and backward circularly', () => {
  assert.equal(getNextLightboxIndex(0, 6, 'next'), 1);
  assert.equal(getNextLightboxIndex(5, 6, 'next'), 0);
  assert.equal(getNextLightboxIndex(0, 6, 'prev'), 5);
  assert.equal(getNextLightboxIndex(3, 6, 'prev'), 2);
  assert.equal(getNextLightboxIndex(0, 0, 'next'), -1);
});

test('all gallery image paths point to /images/ inside public/images', () => {
  for (const item of GALLERY_ITEMS) {
    assert.ok(
      item.src.startsWith('/images/') && item.src.endsWith('.jpg'),
      `Expected public /images/*.jpg path, got ${item.src}`,
    );
  }
});
