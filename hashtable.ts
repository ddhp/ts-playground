const H: (name: string, age: number, sex: string) => number = (name: string, age: number, sex: string): number => {
    let sum = 0;
    for (let i = 0; i < name.length; i++ ) {
        sum += ASCI(name[i]);
    }
    sum += age;
    sum += sex === 'M' ? 0 : 1;
    return sum | 6;
}

// Hash Function
// output is consistent with same input
// return value is within a certain range
// if H(x) !== H(y), then x must NOT equal to y
// if H(x) === H(y) then we can explictly compare them
//
// Hash Table
// an array which has object stored in the index generated from it's hash function
// able to map the key from an entry into a specific range
//
// Hash collision
// since H(x) and H(y) can potentially output the same index
// in this case, a hash collision happened
// some ways to solve this
// 1. separate chaining: each bucket is a linked list
// 2. open addressing:
//      - next key hash = H(k) + P(k, x) mod N where x is an increment value (x += 1) and N is the size of the table/array
//      - hash function and probe functions are usually paired
//      - removing: put a tombstone when removed an entry
//        - keep searching when hitting a tombstone while finding an entry, set the found entry to the first tombstone index
//
//
