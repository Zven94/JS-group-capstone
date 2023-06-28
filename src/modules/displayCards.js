import fetchArtWorks from './art-api.js';
import displayPopUp from './displayPopUp.js';
import { sendLike, loadLikes } from './involvement-api.js';

const imageURL = 'https://www.artic.edu/iiif/2';
const defaultImageID = '81de18bc-32e5-eb9d-c84d-4493ae3e9b89';

let artWorks = [];

const cardContainer = document.querySelector('.cardContainer');

const displayCards = (artWorks) => {
  cardContainer.innerHTML = '';

  if (artWorks !== []) {
    artWorks.forEach(({
      id, title, image, likes,
    }, index) => {
      const card = document.createElement('article');
      card.classList.add('card');

      card.innerHTML = `
        <img src="${image}" alt="${title}" class="card-image">

        <h3 class="card-title">
          ${title}
        </h3>

        <div class="like-count">
          <button type="button" class="likesBtn" selector="${id}">
            <i class="fa-solid fa-heart fa-2xl"></i>
          </button>

          <h4>
            ${likes} likes
          </h4>
        </div>

        <button type="button" class="commentsBtn" id="${id}">
          Comments
        </button>

        <button type="button" class="resBtn">
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

const attachLikeListeners = () => {
  const allLikesBtns = document.querySelectorAll('.likesBtn');
  allLikesBtns.forEach((button) => {
    const itemID = button.getAttribute('selector');
    const likeCount = button.nextElementSibling;

    button.addEventListener('click', async () => {
      await sendLike(itemID);
      const updatedLikes = await loadLikes();

      const newLike = updatedLikes.find((like) => like.item_id === itemID)?.likes || 0;
      likeCount.textContent = `${newLike} likes`;

      console.log('liked it');
      // window.location.reload();
    });
  });
};

const loadArtWorks = async () => {
  const artWorksAllInfo = await fetchArtWorks();
  const allLikes = await loadLikes();
  const likesArray = allLikes.map((item) => ({
    likeID: Number(item.item_id),
    likeCount: item.likes,
  }));

  artWorks = artWorksAllInfo.map((art) => ({
    id: art.id,
    title: art.title,
    artistInfo: art.artist_display,
    imageID: art.image_id,
    image: art.image_id === null ? `${imageURL}/${defaultImageID}/full/843,/0/default.jpg` : `${imageURL}/${art.image_id}/full/843,/0/default.jpg`,
    likes: likesArray.reduce((count, item) => {
      if (item.likeID === art.id) {
        return item.likeCount;
      }
      return count;
    }, 0),
  }));

  displayCards(artWorks);
  attachLikeListeners();
};

export default loadArtWorks;