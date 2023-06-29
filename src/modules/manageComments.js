let commentsData = [];

// get the appId and the item ID to get the Item 's comments using getScore();

const loadFunction = async (appId, ID) => {
  await getScore(appId, ID);

//  const parentElement = document.querySelector('.myArticle-style');
  const parentElement = document.querySelector('.myArticle-form-Div');
  const divComments = document.createElement('div');
  parentElement.appendChild(divComments);
  divComments.classList.add('divComments');

  // Create the parrent elemente to appende the incoming comments

  divComments.innerHTML = `
      <h2 class="h2Comments">Comments (${commentsData.length})</h2>
      <ul class="ulComments">
      </ul>
    `;
  const ulComments = document.querySelector('.ulComments');

  // forEach loop to creat all the elements for each comment

  commentsData.forEach((element) => {
    const liComment = document.createElement('li');
    ulComments.appendChild(liComment);
    liComment.classList.add('liComments');
    liComment.innerHTML = `
    <h3>${element.creation_date} ${element.username} ${element.comment}</h3>
    `;
  });
//
};

// GET function for comments:

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
      // console.log(data)
      try {
        data.forEach((element) => {
          commentsData.push(element);
        });
      } catch (error) {
        return error.message;
      }
      return commentsData;
    });
};

// POST function for comments:

const addNewComment = async (appId, ID) => {
  const userInput = document.querySelector('.form-user');
  const commentInput = document.querySelector('.form-comment');

  if (userInput.value && commentInput.value) {
    await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: `${ID}`,
        username: userInput.value,
        comment: commentInput.value,
      }),
    });
  } else if (!userInput.value && !commentInput.value) {
    userInput.value = 'complete both fields';
    commentInput.value = 'complete both fields';
  }
};

export { loadFunction, addNewComment };