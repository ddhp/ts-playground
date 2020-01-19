const mergeAndCount = (a, b) => {
  let counts = 0;
  const sorted = []
  const n = a.length + b.length;
  let ai = 0;
  let bi = 0;
  for (let i = 0; i < n; i++) {
    if (a[ai] < b[bi] && bi !== b.length) {
      sorted.push(a[ai]);
      ai++
    } else {
      if (ai !== a.length) {
        counts += (a.length - ai);
      }
      sorted.push(b[bi]);
      bi++;
    }
  }
  return [sorted, counts];
}

console.log(mergeAndCount([1,4,5],[2,3,6]));

const inversionCounts = (values) => {
  if (values.length < 2) {
    return [values, 0];
  }
  const halfIndex = Math.floor(values.length/2);
  const [sortedLeft, leftCount] = inversionCounts(values.slice(0, halfIndex));
  const [sortedRight, rightCount] = inversionCounts(values.slice(halfIndex));
  const [sorted, splitCount] = mergeAndCount(sortedLeft, sortedRight);
  const totalCount = leftCount + rightCount + splitCount;
  return [sorted, totalCount];
};
console.log(inversionCounts([2,4,1,3,5]));
