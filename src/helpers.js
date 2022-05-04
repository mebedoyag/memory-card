function shuffleArray(arr) {
  const arrCopy = [ ...arr ];
  const randomArr = genRandomArray(arr.length);
  
  return randomArr.map(num => arrCopy[num]);
}

function genRandomArray(size) {
  const arr = [];
  while (arr.length < size) {
    const randomNum = genRandomNum(size);
    if (!arr.includes(randomNum)) {
      arr.push(randomNum);
    }
  }
  return arr;
}

function genRandomNum(max) {
  return Math.floor(Math.random() * max);
}

export default shuffleArray;
