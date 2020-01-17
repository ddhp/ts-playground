class Sumup {
  originalArr: number[] = [];
  sumArr: number[] = [];
  constructor(initials: number[]) {
    for (let i = 0; i < initials.length; i++) {
      this.push(initials[i]);
    }
  }

  push(elem: number) {
    this.originalArr.push(elem);
    if (this.sumArr.length === 0) {
      this.sumArr.push(0);
    } else {
      this.sumArr.push(this.sumArr[this.sumArr.length -1] + elem);
    }
  }

  getSumFromRange(i:number, j:number): number {
    if (i > j) {
      return this.sumArr[i] - this.sumArr[j];
    }
    return this.sumArr[j] - this.sumArr[i];
  }
}

const sumup = new Sumup([5, -3, 6, 1, 0, -4, 11, 6, 2, 7]);
console.log(sumup.getSumFromRange(2, 7));
