type TToBinary = (num: number) => string;

export const toBinary: TToBinary = num => {
  let result = '';
  while (num > 0) {
    const next = Math.floor(num / 2);
    const remainder = num % 2;
    result = remainder + result;
    num = next;
  }
  return result;
}
// console.log(toBinary(5));
// console.log(toBinary(1024));

const toHex: TToBinary = num => {
  const map = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
  let result = ''
  while (num > 0) {
    const next = Math.floor(num / 16);
    const remainder = num % 16;
    result = map[remainder] + result;
    num = next;
  }
  return result;
};

// console.log(toHex(300));

type FHexToDecimal = (hex: string) => number;
const hexToDecimal: FHexToDecimal = hex => {
  let result = 0;
  const hexArr = hex.split('')
  let count = -1;
  for (let i = hexArr.length -1; i >= 0; i--) {
    let numeric = Number(hexArr[i]);
    if (Number.isNaN(numeric)) {
      switch (hexArr[i]) {
        case 'a':
          numeric = 10;
          break;
        case 'b':
          numeric = 11;
          break;
        case 'c':
          numeric = 12;
          break;
        case 'd':
          numeric = 13;
          break;
        case 'e':
          numeric = 14;
          break;
        case 'f':
          numeric = 15;
          break;
      }
    }
    count +=1;
    result += numeric * Math.pow(16, count);
  }
  return result;
};

// console.log(hexToDecimal('12c'));
