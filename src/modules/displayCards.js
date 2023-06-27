import fetchArtWorks from './art-api.js';

const imageURL = 'https://www.artic.edu/iiif/2';

let artWorks = [];

const loadArtWorks = async () => {
  const artWorksAllInfo = await fetchArtWorks();
  artWorks = artWorksAllInfo.map((art) => ({
    id: art.id,
    title: art.title,
    artistInfo: art.artist_display,
    image: `${imageURL}/${art.image_id}/full/843,/0/default.jpg`,
  }));
  console.log(artWorks);
};

window.addEventListener('DOMContentLoaded', loadArtWorks);