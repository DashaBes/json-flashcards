export function* letterGenerator() {
  let letter = 'a';
  while (true) {
    yield letter;
    letter = String.fromCharCode(letter.charCodeAt() + 1);
  }
}

export function *idGenerator() {
  let id = 0;
  while(true) {
    yield id;
    id++;
  }
}

export const getLetterFromId = id => {
  const base = 97;
  return String.fromCharCode(base + id);
}

