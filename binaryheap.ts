class BinaryHeap {
  list: number[] = [];
  size: number = 0;

  compare(a: number, b: number) {
    return a < b;
  }

  swap(i: number, j: number) {
    const iv = this.list[i];
    const ij = this.list[j];
    this.list[i] = ij;
    this.list[j] = iv;
  }

  add(elem: number) {
    this.list.push(elem);
    this.swim(this.list.length - 1);
    this.size += 1;
  }

  swim(index: number) {
    const parentIndex = Math.floor((index - 1)/2);
    if (this.compare(this.list[index], this.list[parentIndex])) {
      this.swap(index, parentIndex);
      this.swim(parentIndex);
    }
  }

  sink(index: number) {
    const leftIndex = 2 * index + 1;
    const rightIndex = 2 * index + 2;
    let tarIndex = this.compare(this.list[leftIndex], this.list[rightIndex]) ? leftIndex : rightIndex;
    console.log(this.list[tarIndex]);
    if (this.compare(this.list[tarIndex], this.list[index])) {
      this.swap(index, tarIndex);
      this.sink(tarIndex);
    }
  }

  remove(index: number) {
    this.swap(index, this.list.length -1);
    this.list.pop();
    // if (this.compare(this.list[index], this.list[
    const swapped = this.list[index];
    this.sink(index);
    if (this.list[index] === swapped) {
      this.swim(index);
    }
  }

  contains(elem: number) {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i] === elem) {
        return true;
      }
    }
    return false;
  }

  poll() {
    this.remove(0);
  }
}

const bh = new BinaryHeap();
bh.add(1);
console.log(bh.contains(1));
bh.add(3);
bh.add(4);
bh.add(8);
bh.add(2);
bh.add(20);
bh.add(11);
console.log(bh.list);
bh.remove(1);
console.log(bh.list);
