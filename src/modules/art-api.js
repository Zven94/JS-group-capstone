const baseURL = 'https://api.artic.edu/api/v1/artworks';
const pageNum = 'page=2';
const limit = 'limit=12';
const fullURL = `${baseURL}?${pageNum}&${limit}`;

const getArtWorks = async () => {
  try {
    const result = await fetch(fullURL, { method: 'GET' });
    const data = await result.json();
    return data;
  } catch (error) {
    return {
      Response: 'False',
      Error: error.message || 'Unexpected error',
    };
  }
};

const fetchArtWorks = async () => {
  const data = await getArtWorks();
  const dataResult = await data.data;
  return dataResult;
};

export default fetchArtWorks;