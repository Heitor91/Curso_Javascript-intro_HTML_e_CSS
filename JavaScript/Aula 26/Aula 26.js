const array = [12, 46, 13, 9, 15, 37];
const [numUm, numDois, ...resto] = array;
const [itemUm, , itemDois, , , itemTres] = array;
console.log(numUm, numDois, resto);
console.log(itemUm, itemDois, itemTres);