const homepageCounter = () => {
  const allCards = document.querySelectorAll('.card');
  const galleryCounter = document.getElementById('gallery');
  galleryCounter.textContent = `Gallery (${allCards.length})`;
};

export default homepageCounter;