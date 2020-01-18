// also called binary indexed tree
// LST = least Significant Bit
// the range for response = LSB(i)
// found next/parent index: j = i + LSB(i)
import { toBinary } from './to-binary';

const LSB = (num: number): number => {
  // changed to binary
  const binary = toBinary(num);
  // console.log(binary);
  let lsb = 0;
  const toNum = (lsb: number) => Math.pow(2, lsb);
  for (let i = binary.length -1; i >=0; i--) {
    if (binary[i] === '1') {
      lsb = binary.length -1 - i;
      // console.log('a', i, lsb);
      return toNum(lsb);
    }
  }
  return toNum(lsb);
};

// console.log(LSB(1));
// console.log(LSB(9));

class FenwickTree {
  values: number[] = [0];
  size: number = 0;

  constructor(values: number[]) {
    // from index 0, add to this.values from index 1;
    for (let i = 0; i < values.length; i++) {
      this.values[i + 1] = values[i];
    }
    console.log(this.values);
    for (let i = 1; i < this.values.length; i++) {
      const parentI = i + LSB(i);
      if (parentI < values.length) {
        this.values[parentI]  = this.values[parentI] + this.values[i];
      }
    }
    this.size = this.values.length -1;
  }

  sumToIndexOne(i: number): number {
    let sum = 0;
    while (i > 0) {
      sum += this.values[i];
      i = i - LSB(i);
    }
    return sum;
  }

  sum(i: number, j: number): number {
    // return [1, j] - [1, i)
    let sumj = this.sumToIndexOne(j);
    let sumi = this.sumToIndexOne(i -1);
    // console.log(sumj, sumi);

    return sumj -sumi;
  }

  add(i: number, v: number): void {
    while (i > 0 && i <= this.size) {
      this.values[i] = this.values[i] + v;
      i = i + LSB(i);
    }
  }
}

const ft = new FenwickTree([3, 4, -2, 7, 3, 11, 5, -8, -9, 2, 4, -8]);
console.log(ft);
console.log(ft.sum(3, 8));
ft.add(3, 1)
console.log(ft);
