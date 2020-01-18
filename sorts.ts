const shouldSwap = (a: number, b: number) => {
  return a < b;
}

const selectionSort = (values: number[]) => {
  for (let i = 0; i < values.length; i++) {
    let j = i;
    let smallest = Number.POSITIVE_INFINITY;
    let smallestIndex = j;
    while (j < values.length) {
      if (values[j] < smallest) {
        smallest = values[j];
        smallestIndex = j;
      }
      j ++;
    }
    [values[i], values[smallestIndex]] = [values[smallestIndex], values[i]]
  }
  return values;
}

console.log(selectionSort([3, 4, 32, 11, 7]));

const insertSort = (values: number[]) => {
  const result = [];
  for (let i = 0; i < values.length; i++) {
    result.push(values[i]);
    let j:number = result.length -1;
    while (j > 0 && shouldSwap(result[j], result[j-1])) {
      let tmp:number = result[j];
      result[j] = result[j-1];
      result[j-1] = tmp;
      j -= 1;
    }
  }
  return result;
}

// console.log(insertSort([3, 4, 32, 11, 7]));

const bubbleSort = (values: number[]) => {
  for (let i = 0; i < values.length; i++) {
    let j = 0;
    // console.log(i, j);
    while (j < values.length -1 && shouldSwap(values[j], values[j+1])) {
      [values[j], values[j+1]] = [values[j+1], values[j]];
      j += 1;
      // console.log(i, j, values);
    }
  }
  return values;
}

// console.log(bubbleSort([5,4,3,2,1]));

const mergeSort = (values: number[]) => {
  const halfIndex = Math.floor(values.length/2);
  let fh = values.slice(0, halfIndex);
  let sh = values.slice(halfIndex);
  if (fh.length > 1) {
    fh = mergeSort(fh);
  }
  if (sh.length > 1) {
    sh = mergeSort(sh);
  }
  console.log(fh, sh);
  const result = [];
  let fhi = 0;
  let shi = 0;
  for (let i = 0; i < values.length; i++) {
    if (sh[shi] === undefined || fh[fhi] < sh[shi]) {
      result.push(fh[fhi]);
      fhi += 1;
    } else {
      result.push(sh[shi]);
      shi += 1;
    }
  }
  return result;
}
console.log(mergeSort([3, 4, 32, 11, 7]));
