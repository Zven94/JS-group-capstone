let commentsData = [];


const loadFunction = async (appId, ID) => {
  await getScore(appId, ID);

  const parentElement = document.querySelector('.myArticle-style');
  const divComments = document.createElement('div');
  parentElement.appendChild(divComments);
  divComments.classList.add('divComments')
  console.log(commentsData)
        
  divComments.innerHTML = `
      <h2 class="h2Comments">Comments (${commentsData.length})<h2>
      <ul class="ulComments">
      </ul>
    `;
  const ulComments = document.querySelector('.ulComments');
  
  commentsData.forEach(element => {
  
  const liComment = document.createElement('li');
  ulComments.appendChild(liComment);
  liComment.classList.add('liComments');
  liComment.innerHTML = `
    <h3>${element.creation_date} ${element.username} ${element.comment}</h3>
    `;
  });
}


// GET function for comments:

// const getScore = async (appId, ID) => {
  
//   await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments?item_id=${ID}`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       const parentElement = document.querySelector('.myArticle-style');
//       const divComments = document.createElement('div');
//       parentElement.appendChild(divComments);
//       divComments.classList.add('divComments')
//       console.log(data)
      
//       divComments.innerHTML = `
//     <h2 class="h2Comments">Comments (${data.length})<h2>
//     <ul class="ulComments">
//     </ul>
//   `;
//       const ulComments = document.querySelector('.ulComments');

//       data.forEach(element => {

//         const liComment = document.createElement('li');
//         ulComments.appendChild(liComment);
//         liComment.classList.add('liComments');
//         liComment.innerHTML = `
//     <h3>${element.creation_date} ${element.username} ${element.comment}</h3>
//   `;
//       });
//     });
// };


const getScore = async (appId, ID) => {
  await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments?item_id=${ID}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {

      commentsData = [];
      data.forEach(element => {
        commentsData.push(element);
      });
      console.log(commentsData)
      return commentsData
    });
};

// POST function for comments:

const addNewComment = async (appId, ID) => {
  const userInput = document.querySelector('.form-user');
  const commentInput = document.querySelector('.form-comment');

  if (userInput.value && commentInput.value) {

    fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: `${ID}`,
        username: userInput.value,
        comment: commentInput.value
      }),
    })
      .then(response => {
        console.log(body)
      })
      .catch(error => {
      });
  } else if (!userInput.value && !commentInput.value) {
    console.log('fill both fields');
  }
};

export { loadFunction, addNewComment };