import murmur from 'murmurhash-js';
const localSeed = Date.now();

export function* letterGenerator() {
  let letter = 'a';
  while (true) {
    yield letter;
    letter = String.fromCharCode(letter.charCodeAt() + 1);
  }
}

export function* idGenerator() {
  let id = 0;
  while (true) {
    yield id;
    id++;
  }
}

export const getLetterFromId = id => {
  const base = 97;
  return String.fromCharCode(base + id);
};

export const randomizeArray = arr => {
  // Fisher-Yates algorithm
  const randomArray = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    const j = Math.floor(Math.random() * (arr.length - i) + i);
    const newI = randomArray[j] ? randomArray[j] : arr[j];
    const newJ = randomArray[i] ? randomArray[i] : arr[i];
    randomArray[i] = newI;
    randomArray[j] = newJ;
  }
  return randomArray;
};

export const getStringHash = (str, seed) => {
  // MurmerHash3 algorithm
  if (!seed) {
    seed = localSeed;
  }
  return murmur.murmur3(str, seed);
}
