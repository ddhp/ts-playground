import { mergeSort } from './sorts';
const inversionBruteForce = (values: number[]) => {
  const result = [];
  for (let i = 0; i < values.length; i++) {
    for (let j = i; j < values.length; j++) {
      // compare
      if (values[i] > values[j]) {
        result.push([values[i], values[j]]);
      }
    }
  }
  return result;
}

console.log(inversionBruteForce([1,3,5,2,4,6]));
// const inversion = (values: number[]) => {
//   const sorted = mergeSort(values.slice());
//   const wrongedIndices: { [key: number]: number; } = {}; // key: miss placed value, value: its index
//   const sortedIndices: { [key: number]: number; } = {};
//   let counts = 0; // key: right number
//   for (let i = 0; i < sorted.length; i++) {
//     if (values[i] !== sorted[i]) {
//       if (wrongedIndices[sorted[i]]) {
//         counts += i - wrongedIndices[sorted[i]];
//       } else {
//         wrongedIndices[values[i]] = i;
//         console.log('set wrongedIndices', values[i], wrongedIndices)
//       }
//       if (sortedIndices[values[i]]) {
//         counts += i - sortedIndices[values[i]];
//       } else {
//         console.log('set sortedIndices', values[i], sortedIndices)
//         sortedIndices[sorted[i]] = i;
//       }
//     }
//   }
//   return counts;
// }

type Response = [number[], number];

const mergeAndCount = (a: number[], b: number[]) => {
  return [[0], 0];
}

const inversionCounts = (values: number[]) => {
  if (values.length < 2) {
    return [values, 0];
  }
  const halfIndex = Math.floor(values.length/2);
  // const leftRes = inversionCounts(values.slice(0, halfIndex));
  // const sortedLeft = leftRes[0];
  // const leftCount = leftRes[1];
  // const rightRes = inversionCounts(values.slice(halfIndex));
  // const sortedRight = rightRes[0];
  // const rightCount = rightRes[1];
  const [sortedLeft, leftCount] = inversionCounts(values.slice(halfIndex));
  const [sortedRight, rightCount] = inversionCounts(values.slice(halfIndex));
  const [sorted, splitCount] = mergeAndCount(sortedLeft, sortedRight);
  // const mergeRes = mergeAndCount(sortedLeft, sortedRight);
  // const sorted = mergeRes[0];
  // const splitCount = mergeRes[1];
  const totalCount: number = leftCount + rightCount + splitCount;
  return [sorted, totalCount];
};
// console.log(inversion([1,3,5,2,4,6]));
console.log(inversion([3,1,5,2,4,6]));
