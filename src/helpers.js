function genRandArray(max) {
  const randomNumber = (max) => {
    return Math.floor(Math.random() * max) + 1;
  }
  
  const arr = [];
  while (arr.length < max) {
    const num = randomNumber(max);
    if (!arr.includes(num)) {
      arr.push(num);
    }
  }
  
  return arr;
}

export default genRandArray;
