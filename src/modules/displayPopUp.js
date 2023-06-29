import { loadFunction, addNewComment } from './manageComments.js';

const appId = 'K1MYTt3Lfcx3nGJb1us2';

const displayPopUp = (myElement) => {
  const popUpDiv = document.querySelector('.capstone-header-popUp-hide');
  const parentPopUp = document.querySelector('.capstone-popUp-noneBlur');

  popUpDiv.classList.add('capstone-header-popUp-display');
  popUpDiv.classList.remove('capstone-header-popUp-hide');

  const articleDisplay = document.createElement('article');
  const articleMainDiv = document.createElement('div');
  const articleFormDiv = document.createElement('form');

  articleMainDiv.classList.add('myArticle-div-Main');
  articleFormDiv.classList.add('myArticle-form-Div');

  popUpDiv.appendChild(articleMainDiv);
  articleMainDiv.appendChild(articleDisplay);
  articleMainDiv.appendChild(articleFormDiv);

  articleDisplay.classList.add('myArticle-style');

  parentPopUp.classList.add('capstone-popUp-blur');
  parentPopUp.classList.remove('capstone-popUp-noneBlur');

  articleDisplay.innerHTML = `

   <h3>${myElement.title}</h3>
   <img src="${myElement.image}" class= "card-image">
   <p>Artist info: ${myElement.artistInfo}</p>
   <h3>ID: ${myElement.id}</h3>
   `;

  articleFormDiv.innerHTML = `
    <input placeholder="add your name" class='form-user'>
    <textarea placeholder="add your comment here..." class='form-comment' type="text" ></textarea>
    <button class="submitComment">Submit</button>
   `;

  loadFunction(appId, myElement.id);

  const submitInput = document.querySelector('.submitComment');

  submitInput.addEventListener('click', (event) => {
    event.preventDefault();
    addNewComment(appId, myElement.id);
    loadFunction(appId, myElement.id);
    while (document.querySelector('.ulComments')) {
      document.querySelector('.ulComments').remove();
      document.querySelector('.h2Comments').remove();
    }
  });

  // function to close the article
  const closeBtn = document.querySelector('.div-popUp-close');
  closeBtn.addEventListener('click', () => {
    popUpDiv.classList.add('capstone-header-popUp-hide');
    popUpDiv.classList.remove('capstone-header-popUp-display');
    parentPopUp.classList.remove('capstone-popUp-blur');
    parentPopUp.classList.add('capstone-popUp-noneBlur');

    while (document.querySelector('.myArticle-style')) {
      document.querySelector('.myArticle-style').remove();
      document.querySelector('.myArticle-div-Main').remove();
    }
  });
};

export default displayPopUp;