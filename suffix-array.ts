const compareStrings = (str1: string, str2: string): number => {
  let isOneLatter = false;
  let i = 0;
  while (str1[i] === str2[i] && i < (Math.min(str1.length, str2.length) - 1)) {
    i += 1;
  }
  if (str1[i] === str2[i]) {
    if (str1.length === str2.length) {
      return 0;
    }
    return str1.length > str2.length ? 1 : -1;
  }
  return str1[i] > str2[i] ? 1 : -1;
}

// console.log(compareStrings('b', 'e'));
// console.log(compareStrings('e', 'a'));
// console.log(compareStrings('asdfjiva', 'asdfkiva'));

class SuffixArray {
  suffixes: number[] = [0];
  constructor(str: string) {
    let unsorted = [];
    for (let i = 0; i < str.length; i++) {
      unsorted.push(str.slice(i));
    }
    let ref = unsorted.slice();
    ref.sort(compareStrings);
    for (let i = 0; i < ref.length -1; i++) {
      const current = ref[i];
      const next = ref[i+1];
      let commonCount = 0;
      for (let j = 0; j < current.length; j++) {
        if (current[j] === next[j]) {
          commonCount += 1;
        }
      }
      this.suffixes.push(commonCount);
    }
  }
}

const uniqueuCommonStringCount = (str: string) => {
  const sa = new SuffixArray(str);
  const duplicateCount = sa.suffixes.reduce((c, accum) => c + accum, 0);
  return str.length * (str.length + 1) /2 - duplicateCount;
}

const sa = new SuffixArray('AZAZA');
console.log(sa);
console.log(uniqueuCommonStringCount('AZAZA'));
