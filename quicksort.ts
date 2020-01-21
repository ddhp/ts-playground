const quickSort = (arr: number[], start: number, end: number): number[] => {
  // decide a pivot point
  // 2 pointers: i, j
  // i is the dividing index of 2 partitions
  // which are smaller and bigger then the pivot point
  if (arr.length < 2) return arr;
  let i = start + 1;
  let pivot = arr[start];
  for (let j = start; j < end +1; j++) {
    if (arr[j+1] < pivot) {
      // swap with i
      [arr[j+1], arr[i]] = [arr[i], arr[j+1]];
      i+=1;
    }
  }
  // swap pivot with most right before i
  [arr[start], arr[i-1]] = [arr[i-1], arr[start]];
  if (i !== start+1) {
    quickSort(arr, 0, i-1);
  }
  if (i !== end +1) {
    quickSort(arr, i, end);
  }
  return arr;
}

console.log(quickSort([3,2,8,5,1,4,7,6], 0, 7));
console.log(quickSort([3,2,8,5,1,8,7,6], 0, 7));
