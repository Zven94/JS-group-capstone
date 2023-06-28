const uniqueID = 'rTjcsvYJ35cWdaAtHbOK';
const baseAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';
const likesURL = `${baseAPI}/${uniqueID}/likes`;
const commentsURL = `${baseAPI}/${uniqueID}/comments`;

const getLikes = async () => {
  try {
    const result = await fetch(likesURL, { method: 'GET' });
    const data = await result.json();
    return data;
  } catch (error) {
    return {
      Response: 'False',
      Error: error.message || 'Unexpected error',
    };
  }
};

const fetchLikes = async () => {
  const data = await getLikes();
  const dataResult = await data;
  console.log(dataResult);
  return dataResult;
};

export const loadLikes = async () => fetchLikes();

export const sendLike = async (id) => {
  try {
    const res = await fetch(likesURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        item_id: `${id}`,
      }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    return {
      Response: 'False',
      Error: error.message || 'Unexpected error',
    };
  }
};