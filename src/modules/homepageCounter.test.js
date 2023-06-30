/**
 * @jest-environment jsdom
 */

import homepageCounter from './homepageCounter.js';

describe('homepageCounter', () => {
  test('Check if the gallery\'s textContext matches with expected text', () => {
    document.body.innerHTML = `
      <div id="gallery">
        <article class="card"></article>
        <article class="card"></article>
        <article class="card"></article>
      </div>
    `;

    homepageCounter();

    const galleryCounter = document.getElementById('gallery');
    expect(galleryCounter.textContent).toBe('Gallery (3)');
  });

  test('Counts the number of card elements correctly', () => {
    document.body.innerHTML = `
      <div id="gallery">
        <article class="card"></article>
        <article class="card"></article>
        <article class="card"></article>
        <article class="card"></article>
        <article class="card"></article>
        <article class="card"></article>
        <article class="card"></article>
        <article class="card"></article>
        <article class="card"></article>
      </div>
    `;

    homepageCounter();

    const galleryCounter = document.getElementById('gallery');
    const counterText = galleryCounter.textContent;
    const counterNumber = parseInt(counterText.match(/\d+/), 10);
    expect(counterNumber).toBe(9);
  });
});