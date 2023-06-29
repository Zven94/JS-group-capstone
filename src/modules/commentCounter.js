const commentCounter = () => {
  console.log('imin2')
  //const parentCounter = document.querySelector('.ulComments');
  const liCounter = document.querySelectorAll('.liComments');
  let counter = 0;
  console.log(liCounter)
  while (counter < liCounter.length) {
    counter += 1;
    console.log(counter)
  }

};

export default commentCounter;