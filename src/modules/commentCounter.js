const commentCounter = () => {
  const ulparent = document.querySelector('.ulComments');

  if (ulparent) {
    const liList = Array.from(ulparent.querySelectorAll('li'));
    const count = liList.length;
    return count;
  }
  return 0;
};

export default commentCounter;
