// const commentsButton = document.querySelector(`#${id}`);

const displayPopUp = (myElement) => {
  const popUpDiv = document.querySelector('.capstone-header-popUp-hide');
  const parentPopUp = document.querySelector('.capstone-popUp-noneBlur');

  popUpDiv.classList.add('capstone-header-popUp-display');
  popUpDiv.classList.remove('capstone-header-popUp-hide');

  const articleDisplay = document.createElement('article');
  popUpDiv.appendChild(articleDisplay);
  articleDisplay.classList.add('myArticle-style');

  parentPopUp.classList.add('capstone-popUp-blur');
  parentPopUp.classList.remove('capstone-popUp-noneBlur');

  articleDisplay.innerHTML = `

   <h3>${myElement.title}</h3>
   <img src="${myElement.image}" class= "card-image">
   <p>Artist info: ${myElement.artistInfo}</p>
   <h3>ID: ${myElement.id}</h3>
   `;

  // function to close the article
  const closeBtn = document.querySelector('.div-popUp-close');
  closeBtn.addEventListener('click', () => {
    popUpDiv.classList.add('capstone-header-popUp-hide');
    popUpDiv.classList.remove('capstone-header-popUp-display');
    parentPopUp.classList.remove('capstone-popUp-blur');
    parentPopUp.classList.add('capstone-popUp-noneBlur');

    while (document.querySelector('.myArticle-style')) {
      document.querySelector('.myArticle-style').remove();
    }
  });
};

export default displayPopUp;