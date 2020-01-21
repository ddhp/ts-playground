interface TO {
    [key: string]: number
}
const findUniques = (a: string[], b: string[]) => {
  const valueMap: TO = {};
  for (let i = 0; i < a.length; i++) {
    if (!valueMap[a[i]]) {
      valueMap[a[i]] = 1;
    } else {
      valueMap[a[i]] +=1;
    }
  }
  for (let i = 0; i < b.length; i++) {
    if (!valueMap[b[i]]) {
      valueMap[b[i]] = 1;
    } else {
      valueMap[b[i]] +=1;
    }
  }
  const result = [];
  for (let key in valueMap) {
    if (valueMap[key] === 1) {
      result.push(key);
    }
  }
  return result;
};

console.log(findUniques(['4', '3', '2', '9', '5', '7'], ['3', '2', '1', '9', '8', '7', '11']));

// time 2m*n
const fu = (a: string[], b: string[]) => {
  const result = [];
  for (let i = 0; i < a.length; i++) {
    let count = 0;
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        count += 1;
      }
    }
    if (count === 0) {
      result.push(a[i]);
    }
  }
  for (let i = 0; i < b.length; i++) {
    let count = 0;
    for (let j = 0; j < a.length; j++) {
      if (b[i] === a[j]) {
        count += 1;
      }
    }
    if (count === 0) {
      result.push(b[i]);
    }
  }
  return result;
}

console.log(fu(['4', '3', '2', '9', '5', '7'], ['3', '2', '1', '9', '8', '7', '11']));
