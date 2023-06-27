import fetchArtWorks from './art-api.js';
import displayPopUp from './displayPopUp.js';

const imageURL = 'https://www.artic.edu/iiif/2';

let artWorks = [];

const cardContainer = document.querySelector('.cardContainer');

const displayCards = () => {
  cardContainer.innerHTML = '';

  if (artWorks !== []) {
    artWorks.forEach(({ id, title, image }, index) => {
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

      // i get the ID of the comments buttons and add a event for them
      const commentsBtn = document.querySelector(`[id="${id}"]`);
      commentsBtn.addEventListener('click', () => {
        displayPopUp(artWorks[index]);
      });
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

  displayCards();
};

export default loadArtWorks;