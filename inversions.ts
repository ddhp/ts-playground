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
type TFnOne = (a: number[]) => [number[], number];
type TFnTwo = (a: number[], b: number[]) => [number[], number];

const mergeAndCount: TFnTwo = (a: number[], b: number[]) => {
  let count = 0;
  const sorted = [];
  let ai = 0;
  let bi = 0;
  for (let i = 0; i < a.length + b.length; i++) {
    if (a[ai] < b[bi] && ai !== a.length) {
      sorted.push(a[ai]);
      ai += 1
    } else {
      if (ai !== a.length) {
          count += (a.length - ai);
      }
      sorted.push(b[bi]);
      bi += 1;
    }
  }
  return [sorted, count];
}

const inversionCounts: TFnOne = (values: number[]) => {
  if (values.length < 2) {
    return [values, 0];
  }
  const halfIndex = Math.floor(values.length/2);
  const [sortedLeft, leftCount] = inversionCounts(values.slice(0, halfIndex));
  const [sortedRight, rightCount] = inversionCounts(values.slice(halfIndex));
  const [sorted, splitCount] = mergeAndCount(sortedLeft, sortedRight);
  const totalCount: number = leftCount + rightCount + splitCount;
  return [sorted, totalCount];
};
console.log(inversionCounts([1,3,5,2,4,6]));
// console.log(inversionCounts([3,1,5,2,4,6]));
