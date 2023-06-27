import fetchArtWorks from './art-api.js';

const imageURL = 'https://www.artic.edu/iiif/2';

let artWorks = [];

const displayCards = () => {
  const cardContainer = document.querySelector('.cards');

  cardContainer.innerHTML = '';

  if (artWorks !== []) {
    artWorks.forEach(({ id, title, image }) => {
      const card = document.createElement('article');
      card.classList.add('card');

      card.innerHTML = `
        <img src="${image}" alt="${title}" class="card-image">

        <h3 class="card-title">
          ${title}
        </h3>

        <button type="button" class="commentsBtn" id="${id}">
          Comments
        </button>

        <button type="button" class="resBtn" id="${id}">
          Reservations
        </button>
      `;

      cardContainer.appendChild(card);
    });
  } else {
    cardContainer.innerHTML = 'No cards to show! :(';
  }
};

const loadArtWorks = async () => {
  const artWorksAllInfo = await fetchArtWorks();
  artWorks = artWorksAllInfo.map((art) => ({
    id: art.id,
    title: art.title,
    artistInfo: art.artist_display,
    image: `${imageURL}/${art.image_id}/full/843,/0/default.jpg`,
  }));
  console.log(artWorks);
  displayCards();
};

export default loadArtWorks;